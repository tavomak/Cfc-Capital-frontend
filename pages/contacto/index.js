import Layout from '@/components/Templates/Layout';
import FormContact from '@/components/Molecules/Forms/FormContact';
import Image from 'next/image';
import LayerHero from '@/components/Molecules/LayerHero';
import Content from '@/components/Molecules/CardContentTitle';
import Accordion from '@/components/Molecules/Accordion';

const data = [
  {
    title: '¿Cuáles son los requisitos?',
    text: 'Te apoyamos desde la factura N° 1. ¿Tienes dicom? No te preocupes. Envíanos tu carpeta tributaria y factura emitida, nosotros nos encargamos del resto.',
  },
  {
    title: '¿Cuáles son los tiempos de respuesta?',
    text: 'En CFC Capital puedes abrir una línea, realizar tu primera operación en sólo horas y sin papeleos.',
  },
  {
    title: '¿Tengo Dicom, puedo operar?',
    text: 'No te preocupes. Envíanos tu carpeta tributaria y factura emitida, nosotros nos encargamos del resto.',
  },
];
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

    <section className="lg:bg-gradient-to-l from-white to-light-grey">
      <article className=" container mx-auto md:px-4 py-12 ">
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
    <section className="container mx-auto my-12 md:px-4">
      <h2 className="display-font text-4xl mb-8 font-bold text-center text-dark-blue">
        Preguntas Frecuentes
      </h2>
      <Accordion list={data} />
    </section>
  </Layout>
);

export default Contacto;
