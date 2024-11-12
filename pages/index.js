import { useRouter } from 'next/router';
import Slider from 'react-slick';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
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

function getVideoTransformationsWithReactVideo() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'deevr9k54',
    },
  });

  const myVideo = cld.video('1112_s1nvpc');

  return myVideo;
}

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
          return item?.title ? (
            <LayerHero
              key={item.id}
              title={item.title}
              subtitle={item.subTitle}
              backgroundImage="/elipse.png"
              ltr
            >
              {item.title}
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
          <AdvancedVideo
            cldVid={getVideoTransformationsWithReactVideo()}
            autoPlay
            loop
            muted
            playsInline
            poster="/hombre-ameba.jpg"
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
