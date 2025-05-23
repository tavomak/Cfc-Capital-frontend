import { useRouter } from 'next/router';
import { getAllPosts, getPostAndMorePosts, markdownToHtml } from '@/utils';
import Spinner from '@/components/Atoms/Spinner';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Templates/Layout';
import RichContent from '@/components/Atoms/RichContent';
import NewCard from '@/components/Molecules/NewCard';

export default function Post({ post, morePosts }) {
  const title = `${post?.article?.title} | CFC Capital`;
  const currentPost = post?.article;

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
            <title>{title}</title>
            <meta property="og:image" content={currentPost.coverImage?.url} />
          </Head>

          <article className="main bg-gradient-to-r from-white to-soft-blue-light">
            <section className="py-10">
              <div className="container items-center max-w-screen-xl mx-auto md:flex">
                <div className="md:w-1/2">
                  <div className="overflow-hidden h-96">
                    <Image
                      src={`${currentPost.coverImage?.url}`}
                      alt={currentPost.title}
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
                  <h1 className="text-3xl font-bold md:text-5xl display-font text-blue">
                    {currentPost.title}
                  </h1>
                </div>
              </div>
            </section>

            <section className="container w-11/12 max-w-screen-xl px-4 mx-auto md:w-3/5 md:mx-0 md:ml-auto">
              {currentPost.video && (
                <figure className="max-w-screen-lg mx-auto video-container">
                  <iframe
                    className="w-full aspect-video"
                    title="Embed video"
                    src={`https://www.youtube.com/embed/${currentPost?.video}?feature=oembed&enablejsapi=1&enablejsapi=1' ;`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </figure>
              )}
              <div className="my-10">
                <div className="md:w-4/5">
                  {currentPost.tags?.length > 0 && (
                    <span className="px-3 py-1 text-sm rounded-md w-fit bg-sky-100 text-soft-blue">
                      {currentPost.tags}
                    </span>
                  )}
                  {currentPost.author && (
                    <div className="mb-4">
                      <span className="text-base text-blue">
                        {currentPost.author.name}
                      </span>
                      |
                      <span className="text-base text-blue">
                        {currentPost.author.title}
                      </span>
                    </div>
                  )}

                  <RichContent
                    content={currentPost.content.json}
                    references={currentPost.content.references}
                  />
                </div>
              </div>
            </section>

            <aside className="container px-8 mx-auto">
              <div>
                <hr />
                <h2 className="py-4 text-2xl text-center md:text-left display-font text-purple">
                  Más noticias
                </h2>
              </div>
              <div className="grid gap-12 px-4 mb-8 md:grid-cols-2 lg:grid-cols-3">
                {morePosts?.length > 0 &&
                  morePosts.slice(0, 3).map((item) => (
                    <a
                      href={`/prensa/${item.slug}`}
                      key={item.id}
                      className="flex flex-col w-full p-4 bg-sky-50 group hover:shadow-none rounded-3xl"
                    >
                      <NewCard
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        slug={item.slug}
                        image={item.coverImage.url}
                        author={item.author}
                        tags={item.tags}
                        excerpt={item.excerpt}
                      />
                    </a>
                  ))}
              </div>
            </aside>
          </article>
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
  try {
    const posts = await getAllPosts();
    if (!posts?.data?.posts) {
      console.warn(
        'No se encontraron posts o la estructura de datos es incorrecta'
      );
      return {
        paths: [],
        fallback: true,
      };
    }

    return {
      paths: posts.data.posts.map((post) => `/prensa/${post.slug}`),
      fallback: true,
    };
  } catch (error) {
    console.warn('Error en getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
