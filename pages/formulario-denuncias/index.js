import Layout from '@components/Templates/Layout';
import FormLaw from '@components/Molecules/FormLaw';
import Hero from '@components/Molecules/Hero';

const LawForm = () => (
  <Layout
    title="Formulario de denuncias Ley 20.393"
    description="El canal dispuesto a continuación está destinado exclusivamente para recibir información relacionada a la comisión de los delitos establecidos en la Ley N° 20.393, de Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a funcionario público nacional o extranjero; cometido por accionistas, directores, funcionarios o proveedores de ésta institución, en el ejercicio de sus funciones y en beneficio ésta institución."
  >
    <Hero image="contacto" alt="Contacto" />
    <section className="container-flluid">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-6 mb-4">
            <h1 className="display-font fs-1">
              Formulario de denuncias
              {' '}
              <br />
              <span className="text-soft-blue">Ley Nº 20.393</span>
            </h1>
            <p className="">El canal dispuesto a continuación está destinado exclusivamente para recibir información relacionada a la comisión de los delitos establecidos en la Ley N° 20.393, de Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a funcionario público nacional o extranjero; cometido por accionistas, directores, funcionarios o proveedores de ésta institución, en el ejercicio de sus funciones y en beneficio ésta institución.</p>
          </div>
          <div className="col-lg-6 pb-5">
            <FormLaw type="Denuncia" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default LawForm;
