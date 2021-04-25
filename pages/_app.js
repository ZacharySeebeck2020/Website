import Navigation from '../components/Navigation';
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
        <Component {...pageProps} /> 
      </main>
    </>
  )

}

export default MyApp
