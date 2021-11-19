import Head from 'next/head';
import Script from 'next/script'
import { ToastContainer } from 'react-toastify';
import Navbar from 'components/Molecules/Navbar'
import Footer from 'components/Molecules/Footer'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

export default function Layout({
  children,
  title,
  subtitle,
  bgImage,
  description
}) {
  const hostname = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Head>
        <title>{`${title} | CFC Capital`}</title>
        <meta
          name="description"
          content={`${description ? description : ' CFC Capital'}`}
        />
        <link rel="canonical" href={hostname} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="hostname" />
        <meta property="og:site_name" content="CFC Capital" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar />
      <main className={`content-wrapper ${bgImage ? styles.isBgActive : ''}`} style={{ background: `url(/${bgImage}) no-repeat`}}>
        {children}
      </main>
      <ToastContainer />
      <Footer />
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e2a24a24-64b6-4805-ad57-dbfadaa4ec69" />
    </>
  );
}
Layout.defaultProps = {
  title: 'Bienvenido a CFC Capital',
  subtitle: null,
  bgImage: ''
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
};
