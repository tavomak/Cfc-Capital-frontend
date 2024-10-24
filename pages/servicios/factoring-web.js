import Layout from '@/components/Templates/Layout';
import StaticHero from '@/components/Molecules/StaticHero';

const FactoringWeb = () => {
  return (
    <Layout
      title="Servicios"
      description="Nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio."
    >
      <StaticHero image="factoring" alt="Servicios" />
    </Layout>
  );
};

export default FactoringWeb;
