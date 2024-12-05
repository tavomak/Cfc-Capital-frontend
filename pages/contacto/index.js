import Layout from '@/components/Templates/Layout';
import FormContact from '@/components/Molecules/Forms/FormContact';
import Image from 'next/image';
import LayerHero from '@/components/Molecules/LayerHero';
import Content from '@/components/Molecules/Content';

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
            subtitle: 'Somos un gran equipo profesional',
            description: 'Con capacidad para hacer crecer tu negocio.',
          }}
        />
      }
      backgroundColor="#FFFFFF"
      rtl="rtl"
    >
      <div className="w-full h-5/6">
        <Image
          src="/CFC-mujer-contacto.png"
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

    <section className="container mx-auto md:px-4 py-6">
      <h2 className="text-dark-blue display-font text-4xl font-semibold text-center">
        Contacto
      </h2>
      <LayerHero
        columnContent={
          <Content
            content={{
              subtitle:
                'En CFC, ofrecemos productos financieros y apoyamos tus objetivos empresariales.',
              description: '¡Tu éxito es nuestro éxito!',
            }}
          />
        }
        backgroundColor="#FFFFFF"
        rtl="rtl"
      >
        <div className="flex justify-center border-b-4 shadow-md ">
          <div className="w-full p-5">
            <FormContact type="Contacto" />
          </div>
        </div>
      </LayerHero>
    </section>
  </Layout>
);

export default Contacto;
