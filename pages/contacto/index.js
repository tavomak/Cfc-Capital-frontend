import Layout from '@/components/Templates/Layout';
import FormContact from '@/components/Molecules/Forms/FormContact';
import Image from 'next/image';
import LayerHero from '@/components/Molecules/LayerHero';
import Content from '@/components/Molecules/CardContentTitle';

const Contacto = () => (
  <Layout
    title="Contacto"
    description="Escríbenos para fomentar tu capacidad de desarrollar negocios que crezcan y se proyecten en el tiempo"
  >
    <LayerHero
      columnContent={
        <Content
          content={{
            title: 'Contacto',
            subtitle: 'Somos un gran equipo profesional.',
            description: 'Con capacidad para hacer crecer tu negocio.',
          }}
        />
      }
      backgroundColor="#FFFFFF"
      rtl="rtl"
    >
      <div className="w-full h-5/6">
        <Image
          src="/Fco-Ema-Contacto.png"
          width={750}
          height={580}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom',
          }}
          alt="Contacto"
          priority
        />
      </div>
    </LayerHero>

    <section className="lg:bg-gradient-to-l from-white to-light-grey">
      <article className="container py-12 mx-auto md:px-4">
        <LayerHero
          columnContent={
            <Content
              content={{
                title: 'Contáctanos',
                subtitle:
                  'En CFC, ofrecemos productos financieros y apoyamos tus objetivos empresariales.',
                description: '¡Tu éxito es nuestro éxito!',
              }}
            />
          }
          backgroundColor="transparent"
          rtl="rtl"
        >
          <div className="flex justify-center border-b-4 shadow-md ">
            <div className="w-full p-5">
              <FormContact type="Contacto" />
            </div>
          </div>
        </LayerHero>
      </article>
    </section>
  </Layout>
);

export default Contacto;
