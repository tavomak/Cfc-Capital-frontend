import Image from 'next/image';
import Layout from '@/components/Templates/Layout';
import LayerHero from '@/components/Molecules/LayerHero';
import Card from '@/components/Atoms/Card';
import CardContentTitle from '@/components/Molecules/CardContentTitle';
import StepCard from '@/components/Molecules/StepCard';
import FormGetInfo from '@/components/Molecules/Forms/FormContact';
import ProductSection from '@/components/Templates/ProductSection';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { products, attributes } from '@/utils';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'deevr9k54',
  },
});

const primaryVideo = cld.video('video-nosotros-CFC-hd_quu4iy_qdqwzy');

const ProductosFactoring = () => {
  console.log('Productos Factoring');
  return (
    <Layout>
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
                    'Soluciones de factoring diseñadas para proveedores mineros, emprendedores y empresas del mercado público. Aprobación ágil, tasas garantizadas y acompañamiento experto.',
                }}
              />
            </div>
          }
          backgroundImage="/ameba-factoring.png"
          ltr
        >
          <AdvancedVideo
            cldVid={primaryVideo}
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-servicios.jpg"
          />
        </LayerHero>
      </section>

      <section className="md:py-20 container mx-auto px-4">
        <article className="gap-4 md:flex">
          {products.map((item) => (
            <Card
              containerClassName="mb-4 md:mb-0 w-full mx-auto"
              cardClassName="p-4 py-10 mx-2 shadow-lg"
              key={item.title}
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
          ))}
        </article>
      </section>

      <section className="container mx-auto px-4 pb-6 md:pb-20">
        <article className="gap-4 md:flex">
          {attributes.map((item) => (
            <Card
              containerClassName="mb-4 md:mb-0 w-full mx-auto"
              cardClassName="p-4 py-10 mx-2 shadow-lg"
              key={item.title}
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
          ))}
        </article>
      </section>

      {products.map((item, key) => (
        <ProductSection key={item.id} data={item} index={key} />
      ))}

      <section className="md:pb-20">
        <LayerHero
          title="Con CFC Capital"
          columnContent={
            <CardContentTitle
              content={{
                title: 'Con CFC Capital',
                subtitle: '¡Que el crecimiento no tarde en llegar!',
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
    </Layout>
  );
};

export default ProductosFactoring;
