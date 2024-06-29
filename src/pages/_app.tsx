// _app.js
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.snipcart.com/themes/v3.0.30/default/snipcart.js" strategy="beforeInteractive" />
      <Component {...pageProps} />
      <div
        hidden
        id="snipcart"
        data-api-key="YOUR_PUBLIC_API_KEY"
      ></div>
    </>
  );
}

export default MyApp;
