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
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl font-medium text-purple display-font">
          Memorias Anuales
        </h1>
        <ul className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
          {data.archives.length > 0 &&
            data.archives.map((item) => (
              <li key={item.id} className="flex flex-col p-6 border-b min-h-40">
                <h4 className="mb-5 text-2xl">{item.name}</h4>
                <div className="mt-auto">
                  <a
                    href={item.pdf.url}
                    target="_blank"
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
  </Layout>
);

export default Memorias;
