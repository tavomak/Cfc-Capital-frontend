import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

import { getPostsByCategoryAndProcess, getAllCategories } from '@/utils';

import Layout from '@/components/Templates/Layout';
import LayerHero from '@/components/Molecules/LayerHero';
import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
import Card from '@/components/Atoms/Card';
import Button from '@/components/Atoms/Button';
// import CardLayout from '@/components/Templates/CardLayout';

const Category = ({ posts, banner, service, categoryName, categories }) => {
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

          {banner?.image && (
            <LayerHero
              title={banner.title}
              subtitle={banner.subTitle}
              imageUrl={banner.image.url}
              content={banner.content?.html}
            />
          )}

          {categories?.length > 0 && (
            <div className="min-h-24">
              <CategoryNavBar categories={categories} />
            </div>
          )}

          <section className="container flex flex-wrap items-stretch justify-center mx-auto">
            {posts?.length > 0 &&
              posts.map((item) => (
                <Card
                  key={item.id}
                  containerClassName="p-2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-10"
                  cardClassName="flex flex-col justify-between group"
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
          </section>

          {service && service.length > 0 && (
            <section className="py-5 bg-dark-blue">
              <div className="container mx-auto text-white md:px-4">
                <h2 className="py-4 text-2xl font-bold display-font">
                  {'El proceso de '}
                  <span className="text-capitalize">{categoryName}</span>
                </h2>
                <div className="flex flex-wrap">
                  {service.map((item, key) => (
                    <div className="w-1/3 px-4 text-4xl" key={item.description}>
                      <div className="relative p-12 my-5 font-black text-white rounded-full display-font bg-light-blue">
                        <div className="relative">
                          <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                            {key + 1}
                          </span>
                        </div>
                      </div>
                      {item.description && (
                        <p className="my-5 text-sm text-wite">
                          {item.description}
                        </p>
                      )}
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
    const response = await getPostsByCategoryAndProcess(id);

    if (!response?.data?.category) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }

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
    } = response;

    const categoriesResponse = await getAllCategories();
    const categories = categoriesResponse?.data?.categories || [];

    return {
      props: {
        posts: posts || [],
        banner: {
          title: title || '',
          subTitle: subtite || '',
          image: image || null,
          backgroundColor: { hex: backgroundColor || '#FFFFFF' },
          buttonText: buttonText || '',
          buttonUrl: buttonUrl || '',
        },
        service: service?.serviceProcess || [],
        categoryName: id,
        categories,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log('Error fetching service data:', error);
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const response = await getAllCategories();
    const categories = response?.data?.categories || [];
    const path = '/prensa/categoria/';

    return {
      paths: categories?.map((item) => path + item.slug) || [],
      fallback: true,
    };
  } catch (error) {
    console.log('Error en getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
