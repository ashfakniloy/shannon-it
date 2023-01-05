import { ParallaxProvider } from "react-scroll-parallax";
import { PageFade } from "../animations/page";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const scrollAnimationConfig = {
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MM4HB2456E"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-MM4HB2456E');
        `}
      </Script>
      <Analytics />

      <ParallaxProvider>
        <MotionConfig {...scrollAnimationConfig}>
          <Layout pageDetails={Component.pageDetails && Component.pageDetails}>
            <PageFade>
              <Component {...pageProps} />
            </PageFade>
          </Layout>
        </MotionConfig>
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
