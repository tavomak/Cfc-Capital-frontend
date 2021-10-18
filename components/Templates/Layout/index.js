import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import Navbar from 'components/Molecules/Navbar'
import Footer from 'components/Molecules/Footer'
import PropTypes from 'prop-types';

export default function Layout({
  children,
  title,
  subtitle,
}) {
  const hostname = typeof window !== 'undefined' ? window.location.href : '';
  console.log(hostname);
  return (
    <>
      <Head>
        <title>{`CFC Capital | ${title}`}</title>
        <meta
          name="description"
          content={`${subtitle ? subtitle : ''}`}
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
      <main className="content-wrapper">
        {children}
      </main>
      <ToastContainer />
      <Footer />
    </>
  );
}
Layout.defaultProps = {
  title: 'Bienvenido a CFC Capital',
  subtitle: null,
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
