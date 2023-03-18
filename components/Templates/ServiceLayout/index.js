import Image from 'next/image';
import Link from 'next/link';

import { services } from '@data/index';

import FormGetInfo from '@components/Molecules/FormGetInformation';
import GradientSection from '@components/Molecules/GradientSection';
import ServiceItem from '@components/Molecules/ServiceItem';
import Button from '@components/Atoms/Button';
import ExperienceSection from '@components/Molecules/ExperienceSection';

const ServiceLayout = ({ data }) => {
  const {
    name,
    title,
    subtitle,
    description,
    imageUrl,
    shortDescription,
    howItWorks,
    process,
    whyToUse,
    requirements,
  } = data;

  return (
    <>
      <GradientSection
        title={`<h1 class='text-soft-purple fw-bolder'>${title}</h1>`}
        subtitle={`<h2 class='text-dark-blue fw-bolder'>${subtitle}</h2>`}
        classFirstCol="col-lg-5"
        classSecondCol="col-lg-6"
        imageUrl={imageUrl}
        componentType
      />

      <ServiceItem
        imageUrl={description.imageUrl}
        order="first"
        title={`<h2 class='text-soft-purple fw-bolder text-capitalize'>${name}</h2>`}
        subtitle={description.title}
        shortDescription={shortDescription}
        bgType="bg-top-right-shape"
        componentType
      />

      <ServiceItem
        imageUrl={howItWorks.imageUrl}
        order="last"
        title={howItWorks.title}
        shortDescription={howItWorks.content}
        bgType="bg-bottom-left-shape"
        componentType
      />

      <section className="py-lg-5 bg-mask">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="text-center text-dark-blue fw-bolder">
                El proceso de
                {' '}
                {name}
              </h2>
              <ul className="d-lg-flex justify-content-between w-100 pt-5">
                {process && process.length > 0 && (process.map((item) => (
                  <li className="px-4 w-100" key={item.id}>
                    <div className="card shadow p-4 bg-secondary-gradient" style={{ height: '100%' }}>
                      <ul className="d-lg-flex w-100 align-items-center text-dark-blue">
                        <li>
                          <span className="fw-bolder p-2 fs-2">{item.id}</span>
                        </li>
                        <li>
                          <span className="fw-bolder">{item.title}</span>
                        </li>
                      </ul>
                      <p>
                        {item.content}
                      </p>
                    </div>
                  </li>
                )))}
              </ul>
              <div className="text-center">
                {/* <Button
                  className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                  text="Comenzar"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-secondary-gradient">
        <div className="container">
          <div className="row justify-content-between align-items-center text-center text-lg-start">
            <div className="col-lg-5">
              <Image
                src={whyToUse.imageUrl}
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
            <div className="col-lg-5">
              <h2 className="text-dark-blue fw-bolder">
                ¿Por qué es la opción ideal?
              </h2>
              <ul>
                {whyToUse && whyToUse.content.map((item) => (
                  <li className="my-3" key={item}>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center text-center text-lg-start">
            <div className="col-lg-5">
              <h2 className="text-dark-blue fw-bolder">
                ¿Cuáles son los requisitos?
              </h2>
              <ul>
                {requirements && requirements.content.map((item) => (
                  <li className="my-3" key={item}>
                    <div dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <Image
                src={requirements.imageUrl}
                alt="Más que ejecutivos"
                layout="responsive"
                objectFit="contain"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-6">
              <div className="card shadow p-4">
                <FormGetInfo
                  service={name}
                  title={title}
                  image={`${data.seo.metaTitle.toLowerCase()}.jpg`}
                  content={data.shortDescription}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="text-soft-purple fw-bolder">¿Tienes dudas?</h2>
              <p>Conversemos</p>
              <h3 className="text-dark-blue fw-bolder">Más que ejecutivos</h3>
              <p>Porque sabemos que eres el motor de la economía.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container py-lg-5">
        {newsSliderData?.length && (
        <Carousel pagination={false}>
          {
              newsSliderData.map((item) => (
                <div key={item.id} className="position-relative py-5 px-3 px-lg-5">
                  <div className="card shadow p-4 bg-secondary-gradient">
                    <ul className="d-lg-flex w-100 align-items-center">
                      <li className="p-4">
                        <Image
                          src={item.item_image.url}
                          alt={item.title}
                          width={300}
                          height={300}
                        />
                      </li>
                      <li className="px-4">
                        <p className="text-soft-purple fw-bolder">
                          {item.tag}
                        </p>
                        <p className="text-dark-blue fw-bolder fs-4 mb-0">
                          {item.title}
                        </p>
                        <p>
                          <small>
                            {item.origin}
                          </small>
                        </p>
                        <p>
                          {item.description}
                          {' '}
                          <Link href="/prensa">
                            <a href="!#" className="text-dark-blue fw-bolder">Leer más</a>
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            }
        </Carousel>
        )}
      </section> */}

      <ExperienceSection shape="top-left" />

      <section className="py-lg-5 bg-mask">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h3 className="text-center text-dark-blue fw-bolder fs-2">
                Otras soluciones
              </h3>
              <ul className="d-lg-flex justify-content-between w-100 pt-5">
                {services && services.length > 0 && (services
                  .filter((item) => item.name !== name && item.name !== 'factoring-web').map((item) => (
                    <li className="px-4 w-100" key={item.id}>
                      <div className="card shadow p-4 bg-secondary-gradient">
                        <h4 className="text-dark-blue fw-bolder">{item.name}</h4>
                        <p>
                          <span className="text-dark-blue">{item.title}</span>
                          <br />
                        </p>
                        <div dangerouslySetInnerHTML={{ __html: item.shortDescription }} />
                        <Link href={`servicios/${item.slug}`} passHref>
                          <Button
                            className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                            text="Saber más"
                          />
                        </Link>
                      </div>
                    </li>
                  )))}
              </ul>
            </div>
          </div>
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-6">
              <h2 className="text-center text-dark-blue fw-bolder">Más que ejecutivos</h2>
              <p className="text-center">
                Somos un equipo humano dispuestos a ser parte de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLayout;
