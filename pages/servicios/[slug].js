import { useRouter } from 'next/router'
import Image from 'next/image';

import Layout from 'components/Templates/Layout';

import { getServiceBySlug, getAllServices } from 'lib/api'
import Head from 'next/head'

export default function Post({ data, morePosts }) {
  const router = useRouter();
  return (
    <Layout 
      title={data.Seo.metaTitle}
      description={data.Seo.metaDescription}
      // bgImage="fondo-servicios.svg"
    >
      <section className="container">
        {router.isFallback ? (
            <p>Loading</p>
          ): (
            <>
              <Head>
                <title>
                  {data.Seo.metaTitle} | CFC Capital
                </title>
                <meta property="og:image" content={data.Seo.ShareImage} />
              </Head>
              <article className="row">
                <div className="col-12 pt-5">
                <div className="position-relative">
                    <div className="overlay"></div>
                    <div className="d-none d-lg-block">
                      <Image
                        src={`${data.Banner.url}`}
                        alt={data.Seo.metaTitle}
                        layout="responsive"
                        objectFit='contain'
                        objectPosition="top"
                        width={700}
                        height={280}
                      />
                    </div>
                    <div className="d-lg-none">
                      <Image
                        src={`${data.Banner.url}`}
                        alt={data.Seo.metaTitle}
                        layout="responsive"
                        objectFit='cover'
                        width={500}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="pt-5 pb-3">
                    <h1 className="display-font text-soft-purple pb-4 fs-4">{data.Seo.metaTitle}</h1>
                  </div>
                </div>
              </article>
            </>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getServiceBySlug(params.slug, preview)
  return {
    props: {
      preview,
      data: data[0],
    },
    revalidate: 100
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllServices();
  
  return {
    paths: allPosts?.filter((item) => item.slug !== 'factoring-web').map((post) => `/servicios/${post.slug}`) || [],
    fallback: true,
  }
}