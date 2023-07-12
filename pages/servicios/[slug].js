import { useState } from 'react';
import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Hero from '@components/Molecules/Hero';
import Layout from '@components/Templates/Layout';
import ServicesInfo from '@components/Molecules/ServiceContent';
import ServiceFaq from '@components/Molecules/ServiceFaq';
import ServiceProcess from '@components/Molecules/ServiceProcess';
import Modal from '@components/Templates/Modal';
import FormGetInfo from '@components/Molecules/FormGetInformation';
import FormFactoringActiveCampaign from '@components/Molecules/FormFactoringActiveCampaign';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_API_URL,
  cache: new InMemoryCache(),
});

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
          <Hero image={data.title} alt={data.title} />

          <ServicesInfo services={data.serviceContent} />

          <ServiceFaq services={data.serviceFaq} />

          <ServiceProcess
            services={data.serviceProcess}
            name={data.title}
            onClick={() => handleClick()}
          />

          <Modal
            bgColor="bg-dark-blue"
            onClick={handleClick}
            showModal={modal}
            size="lg"
          >
            {data.title && data.title !== 'Factoring' ? (
              <FormGetInfo
                service={data.title}
                title={data.title}
              />
            ) : (
              <FormFactoringActiveCampaign />
            )}
          </Modal>
        </>

      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  try {
    const { data } = await client.query({
      query: gql`
        query Service($slug: String!) {
          service(where: {slug: $slug}) {
            description
            heroImage {
              url
            }
            review {
              markdown
            }
            title
            serviceContent {
              color
              title
              image {
                url
              }
              content {
                markdown
              }
            }
            cardImage {
              url
            }
            serviceFaq {
              text
              title
            }
            serviceProcess {
              description
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });

    return {
      props: {
        data: data.service,
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

export async function getStaticPaths() {
  const servicesPath = '/servicios/';
  const { data } = await client.query({
    query: gql`
      query getAllServices {
        services {
        slug
        }
      }
    `,
  });

  const services = await data.services;
  return {
    paths: services?.map((item) => servicesPath + item.slug) || ['/servicios/factoring'],
    fallback: true,
  };
}
