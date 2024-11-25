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
  steps,
} from '@/utils';

import Layout from '@/components/Templates/Layout';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import StaticHero from '@/components/Molecules/StaticHero';
import LayerHero from '@/components/Molecules/LayerHero';
import MediaSection from '@/components/Templates/MediaSection';
import SubscribeSection from '@/components/Templates/SubscribeSection';
import Testimonial from '@/components/Templates/Testimonial';
import BlogCard from '@/components/Templates/BlogCard';
import StepCard from '@/components/Molecules/StepCard';
import Link from 'next/link';

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

      <section className="bg-testimonial p-8">
        <h2 className="text-center display-font font-bold text-2xl md:text-4xl text-medium-blue mb-8">
          Testimonios
        </h2>
        <Testimonial
          quote="CFC está conmigo. Me siento respaldada porque se que llegarán estas lucas, yo las puedo necesitar mañana y las voy a tener."
          author="Marcela Nercam"
          imageUrl="/Marcela Nercam.jpg"
        />
      </section>

      <section className="bg-gradient-to-r from-medium-blue to-soft-blue my-24 pt-8">
        <h2 className="text-center display-font font-bold text-2xl md:text-4xl text-white mb-8">
          Educación Financiera
        </h2>
        <p className="w-3/4 md:w-2/5 mx-auto text-center display-font font-medium text-md md:text-xl text-white">
          Te presentamos nuestra plataforma de recursos y artículo de interés en
          el desarrollo y crecimiento financiero.
        </p>
        <BlogCard
          imageUrl="/5 mitos sobre factoring.png"
          tags={['Factoring', 'Pyme']}
          title="Los 5 mitos más comunes sobre el Factoring"
          description="Francisco Goycoolea, gerente comercial de CFC Capital, aclara los 5 mitos más comunes que se tienen sobre esta popular opción de financiamiento."
          source="El Mercurio"
          websiteUrl="https://digital.elmercurio.com/"
        />
      </section>

      <section className="bg-gradient-to-r from-dark-blue to-purple text-white">
        <article className="mx-auto md:mr-0 pt-16 md:w-11/12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 flex flex-col gap-8 justify-center">
              <h2 className="w-3/4 mx-auto md:mx-0 text-center text-white text-balance display-font font-bold text-2xl md:text-left lg:text-4xl">
                Creando capacidad de crecer
              </h2>
              <p className="w-5/6 sm:w-3/4 mx-auto md:mx-0 text-center text-wrap text-white display-font font-medium text-sm md:text-left lg:text-lg">
                Fomentamos tu capacidad de desarrollar negocios que crezcan, se
                proyecten en el tiempo y aporten al país
              </p>
              <Link
                href="/"
                rel="noopener noreferrer"
                className="btn mx-auto md:mx-0 md:mb-8 cursor-pointer w-fit bg-white text-medium-blue py-2 px-7 transition-all hover:opacity-90"
              >
                Escríbenos
              </Link>
            </div>
            <div className="mt-auto md:w-2/3">
              <Image
                src="/empresarios-ameba.png"
                alt="empresarios"
                width={968}
                height={606}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </article>
      </section>
      <SubscribeSection />
      <section className="pt-8">
        <h2 className="text-center display-font font-bold text-2xl md:text-4xl text-medium-blue mb-8">
          Factoring web
        </h2>
        <p className="w-3/4 mx-auto text-center text-balance display-font font-semibold text-md md:text-xl text-medium-grey">
          En nuestra plataforma digital podrás cargar de manera masiva tus
          facturas, con cotización en línea clara y transparente.
        </p>
        <article className="w-full md:w-11/12 mx-auto md:mr-0 pt-4">
          <div className="flex gap-12 flex-col-reverse items-center justify-between md:flex-row">
            <div className="md:w-1/2 px-4 md:px-0">
              {steps.map((step) => (
                <StepCard
                  key={step.title}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
            <div className="md:w-1/2">
              <Image
                src="/chica-ameba.jpg"
                alt="empresarios"
                width={756}
                height={609}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </article>
      </section>

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
