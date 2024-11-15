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

const Content = ({ content }) => {
  const { title, subtitle, description } = content;
  return (
    <div className="text-left px-4">
      <h2 className="text-2xl font-bold text-purple display-font mb-6">
        {title}
      </h2>
      <h3 className="lg:text-[40px] leading-tight text-2xl font-bold display-font text-purple mb-4">
        {subtitle}
      </h3>
      <p className="lg:text-2xl text-2xl font-semibold text-dark-grey">
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
    >
      <Slider {...sliderSettings}>
        {bannersToShow(data.pages.hero).map((item) => {
          return !item?.desktop?.url ? (
            <LayerHero
              title={item.title}
              columnContent={<Content content={item} />}
              subtitle={item.subtitle}
              backgroundImage={item.backgroundImage.url}
              rtl={item.rtl}
            >
              <div className="h-5/6 w-full">
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
          );
        })}
      </Slider>

      <section className="container px-4 mx-auto mt-20 lg:py-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 xl:w-2/6 order-2 lg:order-1">
          <h1 className="display-font font-semibold text-3xl text-blue">
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
        <div className="lg:w-1/2 xl:w-3/6 order-1 lg:order-2">
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

      <article className="pt-12 bg-ameba-pattern-light bg-no-repeat bg-cover">
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
