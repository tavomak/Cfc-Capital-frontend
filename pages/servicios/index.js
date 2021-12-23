import { useState } from 'react'
import Image from 'next/image'
import router from 'next/router'

import Layout from 'components/Templates/Layout';
import Button from 'components/Atoms/Button';
import Modal from 'components/Templates/Modal'
import styles from './styles.module.scss';

const Services = () => {
  const services = [
    {
      icon: 'factoring',
      text: 'Si cuentas con facturas sin pagar, falta para que venza el plazo y necesitas liquidez inmediata, lo primero que debes hacer es cedernos tus facturas y nosotros te anticipamos ese dinero. Además, nos encargamos de cobrar las facturas pendientes a las empresas, para que solo te concentres en tu negocio.',
      title: 'Factoring',
      detail: () => (
        <>
          <p className="fs-5 font-bold">¿Cómo funciona?</p>
          <ol>
            <li>
              <p>Tienes facturas sin pagar, falta para que venza el plazo, pero necesitas liquidez inmediata.</p>
            </li>
            <li>
              <p>Nos entregas tus facturas cediendo las mismas  y nosotros te anticipamos ese dinero con una tasa de descuento.</p>
            </li>
            <li>
              <p>Nosotros nos encargamos de cobrar las facturas pendientes a las empresas.</p>
            </li>
          </ol>
        </>
      ),
    },
    {
      icon: 'factoring-web',
      text: 'Desarrollamos una nueva plataforma digital donde facilitamos el proceso a nuestros clientes, ya que podrán cargar de manera masiva sus facturas, con cotización en línea, clara y transparente. Solo debes registrarte en nuestro sitio, cargar los DTE en el portal, esperar la cotización y podrás ceder de manera automática todas tus facturas en un solo click.',
      title: 'Factoring Web',
    },
    {
      icon: 'leasing',
      title: 'Leasing',
      text: 'Esta herramienta de financiamiento te permite, mediante un contrato, establecer el arriendo de un bien de capital por un determinado período de tiempo y una vez finalizado el contrato, el bien es devuelto a su propietario.',
      detail: () => (
        <>
          <p className="fs-5 font-bold">¿Cómo funciona? </p>
          <p>CFC adquiere activos fijos (Vehí­culos, maquinarí­as, equipos) por instrucción del cliente-empresa y los pone a disposición de la misma, mediante un contrato de arrendamiento a un plazo determinado con rentas mensuales, siendo esta última una opción de compra del bien para el cliente, la cual una vez pagada implica que CFC le transfiere la propiedad del bien..</p>
        </>
      ),
    },
    {
      icon: 'leaseback',
      title: 'Leaseback',
      text: 'El Leaseback es una operación en donde el propietario de un bien inmueble vende éste a una entidad financiera y a su vez, suscribe un contrato de arrendamiento. De esta forma, obtiene liquidez producto de la venta, pero no pierde el uso del inmueble. Al momento de finalizar el contrato y ejercer la opción de compra, el activo vuelve a ser parte de su propiedad.',
      detail: () => (
        <>
          <p className="fs-5 font-bold">¿Cómo funciona?</p>
          <p>Esta operación se realiza mediante un contrato de compraventa entre CFC y la empresa-cliente. </p>
          <ol>
            <li>
              <p>CFC le compra a su cliente alguno de sus activos fijos, inmueble, vehículo, etc., pagando a la empresa-cliente según el valor pactado.</p>
            </li>
            <li>
              <p>Al final del periodo de este arriendo,  la empresa tiene una opción de compra, la cual,  previo pago, permite el retorno del bien a la propiedad de la empresa-cliente.</p>
            </li>
          </ol>
        </>
      ),
    }
  ]
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