import { useRouter } from 'next/router';
import Slider from 'react-slick';

import {
  formatServices,
  sliderSettings,
  bannersToShow,
  getPageBySlugAndServices,
} from '@/utils';

import Layout from '@/components/Templates/Layout';
import ZigZagSection from '@/components/Templates/ZigZagSection';
import StaticHero from '@/components/Molecules/StaticHero';

const Home = ({ data }) => {
  const router = useRouter();
  const handleSectionClick = (e, item) => {
    e.preventDefault();
    router.push(`/servicios/${item.slug}`);
  };
  console.log({ data: bannersToShow(data.pages.hero) });
  return (
    <Layout
      title="Financiamos al motor de la economía"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <Slider {...sliderSettings}>
        {bannersToShow(data.pages.hero).map((item) => (
          <StaticHero
            key={item.id}
            heroImages={{
              desktop: item.desktop.url,
              mobile: item.mobile.url,
            }}
          />
        ))}
      </Slider>

      <section className=" mt-20 py-20 bg-ameba-pattern bg-no-repeat bg-cover">
        <div className="container md:px-4 flex items-center mx-auto text-center max-w-lg min-h-64">
          <p className="display-font text-white text-lg">
            Ofrecemos a las empresas y pymes soluciones para transformar las
            cuentas por cobrar en efectivo inmediato o para la adquisición de
            activos productivos
          </p>
        </div>
      </section>

      <article className="pt-12 bg-ameba-pattern-light bg-no-repeat bg-cover">
        <ZigZagSection
          itemList={formatServices(data.services, {
            imageKey: 'cardImage',
            colorPrefix: 'bg-',
          })}
          sectionClassName="container md:px-4 mx-auto"
          itemClassName="my-20 md:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden"
          onClick={handleSectionClick}
        />
      </article>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const { data } = await getPageBySlugAndServices('home');
    return {
      props: {
        data,
      },
      revalidate: 100,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      notFound: true,
    };
  }
}
