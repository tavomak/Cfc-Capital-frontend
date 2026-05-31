import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  formatServices,
  getPageBySlugAndServices,
  getServiceBySlug,
  products,
} from '@/utils';

import Layout from '@/components/Templates/Layout';
import Modal from '@/components/Templates/Modal';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import LayerHero from '@/components/Molecules/LayerHero';
import StepCard from '@/components/Molecules/StepCard';
import CardContentTitle from '@/components/Molecules/CardContentTitle';
import Card from '@/components/Atoms/Card';
import FadeInSection from '@/components/Templates/FadeInSection';
import FormGetInfo from '@/components/Molecules/Forms/FormContact';
import Button from '@/components/Atoms/Button';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';

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

const cld = new Cloudinary({
  cloud: {
    cloudName: 'deevr9k54',
  },
});

const primaryVideo = cld.video('Reels-Nvos-Productos-cudrado_cyvykb');
const promoVideo = cld.video('CFC_-_Video_de_presentación_-_web_lbrkbq');

export async function getStaticProps() {
  try {
    const { data } = await getPageBySlugAndServices('home');
    const {
      data: { service },
    } = await getServiceBySlug('factoring');
    return {
      props: {
        data,
        service,
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

const Home = ({ data, service }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
      schema={structuredData}
    >
      <section className="md:py-20">
        <LayerHero
          columnContent={
            <div className="mr-8">
              <CardContentTitle
                content={{
                  subtitle: `Factoring a tu medida, 
respaldo a largo plazo`,
                  description:
                    'Entregamos soluciones financieras ágiles y relaciones de largo plazo para ayudarte a operar con mayor tranquilidad y seguir creciendo.',
                }}
              />
              <div className="md:mx-0 mx-4">
                <Button
                  className="btn btn-primary mt-8 py-2"
                  onClick={() => handleClick()}
                >
                  Hablar con un asesor
                </Button>
              </div>
            </div>
          }
          ltr
        >
          <AdvancedVideo
            cldVid={promoVideo}
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-servicios.jpg"
            controls
            className="aspect-video object-contain w-full h-full shadow-xl rounded-xl"
          />
        </LayerHero>
      </section>

      <section className="md:mb-20 md:pb-10 lg:bg-linear-to-r from-white to-light-grey">
        <article className="md:pt-14 product-article">
          <FadeInSection
            as="div"
            className="container mx-auto md:flex items-center justify-between gap-20"
          >
            <div className="md:w-1/2 order-1 md:order-2">
              <CardContentTitle
                content={{
                  title: 'Factoring CFC Capital',
                  subtitle: '¡Soluciones a tu medida!',
                  description: 'Liquidez para cada industria, sin esperar.',
                  postDescription:
                    'Soluciones de factoring diseñadas para proveedores mineros, emprendedores y empresas del Mercado Público. Aprobación ágil, tasas garantizadas y acompañamiento experto.',
                }}
              />

              <div className="md:mx-0 mx-4">
                <Button
                  className="btn btn-primary my-8 py-2"
                  onClick={() => handleClick()}
                >
                  Hablar con un asesor
                </Button>
              </div>
            </div>
            <div className={`md:w-1/2 order-2 md:order-1`}>
              <FadeInSection as="div" className="lg:pe-20">
                <AdvancedVideo
                  cldVid={primaryVideo}
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/hero-servicios.jpg"
                  className="aspect-square object-contain w-full h-full shadow-xl rounded-xl"
                />
              </FadeInSection>
            </div>
          </FadeInSection>
        </article>
      </section>

      <section className="container mx-auto px-4 my-10 md:my-20">
        <ul className="flex items-center gap-8 mb-10">
          <li>
            <h2 className="text-2xl font-bold text-medium-purple display-font">
              ¡Factoring a tu medida!
            </h2>
            <p>Liquidez para cada industria, sin esperar</p>
          </li>
          <li>
            <Button
              className="btn btn-primary py-2"
              onClick={() => router.push('/servicios/factoring')}
            >
              Saber más
            </Button>
          </li>
        </ul>
        <article className="gap-4 md:flex">
          {products.map((item, index) => (
            <FadeInSection
              as="a"
              delay={index / 10}
              href={`/servicios/factoring/#${item.title.toLowerCase()}`}
              key={item.title}
              className="w-full"
            >
              <Card
                containerClassName="mb-4 md:mb-0 w-full mx-auto h-full"
                cardClassName="p-4 py-10 mx-2 shadow-lg"
              >
                <StepCard
                  icon={
                    <div className="flex items-end min-h-[150px]">
                      <Image
                        src={`/${item.title}-logo.svg`}
                        alt={item.title}
                        width={item.width || 160}
                        height={item.height || 100}
                        className="object-contain"
                      />
                    </div>
                  }
                  description={item.description}
                />
              </Card>
            </FadeInSection>
          ))}
        </article>
      </section>

      <section className="pt-12 bg-no-repeat bg-cover bg-ameba-pattern-light">
        <ZigZagSection
          itemList={formatServices(service.serviceContent, {
            colorKey: 'color',
            descriptionKey: 'content',
          })}
          sectionClassName="container md:px-4 mx-auto"
          itemClassName="my-20 md:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden"
          onClick={() => router.push('/servicios/factoring')}
        />
      </section>

      <FadeInSection className="lg:bg-linear-to-r from-white to-light-grey">
        <article className="container max-w-5xl py-20 mx-auto md:px-4">
          <h2 className="mb-8 text-4xl font-bold text-center display-font text-dark-blue">
            Proceso de {service.title}
          </h2>
          <div className="gap-4 md:flex">
            {service.serviceProcess.map((item, index) => (
              <Card
                key={item.subtitle || index}
                containerClassName="mb-4 md:mb-0 w-3/4 md:w-full mx-auto"
                cardClassName="p-4 py-12 shadow-lg"
              >
                <StepCard
                  name={item.subtitle}
                  icon={
                    <div className="flex items-center justify-center w-20 h-20 text-3xl font-bold rounded-full display-font text-medium-blue border-medium-blue circle-width">
                      {index + 1}
                    </div>
                  }
                  description={item.description}
                />
              </Card>
            ))}
          </div>
        </article>
      </FadeInSection>

      <section className="md:py-20">
        <LayerHero
          title="Con CFC Capital"
          columnContent={
            <CardContentTitle
              content={{
                title: 'Con CFC Capital',
                subtitle: `¡Que el crecimiento, 
no tarde en llegar`,
                description: 'Liquidez para cada industria, sin esperar.',
              }}
            />
          }
          subtitle="Liquidez para cada industria, sin esperar."
          backgroundImage="/ameba-factoring.png"
          ltr
        >
          <Card
            containerClassName="px-4"
            cardClassName="p-4 lg:p-10 lg:mx-10 bg-white"
          >
            <FormGetInfo service="factoring" title="factoring" />
          </Card>
        </LayerHero>
      </section>

      <Modal
        bgColor="bg-white"
        onClick={handleClick}
        showModal={modal}
        size="lg"
      >
        <FormGetInfo service="Factoring" title="Factoring" />
      </Modal>
    </Layout>
  );
};

export default Home;
