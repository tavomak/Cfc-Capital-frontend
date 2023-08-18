import { getServices } from '@lib/api';

import Layout from '@components/Templates/Layout';
import ServicesInfo from '@components/Molecules/ServicesInfo';
import Hero from '@components/Molecules/Hero';

const Services = ({ data }) => (
  <Layout
    title="Servicios"
    description="Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio."
  >

    <Hero image="servicios" alt="Servicios" />

    <section className="py-1">
      <ServicesInfo services={data} />
    </section>

  </Layout>
);

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
