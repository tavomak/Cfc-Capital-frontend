import { useState } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/Templates/FadeInSection';

import Layout from '@/components/Templates/Layout';
import LayerHero from '@/components/Molecules/LayerHero';
import Card from '@/components/Atoms/Card';
import CardContentTitle from '@/components/Molecules/CardContentTitle';
import StepCard from '@/components/Molecules/StepCard';
import FormGetInfo from '@/components/Molecules/Forms/FormContact';
import ProductSection from '@/components/Templates/ProductSection';
import Modal from '@/components/Templates/Modal';
import { products, attributes } from '@/utils';

const ProductosFactoring = () => {
  const [modal, setModal] = useState(false);
  const [service, setService] = useState(null);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <Layout
      title="Servicios Factoring"
      description="Soluciones de factoring diseñadas para proveedores mineros, emprendedores y empresas del Mercado Público. Aprobación ágil, tasas garantizadas y acompañamiento experto."
    >
      <section className="md:py-20">
        <LayerHero
          columnContent={
            <div className="mr-8">
              <CardContentTitle
                content={{
                  title: 'Factoring CFC Capital',
                  subtitle: '¡Soluciones a tu medida!',
                  description: 'Liquidez para cada industria, sin esperar.',
                  postDescription:
                    'Soluciones de factoring diseñadas para proveedores mineros, emprendedores y empresas del Mercado Público. Aprobación ágil, tasas garantizadas y acompañamiento experto.',
                }}
              />
            </div>
          }
          backgroundImage="/ameba-factoring.png"
          ltr
        >
          <div className="w-full h-5/6">
            <Image
              src="/banner-factoring-nvos.jpg"
              alt="edificio cfc"
              width={1080}
              height={1658}
              priority
              className="w-full md:w-2/3 mr-auto sm:mx-auto lg:w-5/6"
            />
          </div>
        </LayerHero>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-medium-purple display-font mb-10">
          Qué nos hace diferentes
        </h2>
        <article className="gap-4 md:flex">
          {attributes.map((item, index) => (
            <FadeInSection
              as="div"
              key={item.title}
              delay={index / 10}
              className="w-full"
            >
              <Card
                containerClassName="mb-4 md:mb-0 w-full mx-auto h-full"
                cardClassName="p-4 py-10 mx-2 shadow-lg"
              >
                <StepCard
                  icon={
                    <div className="flex">
                      <Image
                        src={`/${item.icon}.svg`}
                        alt={item.title}
                        width={item.width || 60}
                        height={item.height || 60}
                        className="object-contain"
                      />
                    </div>
                  }
                  name={item.title}
                  description={item.description}
                />
              </Card>
            </FadeInSection>
          ))}
        </article>
      </section>

      <section className="container mx-auto px-4 mb-10">
        <h2 className="text-2xl font-bold text-medium-purple display-font mb-10">
          Conoce más de nuestros servicios
        </h2>
        <article className="gap-4 md:flex">
          {products.map((item, index) => (
            <FadeInSection
              as="a"
              delay={index / 10}
              href={`#${item.title.toLowerCase()}`}
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

      {products.map((item, key) => (
        <ProductSection
          key={item.id}
          data={item}
          index={key}
          setService={setService}
          handleClick={handleClick}
        />
      ))}

      <section className="md:pb-20">
        <LayerHero
          title="Con CFC Capital"
          columnContent={
            <CardContentTitle
              content={{
                title: 'Con CFC Capital',
                subtitle: `¡Que el crecimiento 
no tarde en llegar!`,
                description: 'Liquidez para cada infistria, sin esperar.',
              }}
            />
          }
          subtitle="Liquidez para cada infistria, sin esperar."
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
        <FormGetInfo service={service} title={service} />
      </Modal>
    </Layout>
  );
};

export default ProductosFactoring;
