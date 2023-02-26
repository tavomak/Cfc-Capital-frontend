import { useState, useEffect } from 'react';
import sbjs from 'sourcebuster';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/main.scss';
import TagManager from 'react-gtm-module';
import { CfcProvider } from '@context/useCfcContext';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM,
};

function App({ Component, pageProps }) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    sbjs.init();
    setUserData(sbjs.get.current);
  }, [setUserData]);
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <CfcProvider userData={userData}>
      <Component {...pageProps} />
    </CfcProvider>
  );
}

export default App;
