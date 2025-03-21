import { useRouter } from 'next/router';
import { getServices, formatServices } from '@/utils';

import Layout from '@/components/Templates/Layout';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import FormContact from '@/components/Molecules/Forms/FormContact';
import LayerHero from '@/components/Molecules/LayerHero';
import CardContentTitle from '@/components/Molecules/CardContentTitle';

const Services = ({ data }) => {
  const router = useRouter();
  const handleClick = (e, item) => {
    e.preventDefault();
    if (item.slug === 'factoring-web') {
      window.open('/cfc_paso_a_paso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${item.slug}`);
    }
  };
  return (
    <Layout
      title="Servicios"
      description="Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio."
    >
      <LayerHero
        title="Servicios"
        columnContent={
          <CardContentTitle
            content={{
              title: 'Servicios',
              subtitle: 'Financiamos al motor de la economía',
            }}
          />
        }
        imageUrl="/cfc-servicios.png"
        ltr
      />

      <section className="pb-12">
        <ZigZagSection
          itemList={formatServices(data, {
            imageKey: 'cardImage',
            colorPrefix: 'bg-',
          })}
          sectionClassName="container md:px-4 mx-auto"
          itemClassName="my-20 md:rounded-3xl shadow-lg overflow-hidden"
          onClick={handleClick}
        />
        <LayerHero
          columnContent={
            <CardContentTitle
              content={{
                title: 'Contáctanos',
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
};

export default Services;

export async function getStaticProps() {
  try {
    const { data } = await getServices();
    return {
      props: {
        data: data.services,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      notFound: true,
    };
  }
}
