import Image from 'next/image';

const FactoringWebSection = () => (
  <section className="py-lg-5 bg-top-right-shape">
    <div className="container">
      <div className="row align-items-center text-center text-lg-start">
        <div className="col-md-4 mb-5 mb-lg-0">
          <h3 className="text-dark-blue fw-bolder fs-2">
            Factoring web
          </h3>
          <p>
            Para nuestros clientes
          </p>
          <p>
            <b>
              Deja de coleccionar facturas por cobrar
            </b>
            <br />
            En nuestra plataforma digital podrás cargar de manera masiva tus facturas,
            {' '}
            con cotización en línea clara y transparente.
          </p>
          <a href="/CFC-PasoaPaso.pdf" target="_blank" className="btn btn-primary mt-4 text-uppercase py-2 px-4">
            Saber más
          </a>
        </div>
        <div className="col-md-8">
          <Image
            src="/factoring-web.png"
            alt="Más que ejecutivos"
            layout="responsive"
            objectFit="contain"
            width={600}
            height={500}
          />
        </div>
      </div>
    </div>
  </section>
);

export default FactoringWebSection;
