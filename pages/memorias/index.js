import { memorial } from '@/utils';

import Layout from '@/components/Templates/Layout';
import StaticHero from '@/components/Molecules/StaticHero';

const Memorias = () => (
  <Layout
    title="Memorias"
    description="Cuentas públicas de CFC capital, porque creemos en la transparencia como un valor fundamental"
  >
    <StaticHero image="blog" alt="Memorias CFC Capital" />
    <article className="container-fluid py-5">
      <section className="container mx-auto">
        <h1 className="text-purple display-font font-medium text-4xl">
          Memorias Anuales
        </h1>
        <div className="row">
          <ul className="flex flex-wrap justify-between">
            {memorial.map((item) => (
              <li
                key={item.year}
                className="md:w-1/3 mt-10 border-b border-t-0 pb-10 flex flex-col min-h-40 last:border-b-0"
              >
                <h4 className="text-2xl mb-5">Memoria {item.year}</h4>
                <div className="mt-auto">
                  <a
                    href={item.url}
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
