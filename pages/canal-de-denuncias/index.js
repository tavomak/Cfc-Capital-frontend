import Layout from '@/components/Templates/Layout';
import StaticHero from '@/components/Molecules/StaticHero';
import Stepper from '@/components/Molecules/Stepper';

const LawForm = () => (
  <Layout
    title="Canal de denuncias"
    description="Este es el canal de denuncias dispuesto exclusivamente para recibir denuncias por Responsabilidad Penal de la Persona Jurídica Ley 20.393 y Denuncias asociadas a Ley 21.643 (Ley Karin)"
  >
    <StaticHero
      image="ley"
      alt="Canal de denuncias"
      heroImages={{
        desktop: '/denuncias.jpg',
        mobile: '/denuncias-mobile.jpg',
      }}
    />
    <section className="container md:px-4 mx-auto py-12 lg:flex">
      <div className="lg:w-1/2 mb-4 px-4">
        <div className="pe-lg-4">
          <h1 className="display-font text-3xl mb-4">Canal de Denuncias</h1>
          <p className="font-bold">
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
          <p className="">
            La comisión de los delitos establecidos en la Ley N° 20.393, de
            Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a
            funcionario público nacional o extranjero; ejercicio de sus
            funciones y en beneficio de esta institución.
          </p>
          <p className="">
            La Ley 21.643 acoge los eventos relacionados con el Abuso Laboral,
            Acoso Sexual o de Violencia en el Trabajo, dentro de los
            colaboradores y nuestros proveedores y asesores externos
          </p>
          <p className="mb-4">
            Para nuestra compañía, son importantes los valores con los que
            desarrolla sus actividades. Por ello, con el objeto de mantener y
            proteger los más altos estándares de ética en las relaciones
            humanas, en los negocios e integridad en todo tipo de transacciones
            e interacciones, es que la empresa ha implementado un canal de
            comunicación adicional a los ya existentes (Canal de Denuncias) y
            que es de carácter confidencial y anónimo, según corresponda para
            toda persona que tenga información de alguna actividad desarrollada
            por la empresa o algún colaborador, proveedor de la misma, que
            pudiese implicar una violación a nuestros valores, leyes, normativa,
            códigos,reglamentos o políticas internas, y principios éticos en
            general.
          </p>
          <p>
            <strong className="font-bold display-font">
              Agradecemos su compromiso y cooperación para hacer de nuestra
              empresa, una organización cada día mejor.
            </strong>
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 pb-5 px-4">
        <Stepper />
      </div>
    </section>
  </Layout>
);

export default LawForm;
