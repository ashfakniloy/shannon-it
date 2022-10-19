import { ParallaxProvider } from "react-scroll-parallax";
import { PageFade } from "../animations/page";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout pageDetails={Component.pageDetails && Component.pageDetails}>
        <PageFade>
          <Component {...pageProps} />
        </PageFade>
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
