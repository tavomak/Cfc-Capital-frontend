import Layout from '@components/Templates/Layout';
import FormContact from '@components/Molecules/FormContact';
import Hero from '@components/Molecules/Hero';

const Contacto = () => (
  <Layout
    title="Contacto"
    description="Escríbenos para fomentar tu capacidad de desarrollar negocios que crezcan y se proyecten en el tiempo"
  >
    <Hero image="/hero-contacto.jpg" alt="Contacto" />
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-dark-blue display-font fs-1 font-weight-bold text-center">Contacto</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 bg-grey p-md-5">
          <FormContact type="Contacto" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contacto;
