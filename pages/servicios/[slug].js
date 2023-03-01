import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import Layout from '@components/Templates/Layout';
import RowTextImage from '@components/Molecules/RowTextImage';
import { services, fullServices } from '@data/index';
import FactoringLayout from '@components/Templates/FactoringLayout';
import ServiceLayout from '@components/Templates/ServiceLayout';

export default function Post({ data }) {
  const router = useRouter();
  const [formatedTitle, setFormatedTitle] = useState('');
  const [service, setService] = useState(null);
  const [isLeasing, setLeasing] = useState(false);

  useEffect(() => {
    setFormatedTitle(data.Slide.titlulo.replace('<br> <small class="text-dark-grey fs-2">', '').replace('</small>', ''));
    setService(data.Seo.metaTitle);
    console.log({ data });
  }, [data]);
  useEffect(() => {
    if (service === 'Leasing') {
      setLeasing(true);
    } else {
      setLeasing(false);
    }
  }, [service]);
  return (
    <Layout
      title={data.Seo.metaTitle}
      description={data.Seo.metaDescription}
    >
      <Head>
        <title>
          {data.Seo.metaTitle}
          {' '}
          | CFC Capital
        </title>
        <meta property="og:image" content={data.Seo.ShareImage} />
      </Head>
      {(service === 'Factoring')
        ? (<FactoringLayout />)
        : (
          <ServiceLayout
            formatedTitle={formatedTitle}
            data={data}
          />
        )}
      <RowTextImage
        gradientType="secondary"
        alignType="center"
        title="Presentes en la tercera y cuarta región con agente zonal experto en financiamiento."
        titleColor="dark-blue"
        subtitle="En los rubros Transportes, Minería, Turismo y Servicios de Apoyo."
        imageUrl="/regiones.png"
        imageWidth="1030"
        imageHeight="660"
      />
    </Layout>
  );
}

export const getStaticProps = async ({ params, preview = null }) => {
  const array = fullServices
    .filter((article) => article.Seo.metaTitle.toLocaleLowerCase() === params.slug);
  const data = { ...array };
  return {
    props: {
      preview,
      data: data[0],
    },
    revalidate: 100,
  };
};

export const getStaticPaths = async () => {
  const servicePrefix = '/servicios/';
  const paths = services?.filter((item) => item.slug !== 'factoring-web')
    .map((item) => servicePrefix + item.slug);
  return {
    paths,
    fallback: false,
  };
};
