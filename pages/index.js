import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
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
import BlogCard from '@/components/Templates/BlogCard';
import Button from '@/components/Atoms/Button';
import StepCard from '@/components/Molecules/StepCard';
import StarIcon from '@/components/Atoms/StarIcon';
import ClientsIcon from '@/components/Atoms/ClientsIcon';
import DolarIcon from '@/components/Atoms/DolarIcon';
import Content from '@/components/Molecules/CardContentTitle';
import Card from '@/components/Atoms/Card';

const iconsMapping = {
  star: <StarIcon />,
  people: <ClientsIcon />,
  money: <DolarIcon />,
};

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

const Home = ({ data }) => {
  const router = useRouter();
  const handleSectionClick = (e, item) => {
    e.preventDefault();
    if (item.slug === 'factoring-web') {
      window.open('/cfc_paso_a_paso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${item.slug}`);
    }
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
        <article className="container items-center justify-between mx-auto lg:flex lg:py-20">
          <div className="relative mx-auto mb-6 lg:w-1/2 lg:mb-0">
            <figure className="relative">
              <Image
                src="/edificio-cfc.png"
                alt="edificio cfc"
                width={1080}
                height={1658}
                className="w-2/3 mr-auto sm:mx-auto lg:w-5/6"
              />
              <figcaption className="absolute right-0 w-1/3 bottom-1/2 sm:bottom-14 sm:right-8">
                <p className="text-xs font-bold text-balance display-font text-dark-grey">
                  Estamos ubicados en
                  <br />
                  Av. El Bosque 92, Las Condes.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="px-4 lg:w-1/2 md:px-10">
            <h1 className="text-base font-bold md:text-3xl display-font text-blue">
              En CFC Capital, desde el 2003, nos hemos dedicado a ser más que un
              proveedor de servicios financieros.
            </h1>
            <p className="my-5 text-xs font-semibold display-font md:text-2xl">
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
        <p className="w-3/4 mx-auto font-bold text-center text-white lg:w-2/5 display-font text-md md:text-lg">
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
        <h2 className="w-full mx-auto mb-8 text-2xl font-bold text-center lg:w-1/2 text-balance display-font md:text-4xl text-dark-blue">
          Tenemos la experiencia para enfrentar el futuro
        </h2>
        <article className="md:flex">
          {data.pages.highlights.map((item) => (
            <Card
              key={item.title}
              containerClassName="w-3/4 sm:w-full mx-auto px-4 py-4 md:py-0"
              cardClassName="px-4 py-4 sm:py-12 shadow-lg"
            >
              <StepCard
                name={item.title}
                icon={iconsMapping[item.icon]}
                description={item.description}
              />
            </Card>
          ))}
        </article>
      </section>

      <section className="pt-12 text-white bg-gradient-to-r from-dark-blue to-purple">
        <article className="container mx-auto">
          <div className="md:flex">
            <div className="flex flex-col justify-center gap-6 px-4 md:w-3/6 xl:w-1/3">
              <h2 className="w-full text-2xl font-bold display-font lg:text-4xl">
                Creando capacidad de crecer.
              </h2>
              <p className="w-5/6 text-sm lg:font-semibold md:w-full display-font md:text-lg">
                Fomentamos tu capacidad de desarrollar negocios que crezcan, se
                proyecten en el tiempo y aporten al país.
              </p>
              <Link href="/contacto" rel="noopener noreferrer">
                <Button className="mb-6 btn">Escríbenos</Button>
              </Link>
            </div>
            <div className="mt-auto md:w-4/6 xl:w-2/3">
              <Image
                src="/empresarios-ameba.png"
                alt="empresarios"
                width={968}
                height={606}
                className="object-cover h-full aspect-square md:aspect-auto"
              />
            </div>
          </div>
        </article>
      </section>

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
