import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getServicesForHome } from '@lib/api';
import { shimmer, toBase64 } from '@helpers/index';

import Layout from '@components/Templates/Layout';
import Divider from '@components/Atoms/Divider';
import Icon from '@components/Atoms/Icon';
import Carousel from '@components/Molecules/Carousel';
import ServicesInfo from '@components/Molecules/ServicesInfo';
import Modal from '@components/Templates/Modal';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  speed: 800,
  autoplaySpeed: 5000,
  cssEase: 'cubic-bezier(.8,0,0.5,1)',
  lazyLoad: 'progressive',
};

const setBanners = (data) => {
  if (!data) return null;

  const banners = data
    .map((item) => ({
      id: item.id,
      item_image: {
        url: item.desktop.url,
      },
      item_image_mobile: {
        url: item.mobile.url,
      },
      title: item.title,
      subtitulo: item.description,
      slug: item.slug,
    }));
  return banners;
};

export default function Home({ data }) {
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
  };
  const handleClickClosePrimaryModal = (e) => {
    e.preventDefault();
    setPrimaryModal(false);
  };
  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >

      <Carousel
        settings={settings}
        banners={setBanners(data.pages.hero)}
      />

      <section className="container py-5">
        <div className="row justify-content-between">
          <div className="col-md-5 col-xl-4 py-5">
            <h1 className="display-font fs-2 text-dark-blue">
              Somos una
              <br />
              <span className="text-soft-purple">empresa de servicios financieros, </span>
              presente en el mercado desde el año 2003
            </h1>
            <Divider theme="dark" className="py-5" />
            <p className="text-dark-blue mb-5">
              Estamos especializados en el segmento de empresas y pymes entregando soluciones a
              {' '}
              las necesidades de financiamiento de capital de trabajo y de inversión, transformando
              {' '}
              los flujos por cobrar a plazo, en dinero efectivo de inmediato o bien haciendo posible
              {' '}
              adquirir activos productivos a las empresas
            </p>
            <a href="!#" className="btn btn-primary d-none">Pide tu financiamiento</a>
          </div>
          <div className="col-md-7">
            <Image
              src="/hombre-ameba-s.png"
              alt="CFC capital"
              layout="responsive"
              objectFit="contain"
              objectPosition="top"
              width={1200}
              height={1121}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
        </div>
      </section>

      <ServicesInfo services={data.services} />

      <section>
        <div className="container py-5">
          <div className="row justify-content-center my-5">
            <div className="col-md-6">
              <h2 className="display-font text-center text-dark-blue fs-2">
                Creando capacidad de
                {' '}
                <span className="text-soft-blue-not">crecer</span>
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <p className="fs-5 text-center text-soft-purple">Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país</p>
            </div>
          </div>
          <div className="row align-items-stretch py-5 my-lg-5">
            {data && data.services.filter((item) => item.review).map((item) => (
              <div className="col-lg-4 mb-5 mb-lg-0" key={item.slug}>
                <div className="d-flex" style={{ height: '80%' }}>
                  <div className="px-3 px-sm-4 px-md-5 py-5 text-dark-blue bg-grey position-relative">
                    <Icon bgColor="bg-dark-blue" icon={item.slug} absolute />
                    <div className="mt-5" dangerouslySetInnerHTML={{ __html: item.review.html }} />
                  </div>
                </div>
                <div className="text-center my-4">
                  <a href="#!" onClick={(e) => handleClick(e, item.description)} className="btn btn-complementary px-4">Ver más</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
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
          <a href="!#">
            <Image
              src="/primary-popup.jpg"
              alt="Financiamos en 4 horas"
              layout="responsive"
              objectFit="contain"
              width={160}
              height={82}
            />
          </a>
        </Link>

      </Modal>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await getServicesForHome();
    return {
      props: {
        data,
      },
      revalidate: 100,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      notFound: true,
    };
  }
}
