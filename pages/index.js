import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
/* import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen'; */
import {
  formatServices,
  sliderSettings,
  bannersToShow,
  getPageBySlugAndServices,
  mediaLogos,
  steps,
  highlights,
} from '@/utils';

import Layout from '@/components/Templates/Layout';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import StaticHero from '@/components/Molecules/StaticHero';
import LayerHero from '@/components/Molecules/LayerHero';
import MediaSection from '@/components/Templates/MediaSection';
import SubscribeSection from '@/components/Templates/SubscribeSection';
import BlogCard from '@/components/Templates/BlogCard';
import Button from '@/components/Atoms/Button';
import StepCard from '@/components/Molecules/StepCard';
import StarIcon from '@/components/Atoms/StarIcon';
import ClientsIcon from '@/components/Atoms/ClientsIcon';
import DolarIcon from '@/components/Atoms/DolarIcon';
import Content from '@/components/Molecules/CardContentTitle';

const iconsMapping = {
  star: <StarIcon />,
  people: <ClientsIcon />,
  money: <DolarIcon />,
};
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

/* function getVideoTransformationsWithReactVideo() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'deevr9k54',
    },
  });

  const myVideo = cld.video('CFC-video-home_dzdgeq').quality('auto');

  return myVideo;
} */

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
          item.subtitle ? (
            <LayerHero
              key={item.id}
              title={item.title}
              columnContent={<Content content={item} />}
              subtitle={item.subtitle}
              backgroundImage={item?.backgroundImage?.url}
              backgroundColor={item?.backgroundColor[0]?.hex}
              rtl={item.rtl}
            >
              <div className="w-full h-5/6">
                <Image
                  src={item.frontImage.url}
                  width={750}
                  height={580}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'bottom',
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

      <section className="mt-20 lg:bg-gradient-to-r from-white to-light-grey">
        <article className="container mx-auto lg:flex items-center justify-between px-4 lg:py-20">
          <div className="lg:w-1/2 mx-auto mb-6 lg:mb-0">
            <Image
              src="/edificio-cfc.png"
              alt="edificio cfc"
              width={1080}
              height={1658}
              className="w-1/2 mx-auto lg:w-5/6"
            />
            {/*           <AdvancedVideo
            cldVid={getVideoTransformationsWithReactVideo()}
            autoPlay
            loop
            muted
            playsInline
            poster="/hombre-ameba.png" 
          /> */}
          </div>
          <div className="lg:w-1/2 md:px-10">
            <h1 className="text-3xl font-semibold display-font text-blue">
              En CFC Capital, desde el 2003, nos hemos dedicado a ser más que un
              proveedor de servicios financieros
            </h1>
            <p className="my-5">
              Somos parte de tu equipo. Trabajamos junto a empresas y PYMES,
              ofreciendo soluciones personalizadas. Entendemos tus desafíos y
              metas, y estamos aquí para acompañarte en cada paso.
            </p>
          </div>
        </article>
      </section>

      <section className="pt-12 bg-no-repeat bg-cover bg-ameba-pattern-light">
        <h2 className="mb-8 text-2xl font-bold text-center text-dark-blue display-font md:text-4xl">
          Servicios
        </h2>
        <ZigZagSection
          itemList={formatServices(data.services, {
            imageKey: 'cardImage',
            colorPrefix: 'bg-',
          })}
          sectionClassName="container md:px-4 mx-auto"
          itemClassName="my-20 md:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden"
          onClick={handleSectionClick}
        />
      </section>

      <section className="pt-8 bg-gradient-to-r from-medium-blue to-soft-blue">
        <h2 className="mb-8 text-2xl font-bold text-center text-white display-font md:text-4xl">
          Educación Financiera
        </h2>
        <p className="w-3/4 mx-auto font-medium text-center text-white md:w-2/5 display-font text-md md:text-xl">
          Te presentamos nuestra plataforma de recursos y artículos de interés
          en el desarrollo y crecimiento financiero.
        </p>
        {data.pages.posts?.map((post) => (
          <BlogCard
            key={post.title}
            imageUrl={post.coverImage.url}
            title={post.title}
            description={post.excerpt}
            slug={post.slug}
          />
        ))}
      </section>

      <section className="container max-w-5xl py-10 mx-auto my-10 md:px-4">
        <h2 className="mb-8 text-2xl font-bold text-center text-balance display-font md:text-4xl text-blue">
          Tenemos la experiencia para enfrentar el futuro
        </h2>
        <article className="md:flex">
          {highlights.map((item) => (
            <StepCard
              key={item.title}
              name={item.title}
              icon={iconsMapping[item.icon]}
              description={item.description}
            />
          ))}
        </article>
      </section>

      <section className="pt-12 text-white bg-gradient-to-r from-dark-blue to-purple">
        <article className="container px-4 mx-auto">
          <div className="md:flex">
            <div className="flex flex-col justify-center gap-6 md:w-3/6 xl:w-1/3">
              <h2 className="w-3/4 text-2xl text-left font-bold text-white md:mx-0 display-font md:text-left lg:text-4xl">
                Creando capacidad de crecer
              </h2>
              <p className="w-5/6 text-sm text-left font-medium text-white sm:w-3/4 md:mx-0 text-wrap display-font lg:text-lg">
                Fomentamos tu capacidad de desarrollar negocios que crezcan, se
                proyecten en el tiempo y aporten al país.
              </p>
              <Link href="/contacto" rel="noopener noreferrer">
                <Button className="btn mb-12">Escríbenos</Button>
              </Link>
            </div>
            <div className="md:w-4/6 xl:w-2/3 mt-auto">
              <Image
                src="/empresarios-ameba.png"
                alt="empresarios"
                width={968}
                height={606}
              />
            </div>
          </div>
        </article>
      </section>

      <SubscribeSection />

      <section className="pt-8">
        <h2 className="mb-8 text-2xl font-bold text-center display-font md:text-4xl text-medium-blue">
          Factoring web
        </h2>
        <p className="w-3/4 max-w-3xl mx-auto font-semibold text-center text-balance display-font text-md md:text-xl text-medium-grey">
          En nuestra plataforma digital podrás cargar de manera masiva tus
          facturas, con cotización en línea clara y transparente.
        </p>
        <article className="container pt-10 mx-auto">
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            <div className="md:w-1/2 xl:w-1/3">
              {steps.map((step, index) => (
                <div
                  className="flex items-center p-4 mb-6 bg-white rounded-xl shadow-lg"
                  key={step.title}
                >
                  <div className="display-font flex-shrink-0 flex items-center justify-center w-16 h-16 mr-4 text-3xl font-bold text-medium-blue rounded-full border-medium-blue border-solid circle-width">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="display-font text-lg font-semibold text-medium-blue mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-medium-grey">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2">
              <Image
                src="/chica-ameba.png"
                alt="empresarios"
                width={756}
                height={609}
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
