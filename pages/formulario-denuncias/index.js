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
            <div className="pe-lg-4">
              <h1 className="display-font fs-1">
                Formulario de denuncias
                {' '}
                <br />
                <span className="text-soft-blue">Ley Nº 20.393</span>
              </h1>
              <p className="">El canal dispuesto a continuación está destinado exclusivamente para recibir información relacionada a la comisión de los delitos establecidos en la Ley N° 20.393, de Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a funcionario público nacional o extranjero; cometido por accionistas, directores, funcionarios o proveedores de ésta institución, en el ejercicio de sus funciones y en beneficio ésta institución.</p>
              <p className="">Para nuestra compañía, son importantes los valores con los que desarrolla sus actividades. Por ello, con el objeto de mantener y proteger los más altos estándares de ética en las relaciones humanas, en los negocios e integridad en todo tipo de transacciones e interacciones, es que la empresa ha implementado un canal de comunicación adicional a los ya existentes (Canal de Denuncias) y que es de carácter confidencial y anónimo si así lo desea, para que toda persona, cualquiera sea la relación con la empresa y que tenga información de alguna actividad desarrollada por la empresa o algún colaborador, proveedor de la misma, que pudiese implicar una violación a nuestros valores, leyes, normativa, códigos, reglamentos o políticas internas, y principios éticos en general.</p>
              <p className="">Agradecemos su compromiso y cooperación para hacer de nuestra empresa, una organización cada día mejor.</p>
            </div>
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
