import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/main.css';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM,
};

function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#049bbc"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

export default App;
