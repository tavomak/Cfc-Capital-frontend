import Image from 'next/image';

import Layout from '@components/Templates/Layout';
import FormContact from '@components/Molecules/FormContact';
import RowTextImage from '@components/Molecules/RowTextImage';

const Contacto = () => (
  <Layout
    title="Contacto"
    description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
  >
    <section className="py-5 bg-secondary-gradient">
      <div className="container py-lg-5">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-md-6">
            <h1 className="text-dark-blue fw-bolder">
              Recursos para orientar a tu
              {' '}
              <span className="text-soft-purple">pyme</span>
              {' '}
              en la realidad económica
            </h1>
          </div>
          <div className="col-md-6">
            <Image
              src="/prensa-bg.png"
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

    <section className="bg-top-bottom-shape py-5">
      <div className="container">
        <div className="row justify-content-end align-items-center my-5">
          <div className="col-lg-6">
            <div className="text-center">
              <h2 className="text-dark-blue display-font fs-1 fw-bolder">¿Tienes dudas?</h2>
              <p>Conversemos</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="card p-5 mb-5 bg-secondary-gradient"
            >
              <FormContact type="Contacto" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <RowTextImage
      gradientType="secondary"
      alignType="center"
      title="Presentes en la tercera y cuarta región con agente zonal experto en financiamiento."
      titleColor="dark-blue"
      subtitle="En los rubros Transportes, Minería, Turismo y Servicios de Apoyo."
      imageUrl="/regiones.png"
      imageWidth="1030"
      imageHeight="660"
    />
  </Layout>
);

export default Contacto;
