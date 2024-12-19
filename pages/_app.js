import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { poppins, openSans } from '@/utils/fonts';
import { environments } from '@/utils/constants';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/main.css';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM,
};

function App({ Component, pageProps }) {
  useEffect(() => {
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
