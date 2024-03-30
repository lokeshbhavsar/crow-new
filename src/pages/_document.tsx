/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

import { useEffect } from 'react';
export default function Document() {
  const theme = 'dark';

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Html lang="en" data-bs-theme={theme}>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="application-name" content="Crowboys DEX" />
        <meta name="author" content="crowboys" />
        <meta name="keywords" content="Crowboys" />
        <meta name="description" content="The Official Crowboys Dex" />

        <meta property="og:title" content="The Official Crowboys Dex" />
        <meta property="og:site_name" content="Crowboys DEX" />
        <meta property="og:url" content="https://crowboys-dex.vercel.app/" />
        <meta property="og:description" content="The Official Crowboys Dex" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo/logo-dark.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@100;200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <body>
        <Main />
      </body>
      <NextScript />
    </Html>
  );
}
