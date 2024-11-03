import { useRouter } from 'next/router';
import DOMPurify from 'isomorphic-dompurify';

import { getAllPosts, getPostAndMorePosts, markdownToHtml } from '@/utils';
import Spinner from '@/components/Atoms/Spinner';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/Templates/Layout';
import Card from '@/components/Atoms/Card';
import Button from '@/components/Atoms/Button';

export default function Post({ post, morePosts }) {
  const router = useRouter();
  return (
    <Layout
      title="Servicios"
      description={!router.isFallback ? post.article.title : ''}
    >
      {router.isFallback ? (
        <div className="min-h-[calc(100vh-217px)] text-dark-blue">
          <Spinner type="dots" />
        </div>
      ) : (
        <>
          <Head>
            <title>{post.article.title} | CFC Capital</title>
            <meta property="og:image" content={post.article.coverImage.url} />
          </Head>

          <article className="main">
            <section className="bg-light-blue py-10">
              <div className="container max-w-screen-xl mx-auto md:px-4 flex flex-wrap items-center">
                <div className="md:w-1/2">
                  <div className="h-96 overflow-hidden">
                    <Image
                      src={`${post.article.coverImage.url}`}
                      alt={post.article.title}
                      width={500}
                      height={380}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </div>
                <div className="p-4 md:w-1/2">
                  <h1 className="display-font text-purple pb-4 text-2xl font-bold">
                    {post.article.title}
                  </h1>
                </div>
              </div>
            </section>
            <section className="container mx-auto max-w-screen-xl my-10">
              {post.article.video && (
                <figure className="video-container max-w-screen-lg mx-auto">
                  <iframe
                    className="w-full aspect-video"
                    title="Embed video"
                    src={`https://www.youtube.com/embed/${post.article.video}?feature=oembed&enablejsapi=1&enablejsapi=1' ;`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </figure>
              )}
              <div className="py-10 my-10">
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.article.content.html),
                  }}
                />
              </div>
            </section>
          </article>

          <aside className="container max-w-screen-xl mx-auto">
            <div className="col-12">
              <hr />
              <h2 className="display-font text-purple py-4 fs-5">
                Más noticias
              </h2>
            </div>
            <section className="container mx-auto flex flex-wrap justify-center items-stretch">
              {morePosts?.length > 0 &&
                morePosts.map((item) => (
                  <Card
                    key={item.id}
                    containerClassName="p-4 md:w-1/2 lg:w-1/3 mb-10"
                    cardClassName="flex flex-col justify-between group"
                    header={
                      <a
                        href={`/prensa/${item.slug}`}
                        className="min-h-64 overflow-hidden"
                      >
                        <Image
                          className="scale-110 group-hover:scale-100 transition"
                          src={item.coverImage.url}
                          alt={item.title}
                          width={500}
                          height={500}
                          style={{
                            width: '100%',
                            height: '100%',
                            maxHeight: '16rem',
                            objectFit: 'cover',
                            objectPosition: 'top',
                          }}
                        />
                      </a>
                    }
                    footer={
                      <a
                        className="w-full ps-10 py-2"
                        href={`/prensa/${item.slug}`}
                      >
                        <Button className="btn btn-gray" text="Leer más" />
                      </a>
                    }
                  >
                    <a href={`/prensa/${item.slug}`}>
                      <p className="px-6 py-8 text-blue text-xl">
                        {item.title.slice(0, 100)}
                        {item.title.length > 100 && '...'}
                      </p>
                    </a>
                  </Card>
                ))}
            </section>
          </aside>
        </>
      )}
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
  const {
    data: { posts },
  } = await getAllPosts();

  return {
    paths: posts?.map((post) => `/prensa/${post.slug}`) || [],
    fallback: true,
  };
}
