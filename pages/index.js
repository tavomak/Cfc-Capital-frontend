import Image from 'next/image';
import Link from 'next/link';
import { shimmer, toBase64 } from '@helpers/index';
import {
  testimonialSliderData,
  newsSliderData,
  sliderBreakPoints,
  newsBreakPoints,
} from '@data/index';

import Layout from '@components/Templates/Layout';
import Carousel from 'react-elastic-carousel';
import styles from '@styles/pages/Home.module.scss';
import Button from '@components/Atoms/Button';
import RowTextImage from '@components/Molecules/RowTextImage';
import GradientSection from '@components/Molecules/GradientSection';
import DiconSection from '@components/Molecules/DiconSection';
import ExperienceSection from '@components/Molecules/ExperienceSection';
import FactoringWebSection from '@components/Molecules/FactoringWebSection';

const SectionTitle = () => (
  <h1 className={`text-dark-blue fw-bolder ${styles.primaryTitle}`}>
    Te apoyamos desde
    <span className="text-dark-blue"> la factura número uno</span>
  </h1>
);

const SectionSubtitle = () => (
  <p className="text-soft-purple fw-bolder fs-3">
    ¡Para que te concentres
    {' '}
    <br />
    {' '}
    en tu negocio!
  </p>
);

export default function Home() {
  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <GradientSection
        imageUrl="/factoring-banner.png"
        title={<SectionTitle />}
        subtitle={<SectionSubtitle />}
        classFirstCol="col-lg-5"
        classSecondCol="col-lg-7"
        type="circle"
      />

      <section className="py-5 bg-mask">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <h2 className="text-center text-dark-blue fw-bolder">Cómo lo hacemos</h2>
              <p className="text-center">
                Ofrecemos a las empresas y pymes soluciones para transformar las cuentas
                {' '}
                por cobrar en dinero efectivo de inmediato
                {' '}
                o para la adquisición de activos productivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-md-6 mb-5 mb-lg-0">
              <h1 className="fw-bolder text-soft-purple">Factoring</h1>
              <h2 className="fw-bolder text-dark-blue">
                ¿Tus clientes te pagan a
                <br />
                30, 60, 90 días o más?
              </h2>
              <p className="mt-4">
                <span className="text-dark-blue">
                  Que el crecimiento no tarde en llegar
                </span>
                <br />
                Obtén liquidez inmediata cediéndonos
                {' '}
                tus facturas a crédito.
              </p>
              <p>
                <span className="text-dark-blue">
                  Concéntrate en tu negocio
                </span>
                <br />
                Nosotros nos encargamos de cobrar las facturas pendientes a las empresas
              </p>
              <Link href="/servicios/factoring" passHref>
                <Button
                  className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                  text="Saber más"
                />
              </Link>
            </div>
            <div className="col-md-6">
              <Image
                src="/factoring-image.png"
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-mask">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-6">
              <h2 className="text-center text-dark-blue fw-bolder">
                Las finanzas son personas y CFC las mantiene en movimiento para que puedan crecer.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-secondary-gradient">
        <div className="container py-lg-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-dark-blue fw-bolder">Te apoyamos desde la factura uno</h2>
              {testimonialSliderData && testimonialSliderData.length && (
                <Carousel breakPoints={sliderBreakPoints}>
                  {testimonialSliderData.map((item) => (
                    <div key={item.id} className="p-1 p-lg-4">
                      <div className="card shadow py-4 px-3 px-lg-5" style={{ height: '100%' }}>
                        <ul className="d-lg-flex">
                          <li className="me-3">
                            <Image
                              src={item.item_image.url}
                              alt={item.title}
                              width={50}
                              height={50}
                            />
                          </li>
                          <li>
                            <p>
                              <span className="text-dark-blue fw-bolder">
                                {item.title}
                              </span>
                              <br />
                              <small>
                                {item.subtitle}
                              </small>
                            </p>
                          </li>
                        </ul>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-lg-5">
        {newsSliderData && newsSliderData.length && (
          <Carousel breakPoints={newsBreakPoints}>
            {
            newsSliderData.map((item) => (
              <div key={item.id} className="position-relative py-5 px-3 px-lg-5">
                <div className="card shadow p-4 bg-secondary-gradient">
                  <ul className="d-lg-flex w-100 align-items-center">
                    <li className="p-4">
                      <Image
                        src={item.item_image.url}
                        alt={item.title}
                        width={300}
                        height={300}
                      />
                    </li>
                    <li className="px-4">
                      <p className="text-soft-purple fw-bolder">
                        {item.tag}
                      </p>
                      <p className="text-dark-blue fw-bolder fs-4 mb-0">
                        {item.title}
                      </p>
                      <p>
                        <small>
                          {item.origin}
                        </small>
                      </p>
                      <p>
                        {item.description}
                        {' '}
                        <Link href="/prensa">
                          <a href="!#" className="text-dark-blue fw-bolder">Leer más</a>
                        </Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          }
          </Carousel>
        )}
      </section>

      <section className="py-lg-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-dark-blue fw-bolder">
                ¡Cuentas con una línea de Factoring pre aprobada*,
                <br />
                equivalente a un mes de venta!
              </h2>
              <div className="text-center">
                <Link href="/servicios/factoring" passHref>
                  <Button
                    className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                    text="La quiero"
                  />
                </Link>
                <p className="pt-2">
                  <small>*Pre aprobación sujeta a revisión de antecedentes comerciales.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg-5 bg-mask">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center text-dark-blue fw-bolder">
                El proceso de Factoring
              </h2>
              <ul className="d-lg-flex justify-content-between w-100 pt-5">
                <li className="px-4 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient" style={{ height: '100%' }}>
                    <ul className="d-lg-flex w-100 align-items-center text-dark-blue">
                      <li>
                        <span className="fw-bolder p-2 fs-2">1</span>
                      </li>
                      <li>
                        <span className="fw-bolder">Envíanos tus facturas</span>
                      </li>
                    </ul>
                    <p>
                      Revisamos tu factura e información tributaria y te enviaremos una propuesta.
                    </p>
                  </div>
                </li>
                <li className="px-4 my-4 my-lg-0 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient" style={{ height: '100%' }}>
                    <ul className="d-lg-flex w-100 align-items-center text-dark-blue">
                      <li>
                        <span className="fw-bolder p-2 fs-2">2</span>
                      </li>
                      <li>
                        <span className="fw-bolder">Acuerdo de simulación</span>
                      </li>
                    </ul>
                    <p>
                      Si estás de acuerdo con la simulación, nuestros ejecutivos solicitarán el
                      {' '}
                      resto de tu información para obtener un VB° del crédito.
                    </p>
                  </div>
                </li>
                <li className="px-4 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient" style={{ height: '100%' }}>
                    <ul className="d-lg-flex w-100 align-items-center text-dark-blue">
                      <li>
                        <span className="fw-bolder p-2 fs-2">3</span>
                      </li>
                      <li>
                        <span className="fw-bolder">Firma del contrato</span>
                      </li>
                    </ul>
                    <p>
                      Finalmente, te visitaremos para resolver las últimas dudas, firmamos el
                      {' '}
                      contrato, te ayudamos con la cesión electrónica y recibes el dinero.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="text-center">
                <Button
                  className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                  text="Comenzar"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center py-5 text-center text-lg-start">
            <div className="col-md-4">
              <h3 className="text-dark-blue fw-bolder fs-2">
                Más que ejecutivos
              </h3>
              <p>
                Somos un equipo humano dispuesto a ser parte de tu empresa.
              </p>
              <Link href="/cfc">
                <a href="!#" className="fw-bolder">Sobre nosotros</a>
              </Link>
            </div>
            <div className="col-md-8 mt-5 mt-lg-0">
              <Image
                src="/business-guy.png"
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      <DiconSection />

      <FactoringWebSection />

      <ExperienceSection shape="bottom-left" />

      <section className="py-lg-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h3 className="text-center text-dark-blue fw-bolder fs-2">
                Otras soluciones
              </h3>
              <ul className="d-lg-flex justify-content-between w-100 pt-5">
                <li className="px-4 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient d-flex flex-column justify-content-between">
                    <h4 className="text-dark-blue fw-bolder">Leasing</h4>
                    <p>
                      <span className="text-dark-blue">¿Necesitas un vehículo nuevo o maquinaria?</span>
                      <br />
                      El Leasing es para ti. Mediante un contrato, establece el arriendo de un
                      {' '}
                      bien de capital por un determinado período de tiempo y una vez finalizado el
                      {' '}
                      contrato, el bien es devuelto a su propietario.
                    </p>
                    <Link href="/servicios/leasing" passHref>
                      <Button
                        className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                        text="Saber más"
                      />
                    </Link>
                  </div>
                </li>
                <li className="px-4 my-4 my-lg-0 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                    <h4 className="text-dark-blue fw-bolder">Leaseback</h4>
                    <p>
                      <span className="text-dark-blue">¿Tienes activos y necesitas liquidez?</span>
                      <br />
                      Te ofrecemos una solución de Leaseback. Un mecanismo de financiamiento
                      {' '}
                      que permite a las empresas obtener liquidez a través de la venta de sus
                      {' '}
                      activos mediante un contrato de arrendamiento.

                    </p>
                    <Link href="/servicios/leaseback" passHref>
                      <Button
                        className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                        text="Saber más"
                      />
                    </Link>
                  </div>
                </li>
              </ul>
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
}
