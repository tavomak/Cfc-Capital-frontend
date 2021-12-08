import { getServiceBySlug, getAllServices } from 'lib/api';
import Image from 'next/image';
import Head from 'next/head';

import Layout from 'components/Templates/Layout';
import FormGetInfo from 'components/Molecules/FormGetInformation'
import styles from './styles.module.scss';


export default function Post({ data, morePosts }) {
  return (
    <Layout 
      title={data.Seo.metaTitle}
      description={data.Seo.metaDescription}
      // bgImage="curved-top-gris.svg"
    >
      <Head>
        <title>
          {data.Seo.metaTitle} | CFC Capital
        </title>
        <meta property="og:image" content={data.Seo.ShareImage} />
      </Head>
      <section className="container">
        <div className="row align-items-center pt-5">
          <div className="col-5">
            <h1 
              className="display-font text-dark-blue pb-4"
              dangerouslySetInnerHTML={{ __html: data.Slide.titlulo }}
            />
          </div>
          <div className="col-7">
            <Image
              src={`${data.Banner.url}`}
              alt={data.Seo.metaTitle}
              width={16}
              height={9}
              layout="responsive"
              objectFit="cover"
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
            <FormGetInfo />
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

    </Layout>
  )
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getServiceBySlug(params.slug, preview)
  return {
    props: {
      preview,
      data: data[0],
    },
    revalidate: 100
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllServices();
  
  return {
    paths: allPosts?.filter((item) => item.slug !== 'factoring-web').map((post) => `/servicios/${post.slug}`) || [],
    fallback: true,
  }
}