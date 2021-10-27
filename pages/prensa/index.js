import { getAllPostsForHome } from 'lib/api'
import {shimmer, toBase64} from 'helpers'
import Image from 'next/image';

import Layout from 'components/Templates/Layout';

export default function News({ allPosts, preview }) {
  return (
    <Layout
      title="Servicios"
      description="Fomentamos tu capacidad de desarrollar negocios que crezcan, se proyecten en el tiempo y aporten al país"
    >
      <section className="container-fluid mb-md-5 py-5" style={{ background: 'url(/fondo-noticias.svg) no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom center'}}>
        <div className="container">
          {preview && <p>Preview mode</p>}
          <div className="row mt-5">
            <div className="col-md-6">
              <h1 className={`display-font text-dark-blue`}>Como adecuar su Pyme según la realidad económica</h1>
            </div>
            <div className="col-md-6" >
              <div className="px-4">
                <Image
                  src="/video-prensa.jpg"
                  alt="Cfc Capital Logo"
                  width={16}
                  height={9}
                  layout="responsive"
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL="/video-prensa.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-5">
        <div className="row justify-content-stretch">
        {allPosts?.length > 0 && allPosts.map((item) => (
          <div className="col-md-4 pb-5" key={item.id}>
            <div className="card shadow" style={{ height: '100%'}}>
              <div className="card-header">
                <a href="!#" className="noticeImg d-block mb-4">
                  <Image
                    src={item.image.url}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    alt="Cfc Capital Logo"
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="contain"
                  />
                </a>
              </div>
              <div className="card-body">
                  <p className="display-font">
                    {item.title}
                  </p>
                <a href="!#" className="btn btn-primary display-font">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}