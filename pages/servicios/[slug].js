import { useState } from 'react';
import { useRouter } from 'next/router';
import { getServices, getServiceBySlug, formatServices } from '@/utils';

import StaticHero from '@/components/Molecules/StaticHero';
import LayerHero from '@/components/Molecules/LayerHero';
import Layout from '@/components/Templates/Layout';
import Card from '@/components/Atoms/Card';
import Modal from '@/components/Templates/Modal';
import FormGetInfo from '@/components/Molecules/Forms/FormContact';
import SubscribeSection from '@/components/Templates/SubscribeSection';
import Accordion from '@/components/Molecules/Accordion';
import Spinner from '@/components/Atoms/Spinner';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import StepCard from '@/components/Molecules/StepCard';

const Content = () => (
  <div className="px-4 text-left">
    <h1 className="mb-6 text-3xl font-bold text-purple display-font">
      Factoring
    </h1>
    <h3 className="mb-4 lg:text-[38px] leading-tight text-2xl font-bold display-font text-purple">
      ¡Que el crecimiento no tarde en llegar!
    </h3>
    <p className="text-xl font-semibold lg:text-2xl text-dark-grey">
      Obtén liquidez inmediata cediéndonos tus facturas.
    </p>
  </div>
);

const Service = ({ data }) => {
  console.log({ data });
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <Layout
      title={!router.isFallback ? data.title : 'CFC Capital'}
      description={!router.isFallback ? data.description : 'CFC Capital'}
    >
      {router.isFallback ? (
        <div className="flex min-h-[calc(100vh-217px)] text-dark-blue justify-center items-center w-full">
          <Spinner
            width="50px"
            height="50px"
            type="dots"
            style={{
              '--spinner-color': 'var(--dark-blue)',
              '--spinner-stroke': '7px',
            }}
          />
        </div>
      ) : (
        <>
          {data?.title === 'Factoring' ? (
            <LayerHero
              title={data.title}
              columnContent={<Content />}
              subtitle={data.subTitle}
              backgroundImage="/ameba-factoring.png"
              ltr
            >
              <Card
                containerClassName="px-4"
                cardClassName="p-4 lg:p-10 lg:mx-10 bg-white"
              >
                <FormGetInfo service={data.title} title={data.title} />
              </Card>
            </LayerHero>
          ) : (
            <StaticHero
              HeroImages={{
                desktop: data.heroImage.url,
                mobile: data.heroImageMobile.url,
              }}
              image={data?.title?.toLowerCase()}
              alt={data?.title}
            />
          )}

          <ZigZagSection
            itemList={formatServices(data.serviceContent, {
              colorKey: 'color',
              descriptionKey: 'content',
            })}
            sectionClassName="container md:px-4 mx-auto"
            itemClassName="my-20 md:rounded-3xl shadow-lg overflow-hidden"
            onClick={handleClick}
            buttonText="Saber más"
          />

          <section className="container max-w-5xl py-10 mx-auto my-10 md:px-4">
            <h2 className="display-font mb-8 text-4xl font-black text-center text-dark-blue">
              Proceso de {data.title}
            </h2>
            <div className="md:flex">
              {data.serviceProcess.map((item, key) => (
                <StepCard
                  key={item.description}
                  name={item.subtitle}
                  icon={
                    <div className="display-font flex items-center justify-center w-20 h-20 text-4xl font-bolds text-medium-blue rounded-full border-medium-blue border-solid border-2">
                      {key + 1}
                    </div>
                  }
                  description={item.description}
                />
              ))}
            </div>
          </section>

          <section className="container mx-auto my-12 md:px-4">
            <h2 className="display-font text-4xl mb-8 font-black text-center text-dark-blue">
              Preguntas Frecuentes
            </h2>
            <Accordion list={data.serviceFaq} />
          </section>

          <SubscribeSection />

          <Modal
            bgColor="bg-white"
            onClick={handleClick}
            showModal={modal}
            size="lg"
          >
            <FormGetInfo service={data.title} title={data.title} />
          </Modal>
        </>
      )}
    </Layout>
  );
};

export default Service;

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const {
      data: { service },
    } = await getServiceBySlug(slug);

    if (!service) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }

    return {
      props: {
        data: service,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const response = await getServices();
    const services = response?.data?.services;
    const path = '/servicios/';

    if (!services) {
      console.warn(
        'No se encontraron services o la estructura de datos es incorrecta'
      );
      return {
        paths: [],
        fallback: true,
      };
    }

    return {
      paths: services
        ?.filter((item) => item.slug !== 'factoring-web')
        .map((item) => path + item.slug),
      fallback: true,
    };
  } catch (error) {
    console.warn('Error en getStaticPaths:', error);
    return {
      paths: [],
      fallback: true,
    };
  }
}
