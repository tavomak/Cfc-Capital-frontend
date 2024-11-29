import { useState } from 'react';
import Image from 'next/image';
import { getPageBySlugAndCategories, getAllPosts, mediaLogos } from '@/utils';
import Layout from '@/components/Templates/Layout';
import LayerHero from '@/components/Molecules/LayerHero';
import MediaSection from '@/components/Templates/MediaSection';
import CardLayoutTwoColumns from '@/components/Templates/CardLayoutTwoColumns';
import SubscribeSection from '@/components/Templates/SubscribeSection';
import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
import Card from '@/components/Atoms/Card';
import Button from '@/components/Atoms/Button';

const filterPosts = (posts, category) =>
  posts.filter((item) => item.categories[0].name === category);
const News = ({ banner, posts, categories }) => {
  const [factoringPosts] = useState(
    filterPosts(posts, 'Factoring').filter((item, key) => key < 6)
  );
  const [prensaPosts] = useState(filterPosts(posts, 'Prensa'));
  const [consejosPosts] = useState(filterPosts(posts, 'Consejos'));

  return (
    <Layout
      title="Blog y prensa"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      {banner?.image && (
        <LayerHero
          title={banner.title}
          subtitle={banner.subTitle}
          imageUrl={banner.image.url}
          content={banner.content?.html}
        />
      )}

      {categories?.length > 0 && (
        <div className="my-10 min-h-24">
          <CategoryNavBar categories={categories} />
        </div>
      )}

      <section className="container mx-auto">
        <h2 className="px-4 mb-4 text-4xl font-bold display-font text-purple">
          Factoring
        </h2>
        <div className="md:flex flex-wrap justify-center">
          {factoringPosts?.length > 0 &&
            factoringPosts.map((item) => (
              <Card
                key={item.id}
                containerClassName="p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-10"
                cardClassName="flex flex-col justify-between group pb-4"
                header={
                  <a
                    href={`/prensa/${item.slug}`}
                    className="overflow-hidden min-h-64"
                  >
                    <Image
                      className="transition scale-100 group-hover:scale-110"
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
                  <a className="w-full p-2" href={`/prensa/${item.slug}`}>
                    <Button
                      className="text-sm font-semibold text-blue"
                      text="Leer más"
                    />
                  </a>
                }
              >
                <a href={`/prensa/${item.slug}`}>
                  <p className="px-2 py-4 font-semibold text-blue">
                    {item.title.slice(0, 100)}
                    {item.title.length > 100 && '...'}
                  </p>
                </a>
              </Card>
            ))}
        </div>
      </section>

      <SubscribeSection />

      <CardLayoutTwoColumns
        posts={prensaPosts}
        title="Prensa"
        btnClassName="btn-primary"
      />

      <CardLayoutTwoColumns
        posts={consejosPosts}
        title="Consejos PYMes"
        className="text-white bg-soft-blue"
        btnClassName="btn-secondary"
      />

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
