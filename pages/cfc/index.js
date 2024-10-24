import Link from 'next/link';
import Image from 'next/image';
import { gerencia, team, directory } from '@utils/constants/index';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { shimmer, toBase64 } from '@utils/index';

import Layout from '@components/Templates/Layout';
import VisibilitySensor from 'react-visibility-sensor';
import Carousel from 'react-elastic-carousel';
import Divider from '@components/Atoms/Divider';
import Icon from '@components/Atoms/Icon';
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
    number: 591,
    prev: 'US $',
    next: 'MM',
    image: 'money',
  },
];
const newsBreakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Cfc = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'deevr9k54',
    },
  });

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video('video-nosotros-CFC-hd_quu4iy_qdqwzy');

  return (
    <Layout
      title="Somos CFC"
      description="Somos una empresa de servicios financieros, presente en el mercado desde el año 2003"
    >
      <section className="container">
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
          <div className="row justify-content-center py-5">
            {highlights.map((item) => (
              <div className="col-lg-4 text-center" key={item.name}>
                <span className={`${styles.card} bg-dark-blue mx-5`}>
                  <span className={styles.cardImage}>
                    <Icon bgColor="bg-dark-blue" icon={item.image} />
                  </span>
                </span>
                <h2 className="display-font py-4 text-dark-blue text-center fs-3">
                  {item.prev && <span>{item.prev}</span>}
                  {item.number && (
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <span>
                          {item.number}
                          <span className="text-white">
                            {isVisible ? ' ' : '.'}
                          </span>
                        </span>
                      )}
                    </VisibilitySensor>
                  )}
                  {item.next && <span>{item.next}</span>}
                </h2>
              </div>
            ))}
          </div>
          <div className="row pb-5">
            <div className="col text-center">
              <Link href="/memorias">
                <a href="!#" className="btn btn-primary">
                  Ver memorias
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {gerencia
        && gerencia.map((item, index) => (
          <section
            id="gerencia"
            className={`container-fluid py-5 ${
              (index + 1) % 2 === 0
                ? 'bg-primary-gradient-grey'
                : 'bg-secondary-gradient-grey'
            }`}
            key={item.name}
          >
            <div className="container">
              <div className="row align-items-center">
                <div
                  className={`col-md-6 ${
                    (index + 1) % 2 === 0 ? 'order-md-2' : 'order-md-1'
                  }`}
                >
                  <div className="d-none d-md-block">
                    <Image
                      src={item.img}
                      alt={item.name}
                      objectFit="contain"
                      width={1205}
                      height={740}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475),
                      )}`}
                    />
                  </div>
                  <div className="d-md-none">
                    <Image
                      src={item.img_mobile}
                      alt={item.name}
                      objectFit="contain"
                      width={1000}
                      height={1371}
                      layout="responsive"
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(700, 475),
                      )}`}
                    />
                  </div>
                </div>
                <div
                  className={`col-md-6 ${
                    (index + 1) % 2 === 0 ? 'order-md-1' : 'order-md-2'
                  }`}
                >
                  <div className={`${styles.itemText} ps-md-5`}>
                    <p className="display-font text-dark-blue mb-0 fs-1">
                      <strong>{item.name}</strong>
                    </p>
                    <Divider theme="dark" className="py-2" />
                    <p className="mb-0 text-dark-blue fs-3">
                      <small>{item.cargo}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-md-8">
              <div className="text-center">
                <h2 className="text-dark-blue fw-bolder">Equipo Comercial</h2>
                <p className="text-dark-blue">
                  <span className="fw-bolder">Más que ejecutivos</span>
                  {' '}
                  somos un
                  equipo humano dispuestos a ser parte de tu empresa.
                  <br />
                  {' '}
                  Porque sabemos que eres el motor de la economía.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            {team
              && team.length
              && team.map((item) => (
                <div key={item.name} className="col-lg-4 mb-4">
                  <div className="px-md-5 mb-3">
                    <div className="team-img">
                      <Image
                        src={item.img}
                        alt={item.name}
                        objectFit="contain"
                        width={1000}
                        height={1361}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                          shimmer(700, 475),
                        )}`}
                      />
                    </div>
                  </div>
                  <div className={`${styles.itemText} text-center`}>
                    <p className="display-font text-soft-purple mb-0 fs-5">
                      <strong>{item.name}</strong>
                    </p>
                    <span className={styles.divider} />
                    <p className="text-dark-blue mb-0">
                      <small>{item.cargo}</small>
                    </p>
                    <div className="text-center">
                      <a
                        href={`mailto:${item.email}`}
                        className="text-soft-purple"
                        target="_blanc"
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="container-fluid bg-soft-blue py-lg-5">
        <div className="row justify-content-center py-5 my-lg-4">
          <div className="col-md-8">
            <div className="text-center">
              <h2 className="text-white fw-bolder">Directorio</h2>
            </div>
          </div>
        </div>

        <article className="container mb-5">
          {directory && directory.length && (
            <Carousel breakPoints={newsBreakPoints}>
              {directory.map((item) => (
                <div
                  key={item.name}
                  className="p-md-4 w-100 mx-md-3 bg-soft-blue"
                  style={{ height: '100%', borderRadius: 0 }}
                >
                  <div className={`${styles.itemText} text-center`}>
                    <p className="display-font text-white mb-0 fs-4">
                      <strong>{item.name}</strong>
                    </p>
                    <span className={styles.divider} />
                    <p className="mb-0 text-dark-blue">
                      <small>{item.cargo}</small>
                    </p>
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </article>
      </section>
    </Layout>
  );
};

export default Cfc;
