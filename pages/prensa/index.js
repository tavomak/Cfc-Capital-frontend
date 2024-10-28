import { useState } from 'react';
import { getPageBySlugAndCategories, getAllPosts, mediaLogos } from '@/utils';
import Layout from '@/components/Templates/Layout';
import MediaSection from '@/components/Templates/MediaSection';
import CardLayoutTwoColumns from '@/components/Templates/CardLayoutTwoColumns';
import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
// import CardLayout from '@/components/Templates/CardLayout';
// import BannerRow from '@/components/Molecules/BannerRow';
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
      <CategoryNavBar categories={categories} />
      {/* {banner?.image && <BannerRow banner={banner} />}


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
