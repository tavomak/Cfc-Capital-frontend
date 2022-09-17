import { useState } from 'react'
import router from 'next/router'
import Image from 'next/image'
import {shimmer, toBase64} from 'helpers'
import Link from 'next/link'
import { servicios } from 'data'

import Layout from 'components/Templates/Layout'
import Slider from "react-slick"
import Modal from 'components/Templates/Modal'
import styles from 'styles/pages/Home.module.scss'

export default function Home({ services }) {
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
  const banners = [
    {
      id: '001',
      item_image : {
        url: '/slide-4.jpg'
      },
      titlulo: 'Apoyamos el desarrollo',
      subtitulo: 'de tu negocio'
    },
    {
      id: '002',
      item_image : {
        url: '/slide-5.jpg'
      },
      titlulo: 'Factoring',
      subtitulo: 'Financiamos el desarrollo de tu negocio'
    },
    {
      id: '003',
      item_image : {
        url: '/slide-6.jpg'
      },
      titlulo: 'Leasing',
      subtitulo: 'Financiamos tu adquisición de activos fijjos'
    },
    {
      id: '004',
      item_image : {
        url: '/slide-7.jpg'
      },
      titlulo: 'Leaseback',
      subtitulo: 'Te lo compro, te lo arriendo'
    },
  ]
  const [modal, setModal] = useState(false);
  const [primaryModal, setPrimaryModal] = useState(true);
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
  const handleClickService = (e, slug) => {
    e.preventDefault();
    if(slug === 'factoring-web') {
      window.open ('/CFC-PasoaPaso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${slug}`)
    }
  };
  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
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
            {services && services.map((item) => (
              <div className="col-md-6 col-lg-3 mb-5 mb-lg-0" key={item.slug}>
                <div className={`px-4 pt-4 m-xxl-3 ${styles.firstsCards} shadow`}>
                  <div className="text-center d-flex flex-column justify-content-between" style={{ height: "100%", }}>
                    <Image 
                      src={`/${item.slug}-bg.svg`}
                      alt={item.title}
                      layout="responsive"
                      objectFit='contain'
                      objectPosition="top"
                      width={16}
                      height={8}
                    />
                    <br />
                    <p className="text-center">{item.Seo.metaDescription}</p>
                    <a
                      href={`/servicios/${item.slug}`}
                      className="btn btn-primary mt-auto display-font mb-5"
                      rel='noreferrer'
                      onClick={(e) => handleClickService(e, item.slug)}
                    >
                      ver más
                    </a>
                  </div>
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
            {services && services.filter((item) => item.review).map((item) => (
              <div className="col-lg-4 mb-5 mb-lg-0" key={item.slug}>
                <div className={`card d-flex flex-column justify-content-between ${styles.reviewCard}`}>
                  <Image 
                    src={`/${item.slug}-2.jpg`}
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
                    <a href="#!" onClick={(e) => handleClick(e, item.Detalle)} className="btn btn-light btn-rounded display-font">Ver más</a>
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
            <div
              dangerouslySetInnerHTML={{ __html: modalText }}
            />
          </Modal>
          <Modal
            onClick={handleClickClosePrimaryModal}
            showModal={primaryModal}
            bgColor="bg-dark-blue"
            noPadding
          >
            <Link href="/contacto">
              <a href="contacto" >
                <Image 
                  src={`/primary-popup.jpg`}
                  alt="Financiamos en 4 horas"
                  layout="responsive"
                  objectFit='contain'
                  width={160}
                  height={82}
                />
                </a>
            </Link>

          </Modal>
        </section>
    </Layout>
  )
}
export async function getStaticProps() {
  return {
    props: {
      services: servicios
    },
  }
}