import Image from 'next/image';
import Link from 'next/link';

import Layout from '@components/Templates/Layout';
import Slider from 'react-slick';
import styles from '@styles/pages/Home.module.scss';
import Button from '@components/Atoms/Button';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: 'cubic-bezier(.8,0,0.5,1)',
    lazyLoad: 'progressive',
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: 'cubic-bezier(.8,0,0.5,1)',
    lazyLoad: 'progressive',
  };
  const banners = [
    {
      id: '001',
      item_image: {
        url: '/matiasGomez.png',
      },
      title: 'Matias Gómez',
      subtitle: 'Emprendedor',
      description: '“Increíblemente no les asustó que fuera mi primera factura, el ejecutivo fue muy amable y en 48 horas tení­a los fondos para poder cumplir con la segunda orden de compra”.',
    },
    {
      id: '002',
      item_image: {
        url: '/camilaFuentes.png',
      },
      title: 'Camila Fuentes',
      subtitle: 'Fundadora',
      description: '“Hoy después de dos años operando con CFC no tengo problemas y mis flujos están mucho más ordenados, CFC se transformó en un partner financiero”.',
    },
  ];
  const banners2 = [
    {
      id: '0001',
      item_image: {
        url: '/icon-news.png',
      },
      tag: 'FACTORING | PYME',
      title: 'Los 5 mitos más comunes sobre el Factoring',
      origin: '14-01-2022 | El Mercurio',
      url: '/prensa',
      description: 'Francisco Goycoolea, gerente comercial de CFC Capital, aclara los 5 mitos más comunes que se tienen sobre esta popular opción de financiamiento.',
    },
  ];
  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <section className="py-5 bg-gradient-circle">
        <div className="container">
          <div className="row justify-content-end align-items-center">
            <div className="col-md-5">
              <h1 className={`text-dark-blue fw-bolder ${styles.primaryTitle}`}>
                No esperes por
                <br />
                el
                <span className="text-soft-purple"> cobro</span>
                {' '}
                de tus cuentas
              </h1>
              <p>
                Muévete con agilidad y planifica por adelantado
              </p>
            </div>
            <div className="col-md-7">
              <Image
                src="/home-banner.png"
                alt="Financiamos en 4 horas"
                layout="responsive"
                objectFit="contain"
                width={1030}
                height={660}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-mask">
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
      </section>

      <section className="py-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
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
                width={1030}
                height={660}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-mask">
        <div className="row justify-content-center py-5">
          <div className="col-md-6">
            <h2 className="text-center text-dark-blue fw-bolder">
              Las finanzas son personas y CFC las mantiene en movimiento para que puedan crecer.
            </h2>
          </div>
        </div>
      </section>

      <section className="py-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-dark-blue fw-bolder">Te apoyamos desde la factura uno</h2>
              {banners && banners.length && (
                <Slider {...settings}>
                  {
                  banners.map((item) => (
                    <div key={item.id} className="position-relative p-5">
                      <div className="card shadow py-4 px-5">
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
                  ))
                }
                </Slider>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        {banners2 && banners2.length && (
          <Slider {...settings2}>
            {
            banners2.map((item) => (
              <div key={item.id} className="position-relative p-5">
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
          </Slider>
        )}
      </section>

      <section className="py-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center text-dark-blue fw-bolder">
                ¡Cuentas con una línea de Factoring pre aprobada*,
                <br />
                equivalente a un mes de venta!
              </h2>
              <div className="text-center">
                <Button
                  className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                  text="La quiero"
                />
                <p className="pt-2">
                  <small>*Pre aprobación sujeta a revisión de antecedentes comerciales.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-mask">
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
                <li className="px-4 w-100">
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
          <div className="row align-items-center py-5">
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
            <div className="col-md-8">
              <Image
                src="/ejecutivos.png"
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

      <section className="py-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <Image
                src="/dicon.png"
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={1030}
                height={660}
              />
            </div>
            <div className="col-md-5">
              <p>Preguntas frecuentes</p>
              <h4 className="text-dark-blue fw-bolder">¿Tienes dicom?</h4>
              <p>
                No te preocupes. Envíanos tu carpeta tributaria y factura emitida,
                {' '}
                nosotros nos encargamos del resto.
              </p>
              <h4 className="text-dark-blue fw-bolder">En sólo horas y sin papeleos</h4>
              <p>
                En CFC Capital puedes abrir una línea y realizar tu primera operación en horas.
              </p>
              <Button
                className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                text="Comenzar"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-top-right-shape">
        <div className="container pt-5">
          <div className="row align-items-center pt-5">
            <div className="col-md-4">
              <h3 className="text-dark-blue fw-bolder fs-2">
                Factoring web
              </h3>
              <p>
                Para nuestros clientes
              </p>
              <p>
                <b>
                  Deja de coleccionar facturas por cobrar
                </b>
                <br />
                En nuestra plataforma digital podrás cargar de manera masiva tus facturas,
                {' '}
                con cotización en línea clara y transparente.
              </p>
              <Link href="/factoring-web" passHref>
                <Button
                  className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                  text="Saber más"
                />
              </Link>
            </div>
            <div className="col-md-8">
              <Image
                src="/factoring-web.png"
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
      <section className="py-5 bg-bottom-left-shape">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h3 className="text-center text-dark-blue fw-bolder fs-2">
                Tenemos la experiencia
                <br />
                para enfrentar el futuro
              </h3>
              <ul className="d-lg-flex justify-content-between w-100 pt-5">
                <li className="px-4 w-100">
                  <div className="card shadow p-4 text-center bg-secondary-gradient">
                    <h4 className="text-dark-blue fw-bolder fs-3 mb-0">
                      19
                    </h4>
                    <p className="text-dark-blue fs-4 mb-0">
                      AÑOS
                    </p>
                  </div>
                </li>
                <li className="px-4 w-100">
                  <div className="card shadow p-4 text-center bg-secondary-gradient">
                    <h4 className="text-dark-blue fw-bolder fs-3 mb-0">
                      4000
                    </h4>
                    <p className="text-dark-blue fs-4 mb-0">
                      PYMES
                    </p>
                  </div>
                </li>
                <li className="px-4 w-100">
                  <div className="card shadow p-4 text-center bg-secondary-gradient">
                    <h4 className="text-dark-blue fw-bolder fs-3 mb-0">
                      600
                    </h4>
                    <p className="text-dark-blue fs-4 mb-0">
                      MMUS$
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container py-5 bg-tag">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h3 className="text-center text-dark-blue fw-bolder fs-2">
                Para nuestros clientes
              </h3>
              <ul className="d-lg-flex justify-content-between w-100 pt-5">
                <li className="px-4 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient">
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
                    <Link href="/leasing" passHref>
                      <Button
                        className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                        text="Saber más"
                      />
                    </Link>
                  </div>
                </li>
                <li className="px-4 w-100">
                  <div className="card shadow p-4 bg-secondary-gradient">
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
                    <Link href="/leaseback" passHref>
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
      <section className="py-5 bg-secondary-gradient">
        <div className="container py-5">
          <div className="row align-items-center">
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
}
