import { useState } from 'react';
import { useRouter } from 'next/router';
import { getServices, getServiceBySlug } from '@utils/lib/api';

import Hero from '@components/Molecules/Hero';
import Layout from '@components/Templates/Layout';
import ServicesInfo from '@components/Molecules/ServiceContent';
import ServiceFaq from '@components/Molecules/ServiceFaq';
import ServiceProcess from '@components/Molecules/ServiceProcess';
import Modal from '@components/Templates/Modal';
import FormGetInfo from '@components/Molecules/FormContact';

export default function Service({ data }) {
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
        <div className="row content-wrapper align-items-center justify-content-center">
          <div className="spinner-border text-secondary-color" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Hero
            heroImages={{
              desktop: data.heroImage.url,
              mobile: data.heroImageMobile.url,
            }}
            image={data.title}
            alt={data.title}
          />

          <ServicesInfo
            services={data.serviceContent}
            name={data.title}
            onClick={() => handleClick()}
          />

          <ServiceFaq
            services={data.serviceFaq}
            name={data.title}
          />

          <ServiceProcess
            services={data.serviceProcess}
            name={data.title}
            onClick={() => handleClick()}
          />

          <Modal
            bgColor="bg-grey"
            onClick={handleClick}
            showModal={modal}
            size="lg"
          >
            <FormGetInfo
              service={data.title}
              title={data.title}
            />
          </Modal>
        </>

      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const { data: { service } } = await getServiceBySlug(slug);

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
    paths: services?.map((item) => servicesPath + item.slug) || ['/servicios/factoring'],
    fallback: true,
  };
}
