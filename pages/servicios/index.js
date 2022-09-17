import { useState } from 'react'
import Image from 'next/image'
import router from 'next/router'
import { services } from 'data'

import Layout from 'components/Templates/Layout';
import Button from 'components/Atoms/Button';
import Modal from 'components/Templates/Modal'
import styles from './styles.module.scss';

const Services = () => {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(null);
  const handleClick = (e, text) => {
    e.preventDefault();
    if(text === 'factoring-web') {
      window.open ('/CFC-PasoaPaso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${text}`)
    }
  };
  const handleClickClose = (e) => {
    e.preventDefault();
    setModal(false);
    setTimeout(() => {
      setModalText('');
    }, 500);
  }
  return (
    <Layout
      title="Servicios"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
      bgImage="fondo-servicios.svg"
    >
      <section className="container mb-md-5 py-5">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className={`display-font text-white ${styles.primaryTitle}`}>Financiamos al <span className={styles.primaryTitleSpan}>motor</span> de la economía</h1>
          </div>
        </div>
        <div className="my-md-5 pt-md-5" />
      </section>

      <section className="container mt-md-5 pt-md-5">
          {services.map((item, key) => (
            <div className="row py-md-5" key={item.title}>
              <div className={`col-md-6 ${key%2 == 0 ? 'order-lg-2' : 'order-lg-1'}`}>
                <div className="px-4">
                  <Image
                    src={`/${item.icon}-service.png`}
                    alt="Cfc Capital Logo"
                    width={1}
                    height={1}
                    layout="responsive"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={`/${item.icon}-service.png`}
                  />
                </div>
              </div>
              <div className={`col-md-6 d-flex flex-column ${key%2 == 0 ? 'order-lg-1' : 'order-lg-2'}`}>
                <div className="d-flex align-items-center service-title">
                  <div className="icon me-4">
                    <Image
                      src={`/${item.icon}-purple.png`}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  </div>
                  <h2 className={`text-soft-purple ${styles.serviceTitle}`}>{item.title}</h2>
                </div>
                <div className="py-4">
                  <p className="fs-5">{item.text}</p>
                </div>
                <div className="button mt-auto mb-5">
                  <Button
                    className="btn btn-secondary mt-4 text-uppercase py-2 px-4 fs-5"
                    text="¿como funciona?"
                    onClick={(e) => handleClick(e, item.icon)}
                  />
                </div>
              </div>
            </div>
          ))}
      </section>
      <Modal
        bgColor="bg-dark-blue"
        onClick={handleClickClose}
        showModal={modal}
        size="lg"
      >
        {modalText}
      </Modal>
    </Layout>
  );
}
 
export default Services;