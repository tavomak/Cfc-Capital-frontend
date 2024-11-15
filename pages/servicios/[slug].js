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
  <div className="text-left px-4">
    <h1 className="text-3xl font-bold text-purple display-font mb-6">
      Factoring
    </h1>
    <h3 className="lg:text-5xl text-2xl font-bold display-font text-purple mb-4">
      ¡Que el crecimiento no tarde en llegar!
    </h3>
    <p className="lg:text-2xl text-2xl font-semibold text-dark-grey">
      Obtén liquidez inmediata cediéndonos tus facturas.
    </p>
  </div>
);

const Service = ({ data }) => {
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
              image={data.title}
              alt={data.title}
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

          <section className="container md:px-4 mx-auto">
            <h2 className="text-dark-blue text-4xl font-black text-center my-12">
              Preguntas Frecuentes
            </h2>
            <Accordion list={data.serviceFaq} />
          </section>

          <section className="container md:px-4 mx-auto pt-12">
            <h2 className="text-dark-blue text-4xl font-black text-center my-12">
              Proceso de {data.title}
            </h2>
            <div className="py-10 flex flex-wrap">
              {data.serviceProcess.map((item, key) => (
                <Card
                  key={item.description}
                  containerClassName="w-full md:w-1/3 px-4 py-4 md:py-0"
                  cardClassName="p-4 lg:px-12"
                >
                  <div className="text-4xl flex">
                    <div
                      className="display-font font-black p-12 relative text-blue rounded-full my-5"
                      style={{
                        backgroundColor: `var(--${iconsMapping[key + 1]?.color})`,
                      }}
                    >
                      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        {key + 1}
                      </span>
                    </div>
                  </div>

                  <p className="display-font font-semibold text-xl text-blue">
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
  const servicesPath = '/servicios/';
  const { data } = getServices();

  const services = await data?.services;

  return {
    paths: services?.map((item) => servicesPath + item.slug) || [
      '/servicios/factoring',
    ],
    fallback: true,
  };
}
