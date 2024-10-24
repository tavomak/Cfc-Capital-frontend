import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@components/Molecules/Navbar';
import GoToTopButton from '@components/Molecules/GoToTopButton';
import Footer from '@components/Molecules/Footer';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Layout = ({
  children,
  title,
  bgImage,
  description,
  noIndex,
}) => {
  const hostname = typeof window !== 'undefined' ? window.location.href : '';

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>{`${title} | CFC Capital`}</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content={`${description || ' CFC Capital'}`}
        />
        <link rel="canonical" href={hostname} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="hostname" />
        <meta property="og:site_name" content="CFC Capital" />
        <meta name="twitter:card" content="summary_large_image" />
        {noIndex && <meta name="robots" content="noindex, nofollow" /> }
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar />
      <main className={`content-wrapper ${bgImage ? styles.isBgActive : ''}`} style={{ background: `url(/${bgImage}) no-repeat` }}>
        {children}
      </main>
      <ToastContainer />
      {showTopBtn && <GoToTopButton />}
      <Footer />
      <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=e2a24a24-64b6-4805-ad57-dbfadaa4ec69" />
    </>
  );
};

Layout.defaultProps = {
  title: 'Bienvenido a CFC Capital',
  bgImage: '',
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  bgImage: PropTypes.string,
};

export default Layout;
