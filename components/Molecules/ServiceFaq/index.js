import Icon from '@components/Atoms/Icon';

const ServiceFaq = ({ services, name }) => (
  <section id={`como-funciona-${name?.toLowerCase()}`}>
    <div className="container py-5">
      <div className="row justify-content-center my-5">
        <div className="col-md-6">
          <h2 className="display-font text-center text-dark-blue fs-2">
            Preguntas Frecuentes
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p className="fs-5 text-center text-soft-purple">Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país</p>
        </div>
      </div>
      <div className="row align-items-stretch justify-content-center py-5 my-lg-5">
        {services && services.map((item, key) => (
          <div className="col-lg-4 mb-5 mb-lg-0" key={item.text}>
            <div className="d-flex text-center" style={{ height: '80%' }}>
              <div className="px-3 px-sm-4 px-md-5 py-5 text-dark-blue bg-grey position-relative">
                <Icon bgColor="bg-dark-blue" absolute icon={`${key}`} />
                <h3 className="mt-5 fs-5 display-font">{item.title}</h3>
                <p className="mt-2">{item.text}</p>
              </div>
            </div>
            <div className="text-center my-5" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceFaq;
