import { useState } from 'react';
import Image from 'next/image';
import { getPageBySlugAndCategories, getAllPosts, mediaLogos } from '@/utils';
import Layout from '@/components/Templates/Layout';
// import CardLayout from '@/components/Templates/CardLayout';
import CardLayoutTwoColumns from '@/components/Templates/CardLayoutTwoColumns';
// import BannerRow from '@/components/Molecules/BannerRow';
// import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
// import BannerSubscribe from '@/components/Molecules/BannerSubscribe';
// import styles from './styles.module.scss';

const filterPosts = (posts, category) =>
  posts.filter((item) => item.categories[0].name === category);
const News = ({ banner, posts, categories }) => {
  const [factoringPosts] = useState(
    filterPosts(posts, 'Factoring').filter((item, key) => key < 6)
  );
  const [prensaPosts] = useState(filterPosts(posts, 'Prensa'));
  const [consejosPosts] = useState(filterPosts(posts, 'Consejos'));

  console.log({ banner, posts, categories });

  return (
    <Layout
      title="Blog y prensa"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      {/* {banner?.image && <BannerRow banner={banner} />}

      <CategoryNavBar categories={categories} />

      <CardLayout
        posts={factoringPosts}
        title="Factoring"
        col="col-12 col-md-4"
      />

      <BannerSubscribe />
      */}

      <CardLayoutTwoColumns
        posts={prensaPosts}
        title="Prensa"
        btnClassName="btn-primary"
      />

      <CardLayoutTwoColumns
        posts={consejosPosts}
        title="Consejos PYMes"
        className="bg-soft-blue text-white"
        btnClassName="btn-secondary"
      />

      <section className="py-5 bg-dark-blue">
        <div className="container mx-auto md:px-4">
          <div className="text-center text-white">
            <h2 className="fs-1 py-4 fw-bold">
              ¡Descubre los medios <br />
              que nos han destacado!
            </h2>
            <ul className="flex flex-wrap justify-center">
              {mediaLogos.map((item) => (
                <li key={item} className="p-3">
                  <Image
                    src={`/${item}.png`}
                    alt={item}
                    width={180}
                    height={106}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
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
