import { useState } from 'react';
import Image from 'next/image';
import { useCfcContext } from '@context/useCfcContext';
import { gerencia, team, directory } from '@data/index';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import Layout from '@components/Templates/Layout';
import Modal from '@components/Templates/Modal';
import VideoIframe from '@components/Molecules/VideoIframe';
import RowTextImage from '@components/Molecules/RowTextImage';
import ExperienceSection from '@components/Molecules/ExperienceSection';
import styles from './styles.module.scss';

const Cfc = () => {
  const { cfcUserData } = useCfcContext();
  const [modal, setModal] = useState(false);

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'deevr9k54',
    },
  });

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video('video-nosotros-CFC-hd_quu4iy');

  return (
    <Layout
      title="Somos CFC"
      description="Somos una empresa de servicios financieros, presente en el mercado desde el año 2003"
    >
      <section className="container-fluid">
        <div className="row">
          <div className={`col-12 ${styles.video}`}>
            <AdvancedVideo
              cldVid={myVideo}
              autoPlay
              controls
              loop
              muted
              playsInline
              poster="/banner-factoring.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-lg-5 bg-top-right-shape">
        <div className="container pt-lg-5">
          <div className="row align-items-center text-center text-lg-start">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h3 className="text-dark-blue fw-bolder fs-2">
                CFC CAPITAL
              </h3>
              <p>
                Ofrecemos a las empresas y pymes soluciones para transformar las cuentas por cobrar
                {' '}
                en dinero efectivo de inmediato o para la adquisición de activos productivos.
              </p>
            </div>
            <div className="col-md-8">
              <Image
                src="/cfc-about.png"
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

      <ExperienceSection shape="top-left" />
      <section className="py-5 bg-mask">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-8">
              <h2 className="text-center text-dark-blue fw-bolder">
                Una sólida estructura profesional
              </h2>
              <p className="text-center">
                Contamos con un subgerente de riesgo, un subgerente de operaciones y con equipo
                {' '}
                capacitado de primer nivel, lo cual permite que tengamos una posición financiera
                {' '}
                sólida y robusta en el mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="row py-5">
          <div className="col-12">
            <h2 className="display-font text-center text-dark-blue">
              <b className="fs-1">
                Gerencia
              </b>
            </h2>
          </div>
        </div>
        <div className="row justify-content-around">
          {gerencia && gerencia.map((item) => (
            <div className="col-md-5" key={item.name}>
              <div className={`card shadow p-4 ${styles.card}`} style={{ height: '100%', borderRadius: 15 }}>
                <div className={`${styles.itemImage}`}>
                  <div className={`shadow ${styles.itemImageBg}`}>
                    <Image
                      src={item.img}
                      alt={item.name}
                      objectFit="contain"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className={`${styles.itemText} text-center`}>
                  <p className="display-font text-soft-purple mb-0 fs-5">
                    <strong>
                      {item.name}
                    </strong>
                  </p>
                  <span className={styles.divider} />
                  <p className="mb-0 text-soft-blue">
                    <small>
                      {item.cargo}
                    </small>
                  </p>
                  <div className="text-center">
                    <p><small>{item.desc}</small></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center py-4">
          <div className="col-lg-7 mt-5">
            <h5>
              Estos dos eventos sumados al esfuerzo, presencia estrecha del directorio y apoyo
              {' '}
              constante de sus socios hacen que CFC Capital tenga un salto importante en todos
              {' '}
              los aspectos llevando a la empresa a pasar de un stock de colocaciones de MM$ 4.600
              {' '}
              a MM$ 12.400 en el año 2022 logrando triplicar el tamaño de la empresa en 3,5 años.
            </h5>
          </div>
        </div>
      </section>

      <section className="py-5 bg-mask">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-8">
              <div className="text-center">
                <h2 className="text-dark-blue fw-bolder">Equipo Comercial</h2>
                <p>
                  <span className="text-dark-blue fw-bolder">Más que ejecutivos</span>
                  {' '}
                  somos un equipo humano dispuestos a ser
                  {' '}
                  parte de tu empresa. Porque sabemos que eres el motor de la economía.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            {team && team.map((item) => (
              <div className="col-md-5 mb-5" key={item.name}>
                <div className={`card shadow p-4 ${styles.card}`} style={{ height: '100%', borderRadius: 15 }}>
                  <div className={`${styles.itemText} text-center`}>
                    <p className="display-font text-soft-purple mb-0 fs-5">
                      <strong>
                        {item.name}
                      </strong>
                    </p>
                    <span className={styles.divider} />
                    <p className="mb-0 text-soft-blue">
                      <small>
                        {item.cargo}
                      </small>
                    </p>
                    <div className="text-center">
                      <p><small>{item.email}</small></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center py-5 my-lg-4">
            <div className="col-md-8">
              <div className="text-center">
                <h2 className="text-dark-blue fw-bolder">Directorio</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            {directory && directory.map((item) => (
              <div className="col-md-5 mb-5" key={item.name}>
                <div className={`card shadow p-4 ${styles.card}`} style={{ height: '100%', borderRadius: 15 }}>
                  <div className={`${styles.itemText} text-center`}>
                    <p className="display-font text-soft-purple mb-0 fs-5">
                      <strong>
                        {item.name}
                      </strong>
                    </p>
                    <span className={styles.divider} />
                    <p className="mb-0 text-soft-blue">
                      <small>
                        {item.cargo}
                      </small>
                    </p>
                    <div className="text-center">
                      <p>
                        <small>
                          <a href={item.linkedin}>Linkedin</a>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RowTextImage
        gradientType="secondary"
        alignType="center"
        title="Presentes en la tercera y cuarta región con agente zonal experto en financiamiento."
        titleColor="dark-blue"
        subtitle="En los rubros Transportes, Minería, Turismo y Servicios de Apoyo."
        imageUrl="/regiones.png"
        imageWidth="1030"
        imageHeight="660"
      />
      <Modal
        showModal={modal}
        onClick={(e) => { e.preventDefault(); setModal(false); }}
        size="xl"
      >
        <VideoIframe url="//player.vimeo.com/video/442189935?autoplay=1&amp;loop=1" />
      </Modal>
    </Layout>
  );
};

export default Cfc;
