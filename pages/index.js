import { useRouter } from 'next/router';
import Image from 'next/image';
import Slider from 'react-slick';
// import { AdvancedVideo } from '@cloudinary/react';
// import { Cloudinary } from '@cloudinary/url-gen';
import {
  formatServices,
  sliderSettings,
  bannersToShow,
  getPageBySlugAndServices,
  mediaLogos,
} from '@/utils';

import Layout from '@/components/Templates/Layout';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import StaticHero from '@/components/Molecules/StaticHero';
import LayerHero from '@/components/Molecules/LayerHero';
import MediaSection from '@/components/Templates/MediaSection';
import SubscribeSection from '@/components/Templates/SubscribeSection';

// function getVideoTransformationsWithReactVideo() {
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'deevr9k54',
//     },
//   });

//   const myVideo = cld.video('1112_s1nvpc');

//   return myVideo;
// }

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://www.cfc.cl',
  logo: 'https://www.cfc.cl/cfc-logo.jpg',
  name: 'CFC Capital',
  legalName: 'CFC Capital',
  telephone: '+562281818181',
  sameAs: ['https://cl.linkedin.com/company/cfc-capital-s-a'],
};

const Content = ({ content }) => {
  const { title, subtitle, description } = content;
  return (
    <div className="px-4 text-left">
      <h2 className="mb-6 text-2xl font-bold text-purple display-font">
        {title}
      </h2>
      <h3 className="lg:text-[40px] leading-tight text-2xl font-bold display-font text-purple mb-4">
        {subtitle}
      </h3>
      <p className="text-2xl font-semibold lg:text-2xl text-dark-grey">
        {description}
      </p>
    </div>
  );
};

const Home = ({ data }) => {
  const router = useRouter();
  const handleSectionClick = (e, item) => {
    e.preventDefault();
    router.push(`/servicios/${item.slug}`);
  };

  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
      schema={structuredData}
    >
      <Slider {...sliderSettings}>
        {bannersToShow(data.pages.hero).map((item) =>
          !item?.desktop?.url ? (
            <LayerHero
              key={item.id}
              title={item.title}
              columnContent={<Content content={item} />}
              subtitle={item.subtitle}
              backgroundImage={item.backgroundImage.url}
              rtl={item.rtl}
            >
              <div className="w-full h-5/6">
                <Image
                  src={item.frontImage.url}
                  width={500}
                  height={500}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxHeight: '600px',
                  }}
                  alt={item.title || item.subtitle}
                  priority
                />
              </div>
            </LayerHero>
          ) : (
            <StaticHero
              key={item.id}
              heroImages={{
                desktop: item.desktop.url,
                mobile: item.mobile.url,
              }}
            />
          )
        )}
      </Slider>

      <section className="container flex flex-col items-center justify-between px-4 mx-auto mt-20 lg:py-20 lg:flex-row">
        <div className="order-2 lg:w-1/2 xl:w-2/6 lg:order-1">
          <h1 className="text-3xl font-semibold display-font text-blue">
            Somos una empresa de servicios financieros, presente en el mercado
            desde el año 2003
          </h1>
          <p className="my-5">
            Estamos especializados en el segmento de empresas y pymes entregando
            soluciones a las necesidades de financiamiento de capital de trabajo
            y de inversión, transformando los flujos por cobrar a plazo, en
            dinero efectivo de inmediato o bien haciendo posible adquirir
            activos productivos a las empresas
          </p>
        </div>
        <div className="order-1 lg:w-1/2 xl:w-3/6 lg:order-2">
          {/* <AdvancedVideo
            cldVid={getVideoTransformationsWithReactVideo()}
            autoPlay
            loop
            muted
            playsInline
            poster="/hombre-ameba.png"
          /> */}
          <Image
            src="/hombre-ameba.png"
            alt="Home image"
            width={500}
            height={500}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </section>

      <article className="pt-12 bg-no-repeat bg-cover bg-ameba-pattern-light">
        <ZigZagSection
          itemList={formatServices(data.services, {
            imageKey: 'cardImage',
            colorPrefix: 'bg-',
          })}
          sectionClassName="container md:px-4 mx-auto"
          itemClassName="my-20 md:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden"
          onClick={handleSectionClick}
        />
      </article>

      <SubscribeSection />

      <MediaSection mediaSet={mediaLogos} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const { data } = await getPageBySlugAndServices('home');
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
