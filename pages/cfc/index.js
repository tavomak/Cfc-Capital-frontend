import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { useCfcContext } from '@context/useCfcContext';
import { gerencia, team, directory } from '@data/index';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

import Layout from '@components/Templates/Layout';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Modal from '@components/Templates/Modal';
import VideoIframe from '@components/Molecules/VideoIframe';
import styles from './styles.module.scss';

const highlights = [
  {
    name: 'Fundada',
    number: 2003,
    prev: 'Fundada en ',
    next: null,
    image: 'star',
  },
  {
    name: 'Clientes',
    number: 4000,
    prev: '+',
    next: ' Clientes',
    image: 'people',
  },
  {
    name: 'Operaciones',
    number: 500,
    prev: 'US $',
    next: 'MM',
    image: 'money',
  },
];

const Cfc = () => {
  const { cfcUserData } = useCfcContext();
  const [modal, setModal] = useState(false);

  console.log({ cfcUserData });

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
              poster="/hero-servicios.jpg"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className="row justify-content-center py-5 my-lg-5">
            {highlights.map((item) => (
              <div className="col-lg-4" key={item.name}>
                <div className={`${styles.card} bg-dark-blue mx-5 p-5`}>
                  <Image
                    src={`/${item.image}.png`}
                    alt={item.name}
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
                <h2 className="display-font py-4 text-dark-blue text-center fs-3">
                  {item.prev && (
                  <span>{item.prev}</span>
                  )}
                  {item.number && (
                  <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                    {({ isVisible }) => (
                      <span>
                        {isVisible ? <CountUp end={item.number} duration={1.75} /> : null}
                        <span className="text-white">{isVisible ? ' ' : '.'}</span>
                      </span>
                    )}
                  </VisibilitySensor>
                  )}
                  {item.next && (
                  <span>{item.next}</span>
                  )}
                </h2>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col text-center">
              <Link
                className="btn btn-primary"
                href="/memorias"
              >
                Ver memorias
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          {gerencia && gerencia.map((item) => (
            <>
              <div className="col-md-6" key={item.name}>
                <Image
                  src={item.img}
                  alt={item.name}
                  objectFit="contain"
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-md-6">
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
                </div>
              </div>
            </>
          ))}
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
