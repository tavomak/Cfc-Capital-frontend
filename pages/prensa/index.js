import Layout from 'components/Templates/Layout';
import Image from 'next/image';

const News = () => {
  console.log('News');
  return (
    <Layout
      title="Servicios"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <p>Prensa</p>
    </Layout>
  );
}
 
export default News;