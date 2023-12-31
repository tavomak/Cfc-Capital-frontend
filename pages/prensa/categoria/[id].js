import Image from 'next/image';
import { getPostsByCategoryAndProcess, getAllCategories } from '@lib/api';
import Layout from '@components/Templates/Layout';
import BannerRow from '@components/Molecules/BannerRow';
import CardLayout from '@components/Templates/CardLayout';
import CategoryNavBar from '@components/Molecules/CategoryNavBar';

const Category = ({
  posts,
  banner,
  service,
  categoryName,
  categories,
}) => (
  <Layout
    title="Blog y prensa"
    description="Noticias de actualidad que ayudan a tus finanzas"
  >
    {banner?.image && (
      <BannerRow banner={banner} />
    )}

    {categories?.length > 0 && (
      <CategoryNavBar categories={categories} />
    )}

    <CardLayout posts={posts} col="col-md-6 col-lg-3" title={categoryName} />

    {service && service.length > 0 && (
      <section className="container-fluid py-5 bg-dark-blue">
        <div className="container text-white">
          <div className="row">
            <div className="col">
              <h2 className="display-font fs-1 font-weight-bold py-4">
                {'El proceso de '}
                <span className="text-capitalize">
                  {categoryName}
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            {service.map((item, index) => (
              <div key={item.id} className="col-md-4">
                <div className="px-lg-4">
                  <div className="p-4 text-center">
                    <Image
                      src={`/process-icon-${index + 1}.png`}
                      alt={`process-icon-${index + 1}`}
                      width={222}
                      height={187}
                    />
                  </div>
                </div>
                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  </Layout>
);

export default Category;

export async function getStaticProps({ params }) {
  try {
    const { id } = params;
    const {
      data: {
        category: {
          title,
          subtite,
          image,
          backgroundColor,
          buttonText,
          buttonUrl,
          posts,
        },
        service,
      },
    } = await getPostsByCategoryAndProcess(id);

    if (!posts) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }

    const { data: { categories } } = await getAllCategories();

    return {
      props: {
        posts,
        banner: {
          title,
          subTitle: subtite,
          image,
          backgroundColor: { hex: backgroundColor || '#FFFFFF' },
          buttonText,
          buttonUrl,
        },
        service: service?.serviceProcess || [],
        categoryName: id,
        categories,
      },
      revalidate: 100,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
}

export async function getStaticPaths() {
  const { data: { categories } } = await getAllCategories();
  const path = '/prensa/categoria/';

  return {
    paths: categories?.map((item) => path + item.slug) || [],
    fallback: true,
  };
}
