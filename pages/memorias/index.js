import Image from 'next/image';
import { memorial } from '@data/index';
import Layout from '@components/Templates/Layout';
import styles from './styles.module.scss';

const Contacto = () => (
  <Layout
    title="Memorias"
    description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
  >
    <section className="container-fluid bg-top-bottom-shape py-5">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12">
            <h1 className="text-center text-dark-blue fw-bolder">Memorias Anuales</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="d-flex flex-wrap">
              {memorial.map((item) => (
                <li key={item.year} className={`card shadow flex-fill bg-secondary-gradient p-4 m-4 rounded-0 ${styles.item}`}>
                  <Image
                    src="/icon-memo.png"
                    alt="Más que ejecutivos"
                    objectFit="contain"
                    width={80}
                    height={80}
                  />
                  <p className="fw-bolder text-dark-blue fs-4">
                    Memoria
                    {' '}
                    {item.year}
                  </p>
                  <a href={item.url} target="_blanc" rel="noopener noreferrer" className="btn btn-primary">
                    <small>
                      Descargar
                    </small>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-secondary-gradient">
      <div className="container py-lg-5">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-md-6">
            <h4 className="text-dark-blue fw-bolder fs-2">
              Presentes en la tercera y cuarta región con agente zonal experto en financiamiento.
            </h4>
            <p>
              En los rubros Transportes, Minería, Turismo y Servicios de Apoyo.
            </p>
          </div>
          <div className="col-md-6">
            <Image
              src="/regiones.png"
              alt="Más que ejecutivos"
              layout="responsive"
              objectFit="contain"
              width={1030}
              height={660}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contacto;
