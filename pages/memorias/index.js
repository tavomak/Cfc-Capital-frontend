import { getPageBySlugAndServices } from '@/utils';

import Layout from '@/components/Templates/Layout';
import StaticHero from '@/components/Molecules/StaticHero';

export async function getStaticProps() {
  try {
    const {
      data: { pages },
    } = await getPageBySlugAndServices('memorias');
    return {
      props: {
        data: pages,
      },
      revalidate: 100,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      notFound: true,
    };
  }
}

const Memorias = ({ data }) => (
  <Layout
    title="Memorias"
    description="Cuentas públicas de CFC capital, porque creemos en la transparencia como un valor fundamental"
  >
    <StaticHero image="blog" alt="Memorias CFC Capital" />
    <article className="py-5 container-fluid">
      <section className="container mx-auto">
        <h1 className="text-4xl font-medium text-purple display-font">
          Memorias Anuales
        </h1>
        <div className="row">
          <ul className="flex flex-wrap justify-between">
            {data.archives.length > 0 &&
              data.archives.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col pb-10 mt-10 border-t-0 border-b md:w-1/3 min-h-40 [&:nth-last-child(-n+3)]:border-b-0"
                >
                  <h4 className="mb-5 text-2xl">{item.name}</h4>
                  <div className="mt-auto">
                    <a
                      href={item.pdf.url}
                      target="_blanc"
                      rel="noopener noreferrer"
                      className="btn btn-gray"
                    >
                      <small>Descargar</small>
                    </a>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </article>
  </Layout>
);

export default Memorias;
