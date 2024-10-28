import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FaClipboardList,
  FaCircleCheck,
  FaCircleDollarToSlot,
} from 'react-icons/fa6';
import { getServices, getServiceBySlug, formatServices } from '@/utils';

import StaticHero from '@/components/Molecules/StaticHero';
import Layout from '@/components/Templates/Layout';
import Card from '@/components/Atoms/Card';
import Modal from '@/components/Templates/Modal';
import FormGetInfo from '@/components/Molecules/Forms/FormContact';
import Spinner from '@/components/Atoms/Spinner';
import ZigZagSection from '@/components/Templates/ZigZagSection';

const iconsMapping = {
  1: <FaClipboardList />,
  2: <FaCircleCheck />,
  3: <FaCircleDollarToSlot />,
};

const Service = ({ data }) => {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setModal(!modal);
  };
  console.log({ data });
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
          <StaticHero
            HeroImages={{
              desktop: data.heroImage.url,
              mobile: data.heroImageMobile.url,
            }}
            image={data.title}
            alt={data.title}
          />

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
            <h2 className="text-dark-blue text-4xl font-semibold text-center">
              Preguntas Frecuentes
            </h2>
            <div className="py-10 flex flex-wrap justify-center">
              {data.serviceFaq.map((item, key) => (
                <Card
                  key={item.description}
                  containerClassName="md:w-1/3 px-4"
                  cardClassName="p-4"
                >
                  <div className="p-4 text-4xl text-blue flex justify-center">
                    {iconsMapping[key + 1]}
                  </div>

                  <p className="text-center display-font font-semibold text-xl text-blue">
                    {item.title}
                  </p>
                  {item.text && (
                    <p className="text-center mt-5 text-sm text-blue">
                      {item.text}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section className="container md:px-4 mx-auto">
            <h2 className="text-dark-blue text-4xl font-semibold text-center">
              Proceso de {data.title}
            </h2>
            <div className="py-10 flex flex-wrap">
              {data.serviceProcess.map((item, key) => (
                <Card
                  key={item.description}
                  containerClassName="md:w-1/3 px-4"
                  cardClassName="p-4"
                >
                  <div className="p-4 text-4xl text-blue flex justify-center">
                    {iconsMapping[key + 1]}
                  </div>

                  <p className="text-center display-font font-semibold text-xl text-blue">
                    Paso {key + 1}
                  </p>
                  {item.description && (
                    <p className="text-center mt-5 text-sm text-blue">
                      {item.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </section>

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
