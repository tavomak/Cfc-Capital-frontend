import { memorial } from '@data/index';
import Layout from '@components/Templates/Layout';
import Hero from '@components/Molecules/Hero';
import styles from './styles.module.scss';

const Contacto = () => (
  <Layout
    title="Memorias"
    description="Cuentas públicas de CFC capital, porque creemos en la transparencia como un valor fundamental"
  >
    <Hero image="/hero-blog.jpg" alt="Prensa" />
    <div className="container-fluid bg-grey py-5">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12">
            <h1 className="text-soft-purple">Memorias Anuales</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="d-flex flex-wrap">
              {memorial.map((item) => (
                <li key={item.year} className={`mb-5 ${styles.item}`}>
                  <h4>
                    Memoria
                    {' '}
                    {item.year}
                  </h4>
                  <a href={item.url} target="_blanc" rel="noopener noreferrer" className="btn btn-primary">
                    <small>
                      Descargar
                    </small>
                  </a>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contacto;
