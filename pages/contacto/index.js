import Layout from '@/components/Templates/Layout';
import StaticHero from '@/components/Molecules/StaticHero';
import FormContact from '@/components/Molecules/Forms/FormContact';

const Contacto = () => (
  <Layout
    title="Contacto"
    description="Escríbenos para fomentar tu capacidad de desarrollar negocios que crezcan y se proyecten en el tiempo"
  >
    <StaticHero image="contacto" alt="Contacto" />
    <section className="container mx-auto md:px-4 py-5">
      <h2 className="text-dark-blue display-font text-4xl font-semibold text-center">
        Contacto
      </h2>
      <div className="flex justify-center">
        <div className="w-full lg:w-6/12 p-5">
          <FormContact type="Contacto" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contacto;
