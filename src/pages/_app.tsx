import { useEffect, useState } from 'react';
import Head from 'next/head';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import '@/styles/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '@/styles/css/swiper-bundle.min.css';
import '@/styles/sass/style.scss';
import Layout from '@/components/layout/Layout';
import { Web3Modal } from '@/context/Web3Modal';

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  //........... animation.....
  useEffect(() => {
    setLoading(true);
    AOS.init();

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', 'dark');
  }, [loading]);

  return (
    <>
      <Head>
        <title>{'The Official Crowboys DEX!'}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Web3Modal>
        {loading && (
          /* <!-- ===============>> Preloader start here <<================= --> */
          <div className="preloader">
            <img src="images/logo/preloader.png" alt="preloader icon" />
          </div>
          /* <!-- ===============>> Preloader end here <<================= --> */
        )}

        {!loading && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Web3Modal>
    </>
  );
}
