import Image from 'next/image';
import Link from 'next/link';
import FormContact from '@components/Molecules/FormContact';
import FormGetInfo from '@components/Molecules/FormGetInformation';
import GradientCircleSection from '@components/Molecules/GradientCircleSection';
import ServiceItem from '@components/Molecules/ServiceItem';
import Button from '@components/Atoms/Button';
import Carousel from 'react-elastic-carousel';
import { newsSliderData } from '@data/index';

const SectionTitle = () => (
  <>
    <h1 className="text-soft-purple fw-bolder mb-4">
      Factoring
    </h1>
    <h2 className="text-dark-blue fw-bolder mb-4">
      ¿Tus clientes te pagan a
      <br />
      30, 60, 90 días o más?
    </h2>
  </>
);

const SectionSubtitle = () => (
  <>
    <p className="mb-0">
      <span className="text-dark-blue fw-bolder fs-4">Que el crecimiento no tarde en llegar</span>
      <br />
      {' '}
      Obtén liquidez inmediata cediéndonos tus facturas a crédito.
    </p>
    <p><small>*Pre aprobación sujeta a revisión de antecedentes comerciales</small></p>
  </>
);

const ServiceLayout = ({ data, formatedTitle }) => (
  <>
    <GradientCircleSection
      title={<SectionTitle />}
      subTitle={<SectionSubtitle />}
      classFirstCol="col-lg-5"
      classSecondCol="col-lg-5"
      imageUrl="/leasing.png"
    />
    <ServiceItem
      imageUrl="/pow-2.png"
      order="first"
      title="Te apoyamos desde la factura uno"
      text="El Factoring es una herramienta de financiamiento que permite a las empresas obtener liquidez inmediata, mediante el anticipo de sus facturas a crédito, para que puedan ordenar su flujo de caja."
      bgType="bg-top-right-shape"
    />
    <ServiceItem
      imageUrl="/linea-credito.png"
      order="last"
      title="Cuentas con una línea de Factoring pre aprobada*"
      subTitle="¡Equivalente a un mes de venta!"
      text="*Pre aprobación sujeta a revisión de antecedentes comerciales."
      bgType="bg-bottom-left-shape"
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

    <section className="py-5 bg-secondary-gradient">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-md-6 mb-4 mb-lg-0">
            <Image
              src="/dicon.png"
              alt="Más que ejecutivos"
              layout="responsive"
              objectFit="contain"
              width={500}
              height={500}
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

    <section className="py-lg-5 bg-top-right-shape">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-md-4 mb-5 mb-lg-0">
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
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-5 bg-secondary-gradient">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-lg-5">
            <div className="card shadow p-4">
              <FormGetInfo
                service={data.Seo.metaTitle}
                title={formatedTitle}
                image={`${data.Seo.metaTitle.toLowerCase()}.jpg`}
                content={data.Como.Contenido}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <h2 className="text-soft-purple fw-bolder">¿Tienes dudas?</h2>
            <p>Conversemos</p>
            <h3 className="text-dark-blue fw-bolder">Más que ejecutivos</h3>
            <p>Somos un equipo humano dispuesto a ser parte de tu empresa.</p>
            <p>Porque sabemos que eres el motor de la economía.</p>
          </div>
        </div>
      </div>
    </section>

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

    <section className="pb-5 py-lg-5 bg-bottom-left-shape">
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
              <li className="px-4 w-100 my-4 my-lg-0">
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

    <section className="py-lg-5 bg-mask">
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
              <li className="px-4 my-4 my-lg-0 w-100">
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

export default ServiceLayout;
