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
  const [prensaPosts] = useState(filterPosts(posts, 'Prensa'));

  return (
    <Layout
      title="Blog y prensa"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      <div className="bg-soft-light-blue">
        <section className="container mx-auto px-4 py-20">
          {posts?.length > 1 &&
            posts.slice(0, 1).map((firstPost) => (
              <a
                href={`/prensa/${firstPost.slug}`}
                className="p-4 block overflow-hidden rounded-3xl group bg-sky-50 md:flex shadow-xl "
                key={firstPost.id}
              >
                <div className="md:w-1/2 relative overflow-hidden rounded-2xl">
                  <Image
                    src={firstPost.coverImage?.url}
                    alt={firstPost.title}
                    width={800}
                    height={600}
                    className="h-80 md:h-full w-full object-contain transition-transform duration-300 scale-100 group-hover:scale-110"
                  />
                </div>

                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="max-w-md">
                    <h2 className="display-font md:text-2xl text-base font-semibold text-blue">
                      {firstPost.title}
                    </h2>

                    {firstPost.author && (
                      <div className="flex items-center gap-3 my-6">
                        {firstPost.author?.picture && (
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                            <Image
                              src={firstPost.author.picture?.url}
                              alt={`${firstPost.author.name} profile picture`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-semibold text-dark-grey">
                            {firstPost.author.name}
                          </p>
                          <p className="text-xs text-dark-grey">
                            {firstPost.author.title}
                          </p>
                        </div>
                      </div>
                    )}

                    <p className="text-dark-grey md:text-base text-xs leading-relaxed">
                      {firstPost.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            ))}
        </section>

        <section className="container mx-auto">
          <h2 className="px-4 mb-6 text-lg font-semibold display-font text-medium-blue">
            Últimas notas de prensa
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-8">
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
            <div className="text-center mb-8">
              <Link
                className="btn btn-primary px-6"
                href="/prensa/categoria/prensa"
              >
                Ver más
              </Link>
            </div>
          )}
        </section>

        <SubscribeSection />

        <section className="block lg:hidden container mx-auto">
          <h3 className="px-4 my-6 display-font text-base font-semibold text-medium-blue">
            Explorar por categoría
          </h3>
          <ul className="w-11/12 mx-auto flex flex-wrap gap-6 justify-center">
            {categories?.map((item) => (
              <li
                key={item.slug}
                className="px-4 py-1 bg-soft-medium-blue rounded-xl"
              >
                <a
                  href={`/prensa/categoria/${item.slug}`}
                  className="font-semibold text-xs text-blue"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="container mx-auto">
          <h2 className="px-4 my-6 md:my-12 text-base font-semibold md:text-3xl md:font-bold display-font text-medium-blue">
            Factoring
          </h2>
          <article className="flex">
            <div className="w-full space-y-8 lg:w-2/3 mb-8">
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
                        className="rounded-xl overflow-hidden transition scale-100 group-hover:scale-110"
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
                        <h3 className="display-font px-8 lg:text-xl text-base font-semibold text-blue line-clamp-2">
                          {item.title}
                        </h3>
                      </a>
                    </div>
                  </Card>
                ))}
              {factoringPosts.length > 3 && (
                <div className="px-4">
                  <Link
                    className="btn btn-primary px-6"
                    href="/prensa/categoria/factoring"
                  >
                    Ver más
                  </Link>
                </div>
              )}
            </div>

            <div className="w-1/3 hidden lg:block">
              <Card
                containerClassName="mx-auto mt-8 h-3/4 w-3/4"
                cardClassName="bg-white p-12 group shadow-lg border-none"
              >
                <h3 className="display-font text-center lg:text-xl text-base font-semibold text-medium-blue">
                  Explorar por categoría
                </h3>
                <ul className="mt-8">
                  {categories?.map((item) => (
                    <li key={item.slug} className="p-3">
                      <a
                        href={`/prensa/categoria/${item.slug}`}
                        className="display-font font-semibold text-lg text-blue hover:opacity-75"
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
