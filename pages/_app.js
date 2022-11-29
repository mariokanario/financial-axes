import { useEffect } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../styles/globals.css'
import '../styles/style.css'
import '../styles/dashboard.css'
import { LanguageProvider } from '../context/LanguageProvider';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
    
  }, [])


  return <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>

}

export default MyApp
