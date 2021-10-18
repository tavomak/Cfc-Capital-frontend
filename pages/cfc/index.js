import { FaLinkedin } from "react-icons/fa";
import Layout from 'components/Templates/Layout';
import Image from 'next/image';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Slider from "react-slick";
import styles from './styles.module.scss';

const Cfc = () => {
  const highlights = [
    {
      name: 'Fundada',
      number: 2003,
      prev: null,
      next: null,
      image: 'star'
    },
    {
      name: 'Clientes',
      number: 4000,
      prev: '+',
      next: null,
      image: 'people'
    },
    {
      name: 'Operaciones',
      number: 500,
      prev: 'US $',
      next: 'MM',
      image: 'money'
    },
  ];
  
  const gerencia = [
    {
      name: 'Enrique Tenorio Fuentes',
      cargo: 'Gerente General',
      email: 'etenorio@cfccapital.cl',
      linkedin: 'https://www.linkedin.com/in/enrique-tenorio-0b439646/',
      img: 'enrique',
    },
    {
      name: 'Francisco Javier Goycoolea Brucher',
      cargo: 'Gerente Comercial',
      email: 'fgoycoolea@cfccapital.cl',
      linkedin: 'https://www.linkedin.com/in/francisco-javier-goycoolea-brucher-871707142/',
      img: 'francisco',
    },
  ];

  const team = [
    {
      name: 'Laura Ferrada Martínez',
      cargo: 'Ejecutiva Comercial',
      email: 'lferrada@cfccapital.cl',
    },
    {
      name: 'Mario Finschi Herrera',
      cargo: 'Ejecutivo Comercial',
      email: 'mfinschi@cfccapital.cl',
    },
    {
      name: 'Ema Jara Colipi',
      cargo: 'Ejecutiva Comercial',
      email: 'ejara@cfccapital.cl',
    },
    {
      name: 'Evelin Santander Gallardo',
      cargo: 'Ejecutiva Comercial',
      email: 'esantander@cfccapital.cl',
    },
    {
      name: 'Felipe Gutiérrez Carrasco',
      cargo: 'Sub Gerente Comercial',
      email: 'fgutierrez@cfccapital.cl',
    },
  ];

  const directory = [
    {
      name: 'Sergio Silva Alcalde',
      cargo: 'Presidente',
      linkedin: 'https://www.linkedin.com/in/sergio-silva-alcalde-22263b29/',
    },
    {
      name: 'Alejandro Alarcón Pérez',
      cargo: 'Vicepresidente',
      linkedin: 'https://www.linkedin.com/feed/',
    },
    {
      name: 'Felipe Ríos Yrarrazaval',
      cargo: 'Director',
      linkedin: 'https://www.linkedin.com/in/luis-felipe-rios-yrarr%C3%A1zaval-a1189318/',
    },
    {
      name: 'Alejandro Toth Nebel',
      cargo: 'Director',
      linkedin: 'https://www.linkedin.com/in/alejandro-toth-nebel-55562855/',
    },
    {
      name: 'Jorge Narbona Lemus',
      cargo: 'Director',
      linkedin: 'https://www.linkedin.com/in/jorge-narbona-8929b21a/',
    },
  ];

  function SampleNextArrow({className, style, onClick}) {
    return (
      <div
        className={className}
        style={{ ...style, background: "#623482", borderRadius: '55rem', width: 33, height: 30}}
        onClick={onClick}
      />
    );
  };

  function SamplePrevArrow({className, style, onClick}) {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, background: "#623482", borderRadius: '55rem', width: 33, height: 30}}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(.8,0,0.5,1)",
    lazyLoad: 'progressive',
    nextArrow: <SampleNextArrow className="next-arrow-test" />,
    prevArrow: <SamplePrevArrow className="prev-arrow-test"/>,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 3024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
      ]
  };

  return (
    <Layout
      title="Somos CFC"
      description="Somos una empresa de servicios financieros, presente en el mercado desde el año 2003"
    >
      <section className={`position-relative overflow-hidden videoContainer`}>
        <div className="container">
          <div className="row content-wrapper align-items-center position-relative">
            <div className="text-center pt-5">
                <a href="#" className="btn btn-complementary fs-4" data-src="https://player.vimeo.com/video/389778033" data-toggle="modal" data-target="#homeVideo">Ver video</a>
            </div>
          </div>
          <video id="myVideo" loop muted autoPlay className="d-none d-md-block">
              <source src="/cfc_intro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="container-flluid bg-soft-purple">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-6 mb-4">
              <h1 className="text-white display-font fs-2">
                Somos una empresa de <span className="text-soft-blue">servicios financieros,</span> presente en el mercado desde el año 2003
              </h1>
            </div>
            <div className="col-lg-6">
              <p className="text-white">
                Estamos especializados en el segmento de <span className="text-soft-blue">empresas y pymes</span> entregando soluciones a las necesidades de financiamiento de capital de trabajo y de inversión, transformando los flujos por cobrar a plazo, en dinero efectivo de inmediato o bien haciendo posible adquirir activos productivos a las empresas
              </p>
              <a href="#!" className="btn btn-secondary">Memorias</a>
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
      <section className="container-fluid bg-white position-relative" style={{ top: '-4px'}}>
        <div className="container">
          <div className="row">
            {highlights.map((item) => (
              <div className="col-lg-4" key={item.name}>
                <div className={`${styles.card} bg-grey mx-5 p-5`}>
                  <Image 
                    src={`/${item.image}.png`}
                    alt={item.name}
                    width={1}
                    height={1}
                    layout="responsive"
                  />
                </div>
                <div className="text">
                  <div className="text-center text-soft-purple">
                    <h2 className="fs-1 display-font">
                      <div className="d-flex w-100 justify-content-center">
                        {item.prev && (
                          <span>{item.prev}</span>
                        )}
                        {item.number && (
                          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                            {({ isVisible }) => (
                              <div style={{ height: 50 }}>
                                {isVisible ? <CountUp end={item.number} duration={1.75} />  : null}
                                <span className="text-white">{isVisible ? ' ' : '.'}</span>
                              </div>
                            )}
                          </VisibilitySensor>
                        )}
                        {item.next && (
                          <span>{item.next}</span>
                        )}
                      </div>
                    </h2>
                    <p className="text-dark-grey display-font fs-4">
                      <strong>{item.name}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-fluid py-5">
        <div className="row mt-5 py-5">
          <div className="col-12">
            <h2 className="display-font text-center text-dark-blue">
              <b className="fs-1">
                Gerencia
              </b>
            </h2>
          </div>
        </div>
        <div className="row">
          {gerencia && gerencia.map((item, index) => (
            <div className="col-md-6" key={item.name}>
              <div className={`text-center d-lg-flex ${index === 1 ? 'align-items-end' : 'align-items-center'}`}>
                <div className={`${styles.itemImage} ${index === 1 ? 'order-2' : ''}`} >
                  <Image 
                    src={`/${item.img}.jpg`}
                    alt={item.name}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={`${styles.itemText} text-center ${index === 1 ? 'order-1' : ''}`} >
                  <p className="display-font text-soft-purple mb-2">
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
                  <p className="mb-0 text-soft-blue">
                    <small>
                      <a className="text-soft-purple" href={`mailto:${item.email}`}>
                        {item.email}
                      </a>
                    </small>
                  </p>
                  <div className="text-center">
                    <a className="text-soft-purple fs-1" href={item.linkedin} target="_blank" rel="noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row my-5 py-5">
          <div className="col-12">
            <h2 className="display-font text-center text-dark-blue mt-5">
              <b className="fs-1">
                Equipo Comercial
              </b>
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {team && team.length && (
              <Slider {...settings}>
                {
                  team.map((item) => (
                    <div key={item.name} className="text-center">
                      <p className="display-font text-soft-purple mb-2">
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
                      <p className="mb-0 text-soft-blue">
                        <small>
                          <a className="text-soft-purple" href={`mailto:${item.email}`}>
                            {item.email}
                          </a>
                        </small>
                      </p>
                    </div>
                  ))
                }
              </Slider>
            )}
          </div>
        </div>
      </section>
      <div>
        <Image 
          src="/curva-gris-12.svg"
          alt="wave"
          width={9.23}
          height={3}
          layout="responsive"
        />
      </div>
      <section className="bg-grey container-fluid position-relative pb-5" style={{ top: '-4px'}} >
        <div className="container">
          <div className="row pb-5">
            <div className="col-12">
              <h2 className="display-font text-center text-dark-blue mt-5">
                <b className="fs-1">
                  Directorio
                </b>
              </h2>
            </div>
          </div>
          <div className="row">
          {directory && directory.length && directory.map((item, index) => (
            <div key={item.name} className={`text-center mb-5 ${index === 0 || index === 1 ? 'col-md-6' : 'col-md-4'}`}>
              <p className="display-font text-soft-purple mb-2 fs-5">
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
              <p className="mb-0 text-soft-blue">
                <small>
                  <a className="text-soft-purple" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </small>
              </p>
              <a className="text-soft-purple fs-1" href={item.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
 
export default Cfc;