import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

import { getPostsByCategoryAndProcess, getAllCategories } from '@/utils';

import Layout from '@/components/Templates/Layout';
// import BannerRow from '@/components/Molecules/BannerRow';
import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
import Card from '@/components/Atoms/Card';
import Button from '@/components/Atoms/Button';
// import CardLayout from '@/components/Templates/CardLayout';

const Category = ({ posts, banner, service, categoryName, categories }) => {
  console.log({ posts, banner });

  const router = useRouter();
  return (
    <Layout
      title="Blog y prensa"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      {router.isFallback ? (
        <div className="row content-wrapper align-items-center justify-content-center">
          <div
            className="spinner-border text-secondary-color"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Head>
            <title>{banner.title} | CFC Capital</title>
          </Head>

          {/* {banner?.image && <BannerRow banner={banner} />} */}

          {categories?.length > 0 && <CategoryNavBar categories={categories} />}

          <section className="container mx-auto flex flex-wrap justify-center items-stretch">
            {posts?.length > 0 &&
              posts.map((item) => (
                <Card
                  key={item.id}
                  containerClassName="p-4 md:w-1/2 lg:w-1/3 mb-10"
                  cardClassName="flex flex-col justify-between"
                  header={
                    <a href={`/prensa/${item.slug}`} className="min-h-64">
                      <Image
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
                      className="w-full flex justify-center py-2"
                      href={`/prensa/${item.slug}`}
                    >
                      <Button className="btn btn-primary" text="Leer más" />
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

          {service && service.length > 0 && (
            <section className="container md:px-4-fluid py-5 bg-dark-blue">
              <div className="container md:px-4 text-white">
                <div className="row">
                  <div className="col">
                    <h2 className="display-font fs-1 font-weight-bold py-4">
                      {'El proceso de '}
                      <span className="text-capitalize">{categoryName}</span>
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
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </Layout>
  );
};

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

    const {
      data: { categories },
    } = await getAllCategories();

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
      revalidate: 10,
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
  const {
    data: { categories },
  } = await getAllCategories();
  const path = '/prensa/categoria/';

  return {
    paths: categories?.map((item) => path + item.slug) || [],
    fallback: true,
  };
}
