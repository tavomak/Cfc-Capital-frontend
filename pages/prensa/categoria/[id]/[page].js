import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  getPostsByCategoryAndProcess,
  getAllCategories,
  POSTS_PER_PAGE,
} from '@/utils';
import Layout from '@/components/Templates/Layout';
import CategoryNavBar from '@/components/Molecules/CategoryNavBar';
import NewCard from '@/components/Molecules/NewCard';
import Pagination from '@/components/Molecules/Pagination/Pagination';
import Image from 'next/image';
import StepCard from '@/components/Molecules/StepCard';
import Card from '@/components/Atoms/Card';
import Loader from '@/components/Atoms/Spinner';

const Category = ({
  posts,
  service,
  categoryName,
  categories,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  return (
    <Layout
      title="Blog y prensa"
      description="Noticias de actualidad que ayudan a tus finanzas"
    >
      {router.isFallback ? (
        <div className="flex items-center justify-center py-12">
          <Loader
            width="40px"
            height="40px"
            style={{ borderColor: 'var(--medium-purple' }}
          />
        </div>
      ) : (
        <>
          <Head>
            <title>
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} |
              CFC Capital
            </title>
          </Head>

          <section className="container px-8 py-20 mx-auto">
            {posts?.length > 0 &&
              posts.slice(0, 1).map((firstPost) => (
                <a
                  href={`/prensa/${firstPost.slug}`}
                  className="block p-4 overflow-hidden shadow-xl rounded-3xl group bg-sky-50 md:flex "
                  key={firstPost.id}
                >
                  <div className="relative overflow-hidden md:w-1/2 rounded-2xl">
                    <Image
                      src={firstPost.coverImage?.url}
                      alt={firstPost.title}
                      width={738}
                      height={450}
                      className="object-cover object-top w-full transition-transform duration-300 scale-100 h-80 md:h-full group-hover:scale-110 max-h-[450px]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                    <div className="max-w-md">
                      <h2 className="text-base font-semibold display-font md:text-2xl text-blue">
                        {firstPost.title}
                      </h2>

                      {firstPost.author && (
                        <div className="flex items-center gap-3 my-6">
                          {firstPost.author?.picture && (
                            <div className="relative w-12 h-12 overflow-hidden rounded-full shrink-0">
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

                      <p className="text-xs leading-relaxed text-dark-grey md:text-base">
                        {firstPost.excerpt}
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

          <section className="container px-8 mx-auto">
            <article className="grid gap-12 mb-8 md:grid-cols-2 lg:grid-cols-3">
              {posts?.length > 0 &&
                posts.slice(1, 10).map((item) => (
                  <a
                    href={`/prensa/${item.slug}`}
                    key={item.id}
                    className="flex flex-col w-full p-4 bg-sky-50 group hover:shadow-none rounded-3xl"
                  >
                    <NewCard
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
            </article>
          </section>

          <aside className="container mx-auto mb-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={`/prensa/categoria/${categoryName}`}
            />
          </aside>

          {service?.length > 0 && (
            <section className="py-24 bg-dark-blue">
              <article className="container max-w-5xl py-10 mx-auto md:px-4">
                <h2 className="mb-8 text-3xl font-bold text-center text-white md:text-4xl display-font">
                  {'El proceso de '}
                  <span className="text-capitalize">{categoryName}</span>
                </h2>
                <div className="gap-4 text-white md:flex">
                  {service.map((item, key) => (
                    <Card
                      containerClassName="mb-4 md:mb-0 w-3/4 md:w-full mx-auto"
                      cardClassName="p-4 py-12 shadow-lg"
                      key={item.title}
                    >
                      <StepCard
                        name={item.subtitle}
                        icon={
                          <div className="flex items-center justify-center w-20 h-20 text-3xl font-bold text-white border-white rounded-full display-font circle-width">
                            {key + 1}
                          </div>
                        }
                        description={item.description}
                      />
                    </Card>
                  ))}
                </div>
              </article>
            </section>
          )}
        </>
      )}
    </Layout>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const { id, page } = params;
  const currentPage = parseInt(page, 10) || 1;

  try {
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
      data: { posts, postsConnection, service },
    } = response;

    const totalPages = Math.ceil(
      postsConnection.aggregate.count / POSTS_PER_PAGE
    );

    const paginatedPosts = posts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    );

    const categoriesResponse = await getAllCategories();
    const categories = categoriesResponse?.data?.categories || [];
    return {
      props: {
        posts: paginatedPosts,
        service: service?.serviceProcess || [],
        categoryName: id,
        categories,
        currentPage,
        totalPages,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching category data:', error);
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
    const responseCategories = await getAllCategories();
    const categories = responseCategories?.data?.categories || [];
    const paths = [];

    await Promise.all(
      categories.map(async (category) => {
        const response = await getPostsByCategoryAndProcess(category.slug);
        const totalPosts =
          response?.data?.category?.postsConnection?.aggregate?.count || 0;
        const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

        Array.from({ length: totalPages }, (_, page) => page + 1).forEach(
          (page) => {
            paths.push({
              params: { id: category.slug, page: page.toString() },
            });
          }
        );
      })
    );
    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
