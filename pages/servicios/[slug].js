import { useState } from 'react';
import { useRouter } from 'next/router';
import { getServices, getServiceBySlug, formatServices } from '@/utils';

import StaticHero from '@/components/Molecules/StaticHero';
import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import FormGetInfo from '@/components/Molecules/Forms/FormContact';
import Spinner from '@/components/Atoms/Spinner';
import ZigZagSection from '@/components/Templates/ZigZagSection';

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

          {/* <ServicesInfo
            services={data.serviceContent}
            name={data.title}
            onClick={() => handleClick()}
          />

          <ServiceFaq services={data.serviceFaq} name={data.title} />

          <ServiceProcess
            services={data.serviceProcess}
            name={data.title}
            onClick={() => handleClick()}
          /> */}

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
