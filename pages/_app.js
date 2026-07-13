import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import sbjs from 'sourcebuster';
import { poppins, openSans } from '@/utils/fonts';
import { environments } from '@/utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/main.css';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM,
};

function App({ Component, pageProps }) {
  useEffect(() => {
    sbjs.init();
    if (process.env.NODE_ENV === environments.production) {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
            --font-open-sans: ${openSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default App;
