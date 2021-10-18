import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/main.scss'
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-PTN38WD'
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
