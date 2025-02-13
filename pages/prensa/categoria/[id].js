import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPostsByCategoryAndProcess, getAllCategories } from '@/utils';
import Layout from '@/components/Templates/Layout';
import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
import NewCard from '@/components/Molecules/NewCard';
import Image from 'next/image';
import StepCard from '@/components/Molecules/StepCard';

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
            <title>{banner?.title} | CFC Capital</title>
          </Head>

          <section className="container mx-auto px-4 py-20">
            {posts?.length > 1 &&
              posts.slice(0, 1).map((firstPost) => (
                <a
                  href={`/prensa/${firstPost.slug}`}
                  className="block overflow-hidden rounded-3xl group bg-sky-50 md:flex shadow-xl"
                  key={firstPost?.id}
                >
                  <div className="md:w-1/2 relative overflow-hidden">
                    <Image
                      src={firstPost.coverImage?.url}
                      alt={firstPost.title}
                      width={800}
                      height={600}
                      className="h-80 md:h-full w-full object-cover transition-all scale-100 group-hover:scale-110"
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
                              {firstPost.author?.name}
                            </p>
                            <p className="text-xs text-dark-grey">
                              {firstPost.author?.title}
                            </p>
                          </div>
                        </div>
                      )}

                      <p className="text-dark-grey md:text-base text-xs leading-relaxed">
                        {firstPost?.excerpt}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
          </section>

          {categories?.length > 0 && (
            <div className="my-10 min-h-24">
              <CategoryNavBar categories={categories} />
            </div>
          )}

          <section className="container grid lg:grid-cols-3 mx-auto mb-12">
            {posts?.length > 0 &&
              posts.map((item) => (
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
          </section>

          {service?.length > 0 && (
            <section className="py-24 bg-dark-blue">
              <div className="container mx-auto">
                <h2 className="text-white text-center py-4 text-2xl font-bold display-font">
                  {'El proceso de '}
                  <span className="text-capitalize">{categoryName}</span>
                </h2>
                <div className="md:flex text-white">
                  {service.map((item, key) => (
                    <StepCard
                      key={item.description}
                      name={item.subtitle}
                      icon={
                        <div className="display-font flex items-center justify-center w-20 h-20 text-3xl font-bold text-white rounded-full border-white border-solid circle-width">
                          {key + 1}
                        </div>
                      }
                      description={item.description}
                    />
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
