import { useState } from 'react'
import router from 'next/router'
import Image from 'next/image'
import { getAllServicesForHome } from 'lib/api'
import {shimmer, toBase64} from 'helpers'

import Layout from 'components/Templates/Layout'
import Slider from "react-slick";
import Modal from 'components/Templates/Modal'
import styles from 'styles/pages/Home.module.scss'

const services = [
  {
    icon: 'factoring-web',
    text: 'Lanzamos nueva plataforma digital en donde podrás cargar de manera masiva tus facturas, con cotización en línea clara y transparente.',
    title: 'Factoring Web',
    review: false,
  },
  {
    icon: 'factoring',
    text: 'Permite a las empresas obtener liquidez inmediata, así logran ordenar su flujo de caja.',
    title: 'Factoring',
    review: '“Conseguí colocar un producto en una importante empresa del retail, el producto fue un éxito y me hicieron un pedido más grande, para poder cumplir necesitaba capital de trabajo, como era mi factura N°1 no fue fácil hasta que llegue a las oficinas de CFC...”',
    detail: () => (<><p>Haciendo un análisis de costos de producción en mi empresa me di cuenta que haciendo una inversión en maquinaria podía hacer más eficiente mi gestión, obtener un importante ahorro en costos e incluso aumentar mis ventas, eran máquinas muy específicas y de bajo mercado secundario así que no será fácil conseguir el financiamiento por la prensa me enteré del Leaseback, me acerqué a las oficinas de CFC Capital para averiguar en detalle en que consistía, el ejecutivo que atendía me explicó todo referente al Leaseback, yo tenía una propiedad comercial así que presenté mis antecedentes, me evaluaron y la operación se aprobó, hoy pago una cuota mensual que se paga casi en su totalidad con el ahorro en costos que tuve, mis ventas han aumentado un 20% así que además me queda un restito para otros gastos, fue realmente una muy buena inversión.</p><p><b>CASO REAL EMPRESA PRODUCTIVA DEL SECTOR INDUSTRIAL</b></p></>),
  },
  {
    icon: 'leasing',
    title: 'Leasing',
    text: 'Resolver el financiamiento para la adquisición de activos fijos.',
    review: '“Haciendo un análisis de costos de producción en mi empresa me di cuenta que haciendo una inversión en maquinaria podía hacer más eficiente mi gestión, obtener un importante ahorro en costos e incluso aumentar mis ventas, eran máquinas muy ...”',
    detail: () => (<><p>Me adjudiqué un contrato por Mercado Público para trabajar en una importante obra en el sur del país transportando áridos, dentro de las bases se establecía que el contrato debí­a ejecutarlo con un camión nuevo, yo ya había estado cotizando camiones y tenía listo uno para comprar, por un amigo que me recomendó llegue a CFC Capital para ver la posibilidad de financiamiento v­ía leasing, me atendió un ejecutivo el cual inmediatamente me pidió mis antecedentes y me asesoró en cuanto al plazo en que debía tomar el leasing para no tener problemas con el pago de la cuota mensual dado los flujos del contrato, la cuota tiene incluido todos los gastos e incluso el seguro así­ que otra preocupación menos, en dos semanas tení­a mi camión nuevo y estaba listo para empezar con el trabajo.</p><p>Hoy pago sin problemas mi cuota, obtengo el beneficio tributario y el camión está trabajando perfecto, incluso estoy postulando a otro contrato para comprar otro camión, todo bien.</p><p><b>CASO REAL EMPRESA DEL SECTOR TRANSPORTE QUE OPERA A TRAVÉS DE LA PLATAFORMA MERCADO PÚBLICO</b></p></>),

  },
  {
    icon: 'leaseback',
    title: 'Leaseback',
    text: 'Permite transformar en dinero un bien productivo de la empresa, normalmente bienes raí­ces.',
    review: '“Me adjudique un contrato por Mercado Público para trabajar en una importante obra en el sur del país transportando áridos, dentro de las bases se establecía que el contrato debí­a ejecutarlo con un camión nuevo, yo ya había estado cotizando ...”',
    detail: () => (<><p>Conseguí colocar un producto en una importante empresa del retail, el producto fue un éxito y me hicieron un pedido más grande, para poder cumplir necesitaba capital de trabajo, como era mi factura N°1 no fue fácil hasta que llegue a las oficinas de CFC Capital, increíblemente no les asustó que fuera mi primera factura, el ejecutivo fue muy amable y en 48 horas tení­a los fondos para poder cumplir con la segunda orden de compra.</p><p>Hoy después de dos años operando con CFC no tengo problemas y mis flujos están mucho más ordenados, CFC se transformó en un partner financiero y gracias a su apoyo hoy tengo una empresa sólida y con un gran futuro.</p><p><b>CASO REAL EMPRESA PRODUCTIVA DEL SECTOR RETAIL</b></p></>),
  }
]
export default function Home({ data }) {
  const { seo, banners } = data;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(.8,0,0.5,1)",
    lazyLoad: 'progressive',
  };
  const [modal, setModal] = useState(false);
  const [primaryModal, setPrimaryModal] = useState(false);
  const [modalText, setModalText] = useState(null);

  const handleClick = (e, text) => {
    e.preventDefault();
    setModalText(text);
    setModal(true);
  };
  const handleClickClose = (e) => {
    e.preventDefault();
    setModal(false);
    setTimeout(() => {
      setModalText('');
    }, 500);
  }
  const handleClickClosePrimaryModal = (e) => {
    e.preventDefault();
    setPrimaryModal(false);
  }
  return (
    <Layout
      title={seo.metaTitle}
      description="Financiamos tu adquisición de activos fijos"
    >
      <>
        {banners && banners.length && (
          <Slider {...settings}>
            {
              banners.map((item) => (
                <div key={item.id} className="position-relative">
                  <div className="position-relative">
                    <div className="overlay"></div>
                    <div className="d-none d-lg-block">
                      <Image
                        src={`${item.item_image.url}`}
                        alt={`${item.title} | CFC Capital`}
                        layout="responsive"
                        objectFit='cover'
                        objectPosition="top"
                        width={700}
                        height={280}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                      />
                    </div>
                    <div className="d-lg-none">
                      <Image
                        src={`${item.item_image.url}`}
                        alt={`${item.title} | CFC Capital`}
                        layout="responsive"
                        objectFit='cover'
                        width={500}
                        height={400}
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                      />
                    </div>
                  </div>
                  <div className={`${styles.sliderText}`}>
                    {item.icono && (
                      <div className="d-none d-lg-block">
                        <Image 
                          src={`${item.icono.url}`}
                          alt={`${item.title} | CFC Capital`}
                          width={100}
                          height={100}
                        />
                      </div>
                    )}
                    <h2 className={`text-dark-blue fs-1 display-font ${styles.sliderTitle}`}>{item.titlulo}</h2>
                    <p className={`fs-2 display-font ${styles.sliderSubTitle}`}>{item.subtitulo}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
        )}
      </>

        <section className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <h1 className={`display-font ${styles.primaryTitle}`}>
                Financiamos al <br />
                <span className="text-soft-purple" >motor de la economía</span>
              </h1>
            </div>
          </div>
        </section>

        <section className={`container-fluid ${styles.bgCurvedGrey}`}>
          <div className="row align-tiems-stretch mt-lg-5 ">
            {services.map((item) => (
              <div className="col-md-6 col-lg-3 mb-5 mb-lg-0" key={item.title}>
                <div className={`px-4 pt-4 m-xxl-3 ${styles.firstsCards} shadow`}>
                  <div className="text-center">
                    <Image 
                      src={`/${item.icon}-bg.svg`}
                      alt={item.title}
                      layout="responsive"
                      objectFit='contain'
                      objectPosition="top"
                      width={16}
                      height={8}
                    />
                    <p className="fs-4 text-soft-purple display-font d-none">{item.title}</p>
                    <br />
                  </div>
                  <p className="text-center">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="col-12">
              <div className="text-center py-5 my-md-5">
                <a href="#!" className="btn btn-primary" onClick={() => router.push('/servicios')} >Pide tu financiamiento</a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Image 
            src="/curved-border-gris.svg"
            alt="wave"
            width={40}
            height={3}
            layout="responsive"
          />
        </div>
        <section className="bg-grey container-fluid position-relative" style={{ top: '-4px'}}>
          <div className="container py-5">
            <div className="row pt-lg-5">
              <div className="col-md-6">
                <h2 className={`display-font text-soft-purple fs-1`}>Creando capacidad de <span className="text-soft-blue-not">crecer</span></h2>
              </div>
              <div className="col-md-6">
                <p className="fs-5">Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país</p>
              </div>
            </div>
            <div className="row align-items-stretch py-5 my-lg-5">
            {services.filter((item) => item.review).map((item) => (
              <div className="col-lg-4 mb-5 mb-lg-0" key={item.title}>
                <div className={`card d-flex flex-column justify-content-between ${styles.reviewCard}`}>
                  <Image 
                    src={`/${item.icon}-2.jpg`}
                    alt={item.title}
                    layout="responsive"
                    objectFit='cover'
                    objectPosition="top"
                    width={100}
                    height={70}
                    placeholder="blur"
                    blurDataURL={`/${item.icon}-2.jpg`}
                  />
                  <div className={`px-3 px-sm-4 px-md-5 py-4 text-white`}>
                    <p className="display-font fs-5">{item.title}</p>
                    <p>{item.review}</p>
                  </div>
                  <div className="text-center mb-4">
                    <a href="#!" onClick={(e) => handleClick(e, item.detail)} className="btn btn-light btn-rounded display-font">Ver más</a>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <Modal
            bgColor="bg-dark-blue"
            onClick={handleClickClose}
            showModal={modal}
            size="lg"
          >
            {modalText}
          </Modal>
          <Modal
            onClick={handleClickClosePrimaryModal}
            showModal={primaryModal}
            bgColor="bg-dark-blue"
          >
            <Image 
              src={`/primary-popup.jpg`}
              alt="Financiamos en 4 horas"
              layout="responsive"
              objectFit='contain'
              width={160}
              height={82}
            />

          </Modal>
        </section>
    </Layout>
  )
}
export async function getStaticProps({ preview = null }) {
  const data = (await getAllServicesForHome(preview)) || []
  return {
    props: { data, preview },
  }
}
