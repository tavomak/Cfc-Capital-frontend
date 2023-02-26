import Image from 'next/image';
import Layout from '@components/Templates/Layout';
import FormContact from '@components/Molecules/FormLaw';

const LawForm = () => (
  <Layout
    title="Formulario de denuncias Ley 20.393"
    description="El canal dispuesto a continuación está destinado exclusivamente para recibir información relacionada a la comisión de los delitos establecidos en la Ley N° 20.393, de Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a funcionario público nacional o extranjero; cometido por accionistas, directores, funcionarios o proveedores de ésta institución, en el ejercicio de sus funciones y en beneficio ésta institución."
  >
    <section className="bg-secondary-gradient">
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-lg-10 mb-4">
            <h1 className="text-dark-blue fw-bolder text-center py-5">
              Formulario de denuncias
              {' '}
              <br />
              <span className="text-soft-blue">Ley Nº 20.393</span>
            </h1>
            <p>
              El canal dispuesto a continuación está destinado exclusivamente para recibir
              {' '}
              información relacionada a la comisión de los delitos establecidos en la Ley
              {' '}
              N° 20.393, de Lavado de Activos, Financiamiento del Terrorismo y/o Cohecho a
              {' '}
              funcionario público nacional o extranjero; cometido por accionistas, directores,
              {' '}
              funcionarios o proveedores de ésta institución, en el ejercicio de sus funciones y
              {' '}
              en beneficio ésta institución.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow px-4">
              <FormContact type="Denuncia" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/curva-blanca.svg"
          alt="wave"
          width={12.40}
          height={3}
          layout="responsive"
        />
      </div>
    </section>
  </Layout>
);

export default LawForm;
