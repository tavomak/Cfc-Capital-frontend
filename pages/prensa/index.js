import {shimmer, toBase64} from 'helpers';
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";
import { fakeNewsData } from '@data/index';

import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/Templates/Layout';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_API_URL,
  cache: new InMemoryCache()
});

export default function News({ posts, preview }) {
  return (
    <Layout
      title="Servicios"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <section className="py-5 mb-5 bg-secondary-gradient">
        <div className="container py-lg-5">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-md-6">
              <h1 className="text-dark-blue fw-bolder">
              Recursos para orientar a tu <span className="text-soft-purple">pyme</span> en la realidad económica
              </h1>
            </div>
            <div className="col-md-6">
              <Image
                src="/prensa-bg.png"
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={1030}
                height={660}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mb-5">
        <div className="row justify-content-stretch">
        {posts?.length > 0 && posts.map((item) => (
          <div className="col-md-4 pb-5" key={item.id}>
            <div className="card shadow" style={{ height: '100%'}}>
              <div className="card-header p-0">
                <Link href={`/prensa/${item.slug}`}>
                  <a href="!#" className="noticeImg d-block overflow-hidden" style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
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

  if (process.env.ENVIRONMENT_KEY === 'production') {
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
  } else {
    return {
      props: {
        posts: fakeNewsData,
      }
    }
  }

}