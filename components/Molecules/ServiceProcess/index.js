import Button from '@components/Atoms/Button';
import styles from './styles.module.scss';

const ServiceProcess = ({ services, name, onClick }) => (
  <section className="bg-soft-blue">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="display-font text-center text-white fs-1">
            El proceso de
            {' '}
            {name}
          </h2>
        </div>
      </div>
      <div className="row align-items-stretch justify-content-center py-5 my-lg-5">
        {services && services.map((item, key) => (
          <div className="col-lg-4 mb-5 mb-lg-0" key={item.description}>
            <div className="px-3 px-sm-4 px-md-5 py-5 text-center text-white">
              <span className={`text-dark-blue ${styles.ball}`}>
                <span className={`${styles.number} fs-3`}>
                  {key + 1}
                </span>
              </span>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col text-center">
          <Button
            text="Solicitar Información"
            className="btn btn-complementary px-5 py-3"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ServiceProcess;
