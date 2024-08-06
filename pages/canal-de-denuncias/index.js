import Layout from '@components/Templates/Layout';
import Hero from '@components/Molecules/Hero';
import Stepper from '@components/Templates/Stepper';

const LawForm = () => (
  <Layout
    title="Canal de denuncias"
    description="Este es el canal de denuncias dispuesto exclusivamente para recibir denuncias por Responsabilidad Penal de la Persona Jurídica Ley 20.393 y Denuncias asociadas a Ley 21.643 (Ley Karin)"
  >
    <Hero image="ley" alt="Canal de denuncias" />
    <section className="container-flluid">
      <div className="container">
        <div className="row pt-5 align-items-center">
          <div className="col-lg-6 mb-4">
            <div className="pe-lg-4">
              <h1 className="display-font fs-1">
                Canal de Denuncias
              </h1>
              <p className="fw-bold">
                Este es el canal de denuncias dispuesto exclusivamente para recibir:
              </p>
              <ol>
                <li>
                  Denuncias por Responsabilidad Penal de la Persona Jurídica
                  <span className="text-soft-blue"> Ley 20.393</span>
                </li>
                <li>
                  Denuncias asociadas a
                  <span className="text-soft-blue"> Ley 21.643 (Ley Karin)</span>
                </li>
              </ol>
              <p className="">La comisión de los delitos establecidos en la Ley N° 20.393, de Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a funcionario público nacional o extranjero; ejercicio de sus funciones y en beneficio de esta institución.</p>
              <p className="">La Ley 21.643 acoge los eventos relacionados con el Abuso, Laboral, Acoso Sexual o de Violencia en el Trabajo, dentro de los colaboradores y nuestros proveedores y asesores externos</p>
              <p className="">
                Para nuestra compañía, son importantes los valores con los que desarrolla sus
                {' '}
                actividades. Por ello, con el objeto de mantener y proteger los más altos
                {' '}
                estándares de ética en las relaciones humanas, en los negocios e integridad
                {' '}
                en todo tipo de transacciones e interacciones, es que la empresa ha implementado
                {' '}
                un canal de comunicación adicional a los ya existentes (Canal de Denuncias) y que
                {' '}
                es de carácter con la empresa y que tenga información de alguna actividad
                {' '}
                desarrollada por la empresa o algún colaborador, proveedor de la misma, que
                {' '}
                pudiese implicar una violación a nuestros valores, leyes, normativa, códigos,
                {' '}
                reglamentos o políticas internas, y principios éticos en general.
              </p>
              <p>
                <strong className="fw-bold display-font">
                  Agradecemos su compromiso y cooperación para hacer de nuestra empresa,
                  {' '}
                  una organización cada día mejor.
                </strong>
              </p>
            </div>
          </div>
          <div className="col-lg-6 pb-5">
            <Stepper />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default LawForm;
