import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: 'NotArt',
  description: '',
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="stylesheet" href="/fonts/opensans/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/montserrat/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/roboto/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/playfair/stylesheet.css" />
        <link rel="stylesheet" href="/fonts/ionicons.min.css" />
        <link rel="stylesheet" href="/fonts/font-awesome.min.css" />
        <link rel="stylesheet" href="/fonts/maitree//stylesheet.css" />
        <link rel="stylesheet" href="/fonts/acumin/stylesheet.css" />
        <link rel="stylesheet" href="/css/pageloader.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/js/vendor/swiper.min.css" />
        <link rel="stylesheet" href="/js/vendor/jquery.fullpage.min.css" />
        <link rel="stylesheet" href="/js/vegas/vegas.min.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/style-default.css" />
        {/*<script src="/js/vendor/modernizr-2.7.1.min.js"></script>*/}
        <Script src="/js/vendor/modernizr-2.7.1.min.js" />
      </head>

      <body id="menu" className="body-page">
        <div className="page-loader p-hidden" id="page-loader">
          <div>
            <div className="icon ion-spin"></div>
            <p>loading</p>
          </div>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
      
      {/*
      <Script src="/js/vendor/modernizr-2.7.1.min.js" />
      */}
      <Script src="/js/vendor/jquery-1.12.4.min.js" />
      <Script src="/js/slick/slick.min.js" />
      <Script src="/js/vendor/scrolloverflow.min.js" />
      <Script src="/js/vendor/all.js" />
      <Script src="/js/particlejs/particles.min.js" />
      <Script src="/js/jquery.downCount.js" />
      <Script src="/js/form_script.js" />
      <Script src="/js/main.js" />
      


    </html>
  );
}
