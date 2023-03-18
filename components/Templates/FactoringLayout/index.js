import Image from 'next/image';
import Link from 'next/link';
import FormContact from '@components/Molecules/FormContact';
import GradientSection from '@components/Molecules/GradientSection';
import ServiceItem from '@components/Molecules/ServiceItem';
import Button from '@components/Atoms/Button';
import Carousel from 'react-elastic-carousel';
import DiconSection from '@components/Molecules/DiconSection';
import FactoringWebSection from '@components/Molecules/FactoringWebSection';
import ExperienceSection from '@components/Molecules/ExperienceSection';
import { newsSliderData } from '@data/index';

const SectionTitle = () => (
  <>
    <h1 className="text-soft-purple fw-bolder mb-4">
      Factoring
    </h1>
    <h2 className="text-dark-blue fw-bolder mb-4">
      ¿Tus clientes te pagan a
      {' '}
      30, 60, 90 días o más?
    </h2>
  </>
);

const SectionSubtitle = () => (
  <>
    <p className="text-dark-blue fw-bolder mb-0">¡Que el crecimiento no tarde en llegar!</p>
    <p className="mb-0">
      Obtén liquidez inmediata cediéndonos tus facturas.
    </p>
    <p><small>*Pre aprobación sujeta a revisión de antecedentes comerciales</small></p>
  </>
);

const FactoringLayout = ({ data }) => {
  const {
    requirements,
    whyToUse,
  } = data;
  return (
    <>
      <GradientSection
        title={<SectionTitle />}
        subtitle={<SectionSubtitle />}
        classFirstCol="col-lg-5"
        classSecondCol="col-lg-5"
        type="circle"
      >
        <div className="card shadow bg-secondary-gradient p-lg-5">
          <FormContact />
        </div>
      </GradientSection>

      <ServiceItem
        imageUrl="/business-guy.png"
        order="first"
        title="Te apoyamos desde la factura uno"
        shortDescription="El Factoring es una herramienta de financiamiento que permite a las empresas obtener liquidez inmediata, mediante el anticipo de sus facturas a crédito, para que puedan ordenar su flujo de caja."
        bgType="bg-top-right-shape"
        noBtn
      />

      <ServiceItem
        imageUrl="/linea-credito.png"
        order="last"
        title="Cuentas con una línea de Factoring pre aprobada*"
        subtitle="¡Equivalente a un mes de venta!"
        shortDescription="*Pre aprobación sujeta a revisión de antecedentes comerciales."
        bgType="bg-bottom-left-shape"
        noBtn
      />

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
        </div>
      </section>

      <DiconSection />

      <section className="container py-lg-5">
        {newsSliderData && newsSliderData.length && (
        <Carousel pagination={false}>
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

      <section className="py-5 bg-secondary-gradient">
        <div className="container">
          <div className="row justify-content-between align-items-center text-center text-lg-start">
            <div className="col-lg-5">
              <Image
                src={whyToUse.imageUrl}
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
            <div className="col-lg-5">
              <h2 className="text-dark-blue fw-bolder">
                ¿Por qué es la opción ideal?
              </h2>
              <ul>
                {whyToUse && whyToUse.content.map((item) => (
                  <li className="my-3" key={item}>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center text-center text-lg-start">
            <div className="col-lg-5">
              <h2 className="text-dark-blue fw-bolder">
                ¿Cuáles son los requisitos?
              </h2>
              <ul>
                {requirements && requirements.content.map((item) => (
                  <li className="my-3" key={item}>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <Image
                src={requirements.imageUrl}
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="card shadow p-4">
                <FormContact />
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="text-soft-purple fw-bolder">¿Tienes dudas?</h2>
              <p>Conversemos</p>
              <h3 className="text-dark-blue fw-bolder">Más que ejecutivos</h3>
              <p>Somos un equipo humano dispuesto a ser parte de tu empresa.</p>
              <p>Porque sabemos que eres el motor de la economía.</p>
            </div>
          </div>
        </div>
      </section>

      <FactoringWebSection />

      <ExperienceSection shape="bottom-left" />

      <section className="py-lg-5 bg-mask">
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
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-6">
              <h2 className="text-center text-dark-blue fw-bolder">No esperes por el cobro de tus cuentas</h2>
              <p className="text-center">
                Muévete con agilidad y planifica por adelantado
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FactoringLayout;
