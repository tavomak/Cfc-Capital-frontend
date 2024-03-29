import { useRouter } from 'next/router';
import { shimmer, toBase64 } from '@utils/index';
import { getAllPosts, getPostAndMorePosts } from '@utils/lib/api';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '@components/Templates/Layout';
import MoreStories from '@components/Molecules/MorePosts';
import markdownToHtml from '@utils/lib/markdownToHtml';

export default function Post({ post, morePosts }) {
  const router = useRouter();
  return (
    <Layout
      title="Servicios"
      description={!router.isFallback ? post.article.title : ''}
    >
      <section className="container">
        {router.isFallback ? (
          <div className="row content-wrapper align-items-center justify-content-center">
            <div className="spinner-border text-secondary-color" style={{ width: '3rem', height: '3rem' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <Head>
              <title>
                {post.article.title}
                {' '}
                | CFC Capital
              </title>
              <meta property="og:image" content={post.article.coverImage.url} />
            </Head>
            <article className="row">
              <div className="col-12 pt-5">
                <div className="position-relative">
                  <div className="overlay" />
                  <div className="d-none d-lg-block">
                    <Image
                      src={`${post.article.coverImage.url}`}
                      alt={post.article.title}
                      layout="responsive"
                      objectFit="contain"
                      objectPosition="top"
                      width={700}
                      height={280}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                  </div>
                  <div className="d-lg-none">
                    <Image
                      src={`${post.article.coverImage.url}`}
                      alt={post.article.title}
                      layout="responsive"
                      objectFit="cover"
                      width={500}
                      height={400}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                  </div>
                </div>
                <div className="pt-5 pb-3">
                  <h1 className="display-font text-soft-purple pb-4 fs-4">{post.article.title}</h1>
                  {post.article.video && (
                  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <figure
                      className="video-container"
                    >
                      <iframe
                        className="video-iframe"
                        title="Embed video"
                        src={`https://www.youtube.com/embed/${post.article.video}?feature=oembed&enablejsapi=1&enablejsapi=1' ;`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </figure>
                  </div>
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: post.article.content.html }}
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
  );
}

export async function getStaticProps({ params, preview = null }) {
  const { slug } = params;
  const data = await getPostAndMorePosts(slug);

  if (!data?.data?.post) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const content = await markdownToHtml(data.data.post.content || '');

  return {
    props: {
      preview,
      post: {
        article: data.data.post,
        content,
      },
      morePosts: data.data.morePosts,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { data: { posts } } = await getAllPosts();

  return {
    paths: posts?.map((post) => `/prensa/${post.slug}`) || [],
    fallback: true,
  };
}
