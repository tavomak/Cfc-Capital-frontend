import { memorial } from '@/utils';

import Layout from '@/components/Templates/Layout';
import StaticHero from '@/components/Molecules/StaticHero';

const Memorias = () => (
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
            {memorial.map((item) => (
              <li
                key={item.year}
                className="flex flex-col pb-10 mt-10 border-t-0 border-b md:w-1/3 min-h-40 last:border-b-0"
              >
                <h4 className="mb-5 text-2xl">Memoria {item.year}</h4>
                <div className="mt-auto">
                  <a
                    href={item.url}
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
    </article>
  </Layout>
);

export default Memorias;
