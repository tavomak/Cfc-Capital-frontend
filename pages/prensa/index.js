import {shimmer, toBase64} from 'helpers';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import Image from 'next/legacy/image';
import Link from 'next/link'
import Layout from 'components/Templates/Layout';
import Hero from "@components/Molecules/Hero";

export default function News({ posts, preview }) {
  return (
    <Layout
      title="Servicios"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      <Hero image="/hero-blog.jpg" alt="Prensa" />

      <section className="container my-5">
        <div className="row py-5">
          <h1 className="display-font text-dark-blue text-center">Prensa especializada</h1>
        </div>
        <div className="row justify-content-stretch">
        {posts?.length > 0 && posts.map((item) => (
          <div className="col-md-4 pb-5" key={item.id}>
            <div className="card d-flex flex-column" style={{ height: '100%'}}>
              <div className="card-header p-0">
                <Link href={`/prensa/${item.slug}`} className="noticeImg d-block">
                  <Image
                    src={item.coverImage?.url ? item.coverImage.url : '/leasing-card.png'}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    alt="Cfc Capital Logo"
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="top left"
                  />
                </Link>
              </div>
              <div className="mb-4 p-4 card-body bg-grey">
                  <p className="display-font">
                    {item.title}
                  </p>
              </div>
              <div className="footer p-3 text-center">
                <Link href={`/prensa/${item.slug}`} className="btn btn-complementary display-font px-4">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = null }) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_CMS_API_URL,
    cache: new InMemoryCache()
  });

  const allPosts = (await client.query({
    query: gql`
      query getAllPostsForHome {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        coverImage {
          url
        }
        createdAt
      }
    }
    `,
  })) || []

  const posts = await allPosts.data.posts;

  return {
    props: { posts, preview },
    revalidate: 10
  }
}