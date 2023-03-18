import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';
import { services } from '@data/index';

import Layout from '@components/Templates/Layout';
import RowTextImage from '@components/Molecules/RowTextImage';
import FormContact from '@components/Molecules/FormContact';
import ServiceItem from '@components/Molecules/ServiceItem';
import styles from './styles.module.scss';

const Services = () => {
  const handleClick = (e, text) => {
    e.preventDefault();
    if (text === 'factoring-web') {
      window.open('/CFC-PasoaPaso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${text}`);
    }
  };
  return (
    <Layout
      title="Servicios"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <section className="py-5 bg-secondary-gradient">
        <div className="container py-lg-5">
          <div className="row align-items-center justify-content-between text-center text-lg-start">
            <div className="col-md-6 col-lg-4">
              <h1 className="text-dark-blue fw-bolder">
                CFC
                {' '}
                <span className="text-soft-purple">Capital</span>
              </h1>
              <p>
                Ofrecemos a las empresas y pymes soluciones para transformar las cuentas por cobrar
                {' '}
                en dinero efectivo de inmediato o para la adquisición de activos productivos.
              </p>
            </div>
            <div className="col-md-6 order-first order-lg-last mb-4 mb-lg-0">
              <Image
                src="/cfc-about.png"
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={930}
                height={660}
              />
            </div>
          </div>
        </div>
      </section>

      {services && services.map((item) => (
        <ServiceItem
          key={item.id}
          title={item.seo.metaTitle}
          subtitle={item.subtitle}
          shortDescription={item.shortDescription}
          bgType={item.bgType}
          imageUrl={item.imageUrl}
          slug={item.slug}
          order={item.order}
        />
      ))}

      <section className="py-5 bg-mask">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <h2 className="text-center text-dark-blue fw-bolder">Que el motor de la economía no se detenga</h2>
              <p className="text-center">Reinvierte en tu crecimiento ahora</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-top-bottom-shape py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center my-5">
            <div className="col-lg-5">
              <div className="text-center text-lg-start">
                <h2 className="text-dark-blue display-font fs-1 fw-bolder">¿Tienes dudas?</h2>
                <p>Conversemos</p>
                <h3 className="text-dark-blue fw-bolder">Más que simples ejecutivos.</h3>
                <p>
                  Porque sabemos que eres el motor de la economía.
                </p>
                <Link href="/cfc">
                  <a href="!#" className="fw-bolder fs-5">Sobre Nosotros</a>
                </Link>
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
};

export default Services;
