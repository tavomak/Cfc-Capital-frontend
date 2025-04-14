import { useState } from 'react';
import { getPageBySlugAndCategories, getAllPosts, mediaLogos } from '@/utils';
import Layout from '@/components/Templates/Layout';
import MediaSection from '@/components/Templates/MediaSection';
import SubscribeSection from '@/components/Templates/SubscribeSection';
import NewCard from '@/components/Molecules/NewCard';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Atoms/Card';

const filterPosts = (posts, category) =>
  posts.filter((item) => item.categories[0].name === category);

const News = ({ posts, categories }) => {
  const [factoringPosts] = useState(
    filterPosts(posts, 'Factoring').filter((item, key) => key < 6)
  );
  const highlightedPost = posts.find((post) => post.highlightNew);
  const [prensaPosts] = useState(
    filterPosts(posts, 'Prensa').filter(
      (post) => post.title !== highlightedPost?.title
    )
  );

  return (
    <Layout
      title="Blog y prensa"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      <div className="bg-soft-light-blue">
        <section className="container px-4 py-20 mx-auto">
          {highlightedPost && (
            <a
              href={`/prensa/${highlightedPost.slug}`}
              className="block p-4 overflow-hidden shadow-xl rounded-3xl group bg-sky-50 md:flex "
              key={highlightedPost.id}
            >
              <div className="relative overflow-hidden md:w-1/2 rounded-2xl">
                <Image
                  src={highlightedPost.coverImage?.url}
                  alt={highlightedPost.title}
                  width={738}
                  height={450}
                  className="object-cover object-top w-full transition-transform duration-300 scale-100 h-80 md:h-full group-hover:scale-110 max-h-[450px]"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                <div className="max-w-md">
                  <h2 className="text-base font-semibold display-font md:text-2xl text-blue">
                    {highlightedPost.title}
                  </h2>

                  {highlightedPost.author && (
                    <div className="flex items-center gap-3 my-6">
                      {highlightedPost.author?.picture && (
                        <div className="relative w-12 h-12 overflow-hidden rounded-full shrink-0">
                          <Image
                            src={highlightedPost.author.picture?.url}
                            alt={`${highlightedPost.author.name} profile picture`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-dark-grey">
                          {highlightedPost.author.name}
                        </p>
                        <p className="text-xs text-dark-grey">
                          {highlightedPost.author.title}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="text-xs leading-relaxed text-dark-grey md:text-base">
                    {highlightedPost.excerpt}
                  </p>
                </div>
              </div>
            </a>
          )}
        </section>

        <section className="container mx-auto">
          <h2 className="px-4 mb-6 text-lg font-semibold display-font text-medium-blue">
            Últimas notas de prensa
          </h2>
          <div className="grid gap-12 mb-8 md:grid-cols-2 lg:grid-cols-3">
            {prensaPosts?.length > 0 &&
              prensaPosts
                .slice(0, 9)
                .map((item) => (
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
                ))}
          </div>
          {prensaPosts?.length > 9 && (
            <div className="mb-8 text-center">
              <Link
                className="px-6 btn btn-primary"
                href="/prensa/categoria/prensa/1"
              >
                Ver más
              </Link>
            </div>
          )}
        </section>

        <SubscribeSection />

        <section className="container block mx-auto lg:hidden">
          <h3 className="px-4 my-6 text-base font-semibold display-font text-medium-blue">
            Explorar por categoría
          </h3>
          <ul className="flex flex-wrap justify-center w-11/12 gap-6 mx-auto">
            {categories?.map((item) => (
              <li
                key={item.slug}
                className="px-4 py-1 bg-soft-medium-blue rounded-xl"
              >
                <a
                  href={`/prensa/categoria/${item.slug}/1`}
                  className="text-xs font-semibold text-blue"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="container mx-auto">
          <h2 className="px-4 my-6 text-base font-semibold md:my-12 md:text-3xl md:font-bold display-font text-medium-blue">
            Factoring
          </h2>
          <article className="flex">
            <div className="w-full mb-8 space-y-8 lg:w-2/3">
              {factoringPosts?.length > 0 &&
                factoringPosts.slice(0, 3).map((item) => (
                  <Card
                    key={item.slug}
                    cardClassName="p-4 flex items-center bg-white gap-4 group shadow-lg hover:shadow-none border-none"
                  >
                    <a
                      href={`/prensa/${item.slug}`}
                      className="overflow-hidden rounded-xl min-w-32 md:min-w-64 group"
                    >
                      <Image
                        className="overflow-hidden transition scale-100 rounded-xl group-hover:scale-110"
                        src={item.coverImage?.url}
                        alt={item.title}
                        width={500}
                        height={160}
                        style={{
                          width: '100%',
                          height: '100%',
                          maxHeight: '10rem',
                          objectFit: 'cover',
                        }}
                      />
                    </a>
                    <div className="">
                      <a href={`/prensa/${item.slug}`}>
                        <h3 className="px-8 text-base font-semibold display-font lg:text-xl text-blue line-clamp-2">
                          {item.title}
                        </h3>
                      </a>
                    </div>
                  </Card>
                ))}
              {factoringPosts.length > 3 && (
                <div className="px-4">
                  <Link
                    className="px-6 btn btn-primary"
                    href="/prensa/categoria/factoring/1"
                  >
                    Ver más
                  </Link>
                </div>
              )}
            </div>

            <div className="hidden w-1/3 lg:block">
              <Card
                containerClassName="mx-auto mt-8 h-3/4 w-3/4"
                cardClassName="bg-white p-12 group shadow-lg border-none"
              >
                <h3 className="text-base font-semibold text-center display-font lg:text-xl text-medium-blue">
                  Explorar por categoría
                </h3>
                <ul className="mt-8">
                  {categories?.map((item) => (
                    <li key={item.slug} className="p-3">
                      <a
                        href={`/prensa/categoria/${item.slug}/1`}
                        className="text-lg font-semibold display-font text-blue hover:opacity-75"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </article>
        </section>
      </div>

      <MediaSection mediaSet={mediaLogos} />
    </Layout>
  );
};

export default News;

export async function getStaticProps() {
  try {
    const {
      data: {
        pages: { banner },
        categories,
      },
    } = await getPageBySlugAndCategories('blog');

    const {
      data: { posts },
    } = await getAllPosts();

    return {
      props: {
        banner,
        posts,
        categories,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
