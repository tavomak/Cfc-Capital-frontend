import {shimmer, toBase64} from 'helpers';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import Image from 'next/image';
import Link from 'next/link'
import Layout from 'components/Templates/Layout';

export default function News({ posts, preview }) {
  return (
    <Layout
      title="Servicios"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      <section className="container-fluid mb-md-5 py-5" style={{ background: 'url(/fondo-noticias.svg) no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom center'}}>
        <div className="container">
          {preview && <p>Preview mode</p>}
          <div className="row mt-5">
            <div className="col-md-6">
              <h1 className={`display-font text-dark-blue`}>Como adecuar su Pyme según la realidad económica</h1>
            </div>
            <div className="col-md-6" >
              <div className="px-4">
                <Image
                  src="/video-prensa.jpg"
                  alt="Cfc Capital Logo"
                  width={16}
                  height={9}
                  layout="responsive"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="/video-prensa.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-5">
        <div className="row justify-content-stretch">
        {posts?.length > 0 && posts.map((item) => (
          <div className="col-md-4 pb-5" key={item.id}>
            <div className="card shadow" style={{ height: '100%'}}>
              <div className="card-header">
                <Link href={`/prensa/${item.slug}`}>
                  <a href="!#" className="noticeImg d-block mb-4">
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
                  </a>
                </Link>
              </div>
              <div className="card-body">
                  <p className="display-font">
                    {item.title}
                  </p>
                  <Link href={`/prensa/${item.slug}`}>
                    <a href={`/prensa/${item.slug}`}className="btn btn-primary display-font">
                      Ver más
                    </a>
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