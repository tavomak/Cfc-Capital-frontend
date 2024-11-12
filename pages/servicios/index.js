import { useRouter } from 'next/router';
import { getServices, formatServices } from '@/utils';

import Layout from '@/components/Templates/Layout';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import StaticHero from '@/components/Molecules/StaticHero';

const Services = ({ data }) => {
  const router = useRouter();
  const handleClick = (e, item) => {
    e.preventDefault();
    router.push(`/servicios/${item.slug}`);
  };
  return (
    <Layout
      title="Servicios"
      description="Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio."
    >
      <StaticHero image="servicios" alt="Servicios" />

      <section className="py-1">
        <ZigZagSection
          itemList={formatServices(data, {
            imageKey: 'cardImage',
            colorPrefix: 'bg-',
          })}
          sectionClassName="container md:px-4 mx-auto"
          itemClassName="my-20 md:rounded-3xl shadow-lg overflow-hidden"
          onClick={handleClick}
        />
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
