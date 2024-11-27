import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FaClipboardList,
  FaCircleCheck,
  FaCircleDollarToSlot,
} from 'react-icons/fa6';
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

const iconsMapping = {
  1: {
    icon: <FaClipboardList />,
    color: 'light-purple',
  },
  2: {
    icon: <FaCircleCheck />,
    color: 'light-blue',
  },
  3: {
    icon: <FaCircleDollarToSlot />,
    color: 'soft-purple',
  },
};

const Content = () => (
  <div className="px-4 text-left">
    <h1 className="mb-6 text-3xl font-bold text-purple display-font">
      Factoring
    </h1>
    <h3 className="mb-4 text-2xl font-bold lg:text-5xl display-font text-purple">
      ¡Que el crecimiento no tarde en llegar!
    </h3>
    <p className="text-2xl font-semibold lg:text-2xl text-dark-grey">
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
              backgroundImage="/elipse.png"
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

          <section className="container mx-auto md:px-4">
            <h2 className="my-12 text-4xl font-black text-center text-dark-blue">
              Preguntas Frecuentes
            </h2>
            <Accordion list={data.serviceFaq} />
          </section>

          <section className="container pt-12 mx-auto md:px-4">
            <h2 className="my-12 text-4xl font-black text-center text-dark-blue">
              Proceso de {data.title}
            </h2>
            <div className="flex flex-wrap py-10">
              {data.serviceProcess.map((item, key) => (
                <Card
                  key={item.description}
                  containerClassName="w-full md:w-1/3 px-4 py-4 md:py-0"
                  cardClassName="p-4 lg:px-12"
                >
                  <div className="flex text-4xl">
                    <div
                      className="relative p-12 my-5 font-black rounded-full display-font text-blue"
                      style={{
                        backgroundColor: `var(--${iconsMapping[key + 1]?.color})`,
                      }}
                    >
                      <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                        {key + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-xl font-semibold display-font text-blue">
                    {item.subtitle}
                  </p>
                  {item.description && (
                    <p className="my-5 text-sm text-blue">{item.description}</p>
                  )}
                </Card>
              ))}
            </div>
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
