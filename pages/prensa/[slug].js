import { useRouter } from 'next/router'
import Image from 'next/image';

import Layout from 'components/Templates/Layout';

import MoreStories from 'components/Molecules/MorePosts'
import { getAllPostsForHome, getPostAndMorePosts } from 'lib/api'
import Head from 'next/head'
import markdownToHtml from 'lib/markdownToHtml'

export default function Post({ post, morePosts }) {
  const router = useRouter()
  return (
    <Layout 
      title="Servicios"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <section className="container">
        {router.isFallback ? (
            <p>Loading</p>
          ): (
            <>
              <Head>
                <title>
                  {post.article.title} | CFC Capital
                </title>
                <meta property="og:image" content={post.article.image.url} />
              </Head>
              <article className="row">
                <div className="col-12 pt-5">
                <div className="position-relative">
                    <div className="overlay"></div>
                    <div className="d-none d-lg-block">
                      <Image
                        src={`${post.article.image.url}`}
                        alt={post.article.title}
                        layout="responsive"
                        objectFit='contain'
                        objectPosition="top"
                        width={700}
                        height={280}
                      />
                    </div>
                    <div className="d-lg-none">
                      <Image
                        src={`${post.article.image.url}`}
                        alt={post.article.title}
                        layout="responsive"
                        objectFit='cover'
                        width={500}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="pt-5 pb-3">
                    <h1 className="display-font text-soft-purple pb-4 fs-4">{post.article.title}</h1>
                    {post.article.video_url && (
                      <div style={{ maxWidth: "500px", margin: "0 auto"}}>
                        <figure
                        className="video-container"
                        >
                            <iframe
                              className="video-iframe"
                                title="Embed video"
                                src={`https://www.youtube.com/embed/${post.article.video_url}?feature=oembed&enablejsapi=1&enablejsapi=1' ;`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </figure>
                      </div>
                    )}
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </div>
              </article>
              <aside className="row mb-5">
                <div className="col-12">
                  <hr />
                  <h2 className="display-font text-soft-purple py-4 fs-5">Más noticias</h2>
                </div>
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}
              </aside>
            </>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data.articles[0].content || '')

  return {
    props: {
      preview,
      post: {
        article: data.articles[0],
        content,
    },
      morePosts: data.morePosts,
    },
    revalidate: 100
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsForHome()
  return {
    paths: allPosts?.map((post) => `/prensa/${post.slug}`) || [],
    fallback: false,
  }
}