import {useState, useEffect} from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link'

import Layout from 'components/Templates/Layout';
import FormGetInfo from 'components/Molecules/FormGetInformation'
import styles from './styles.module.scss';
import FormFactoringActiveCampain from 'components/Molecules/FormFactoringActiveCampain';
import { servicios, fullservices } from 'data'


export default function Post({ data }) {
  const router = useRouter();
  const [formatedTitle, setFormatedTitle] = useState('');
  const [service, setService] = useState(null);
  const [isLeasing, setLeasing] = useState(false);

  useEffect(() => {
    setFormatedTitle(data.Slide.titlulo.replace('<br> <small class="text-dark-grey fs-2">', '').replace('</small>', ''))
    setService(data.Seo.metaTitle);
  }, [data]);
  useEffect(() => {
    if (service === 'Leasing') {
      setLeasing(true);
    } else {
      setLeasing(false);
    }
  }, [service]);
  return (
    <>
      {router.isFallback ? (
        <p>Loading</p>
      ): (
        <>
          <Layout 
            title={data.Seo.metaTitle}
            description={data.Seo.metaDescription}
          >
            <Head>
              <title>
                {data.Seo.metaTitle} | CFC Capital
              </title>
              <meta property="og:image" content={data.Seo.ShareImage} />
            </Head>
            <section className="container">
              <div className="row align-items-center pt-5">
                <div className="col-md-7 order-md-2">
                  <Image
                    src={`${data.Banner.url}`}
                    alt={data.Seo.metaTitle}
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="col-md-5 order-md-1">
                  <h1 
                    className="display-font text-center text-md-start text-dark-blue pb-4"
                    dangerouslySetInnerHTML={{ __html: data.Slide.titlulo }}
                  />
                </div>
              </div>
            </section>
            <div>
              <Image 
                src="/curved-border-gris.svg"
                alt="wave"
                width={40}
                height={3}
                layout="responsive"
              />
            </div>
            <section className="bg-grey container-fluid position-relative" style={{ top: '-4px'}}>
                <div className="container py-5">
                  <div className="row pt-lg-5">
                    <div className="col-md-6">
                      <h2 className={`display-font text-soft-purple mb-4`}>{data.Que.Titulo}</h2>
                      <p className="fs-5">{data.Que.Contenido}</p>
                    </div>
                    <div className="col-md-6">
                      <h2 className={`display-font text-soft-purple mb-4`}>¿Cómo funciona?</h2>
                      <p className="fs-5">{data.Como.Contenido}</p>
                      {data.Seo.metaTitle === 'Factoring Web' && (
                        <a
                          className="btn btn-primary mt-auto display-font mb-5"
                          href="/CFC-PasoaPaso.pdf"
                          rel='noreferrer'
                          target="_blank"
                        >
                          Saber más
                        </a>
                      )}
                    </div>
                  </div>
                </div>
            </section>
            <div className="position-relative" style={{ top: '-8px'}}>
              <Image 
                src="/curved-top-gris.svg"
                alt="wave"
                width={40}
                height={3}
                layout="responsive"
              />
            </div>
            <section className="container">
              <div className="row align-items-stretch py-5 my-lg-5">
                <div className="col-12">
                  <h3 className="text-center display-font pb-5">Preguntas Frecuentes</h3>
                </div>
                {data.Faq && data.Faq.map((item) => (
                  <div className="col-lg-4 mb-5 mb-lg-0" key={item.pregunta}>
                    <div className={`card d-flex flex-column justify-content-between shadow`} style={{height:"100%"}}>
                      <div className={`px-3 px-sm-4 px-md-5 py-4`}>
                        <p className="display-font fs-5">
                          <b>
                            {item.pregunta}
                          </b>
                        </p>
                        <p>{item.respuesta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="container">
              <div className="row justify-content-between">
                <div className="col-md-6 col-xxl-5">
                  <h3 className="text-center display-font pb-5">El proceso del {data.Seo.metaTitle}</h3>
                  <ul>
                    {data.Proceso && data.Proceso.map((item, key) => (
                      <li className="mb-4" key={item.descripcion}>
                        <ul className={`d-flex align-items-center shadow p-4`}>
                          <li className={styles.roundedItem}>
                            <p className="m-0 display-font text-soft-purple fs-1">{key+1}</p>
                          </li>
                          <li>
                            <p className="m-0">{item.descripcion}</p>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h3 className="text-center display-font pb-5">Solicitar Información</h3>
                  {service && service != 'Factoring' ? (
                    <FormGetInfo
                      service={data.Seo.metaTitle}
                      title={formatedTitle}
                      image={`${data.Seo.metaTitle.toLowerCase()}.jpg`}
                      content={data.Como.Contenido}
                    />
                  ) : (
                    <FormFactoringActiveCampain />
                  )}
                </div>
              </div>
            </section>
            {isLeasing && (
              <section className="container">
                <div className="row">
                  <div className="col-12 my-5">
                    <div className="shadow" style={{borderRadius: '35px', overflow: 'hidden'}}>
                      <Link href="/servicios/factoring">
                        <a href="!#">
                          <Image 
                            src="/banner-factoring.jpg"
                            alt="factoring"
                            width={1380}
                            height={512}
                            layout="responsive"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            )}
            <div>
              <Image 
                src="/curva-gris-12.svg"
                alt="wave"
                width={9.23}
                height={3}
                layout="responsive"
              />
            </div>

          </Layout>
        </>
      )}
    </>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const array = fullservices.filter((article) => article.Seo.metaTitle.toLocaleLowerCase() === params.slug)
  const data = Object.assign({}, array)
  return {
    props: {
      preview,
      data: data[0]
    },
    revalidate: 100
  }
}

export async function getStaticPaths() {
  return {
    paths: servicios?.filter(item => item.slug !== 'factoring-web').map((post) => `/servicios/${post.slug}`) || [],
    fallback: false,
  }
}