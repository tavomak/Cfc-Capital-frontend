import Image from 'next/image';
import FormSubscribe from '@components/Molecules/FormSubscribe';
import styles from './styles.module.scss';

const BannerSubscribe = ({ className }) => (
  <section className={`container-fluid py-5 my-5 ${styles.subscribeContainer} ${className}`}>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-lg-4">
          <div className="content-block text-white text-center">
            <div className="p-4">
              <Image src="/logo-white.png" alt="Cfc Capital Logo" width={326} height={64} />
            </div>
            <p>No te pierdas nuestros consejos financieros más valiosos</p>
            <p className="fs-3 fw-bold">¡Suscríbete a nuestro newsletter!</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <Image
            src="/bg-subscribe.png"
            alt="Subscribe"
            width={700}
            height={500}
            layout="responsive"
          />
        </div>
        <div className="col-lg-4">
          <div className="py-5 py-lg-0 text-center">
            <FormSubscribe />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BannerSubscribe;
