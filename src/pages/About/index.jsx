import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import { useEffect, useState } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import { PortableText } from "@portabletext/react";
import { PortableTextFooter } from "../../components/Layout/Footer/PortableTextFooter";
import ImageCarousel from "../../components/Carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function About() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const defaultMetadata = {
    title: "Om oss → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`aboutMetadata`, defaultMetadata);
  const [aboutData, setAboutData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);
  const { fetchAPI } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().about);
      setAboutData(data);
      setCarouselImages(data.carousel);
    };
    getData();
  }, [fetchAPI]);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />
      <main>
        <section className="flex flex-col gap-16 items-center" data-animate-in="true" data-animation-order="3">
          <section className="w-full text-center bg-grey flex flex-col items-center gap-6 px-4 py-10 md:px-10 lg:py-20">
            <div className="text-center max-w-4xl flex flex-col gap-4">
              <h1>Om oss</h1>
              <p>{aboutData.intro}</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:post@lillestromoptikk.no" className="btn-primary bg-green361 border-black">
                post@lillestromoptikk.no
              </a>
              <a href="mailto:post@lillestromoptikk.no" className="btn-primary  bg-green361 border-black">
                tlf. 64 80 85 85
              </a>
            </div>
          </section>
          <div className="max-w-[1400px] flex flex-col gap-16">
            <section className="w-full flex flex-col gap-3 items-center px-5 md:flex-row md:gap-5">
              <img className="w-full h-96 object-cover md:w-1/2" src="/brands/gotti/gotti_dimensions.jpg" alt="" />
              <div className="flex flex-col gap-3 md:w-1/2">
                <h2>Butikken</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis magna nec mi pharetra, et dignissim lorem hendrerit. Nam fermentum sem non arcu facilisis, ac tempus justo facilisis. Integer scelerisque ligula non turpis condimentum, at tincidunt libero ornare. Quisque vel ligula sit amet sapien cursus accumsan. Fusce vel ex et risus congue laoreet. Proin euismod justo ut nibh fermentum, in malesuada purus sagittis. Sed quis quam non justo blandit elementum nec id libero. Curabitur at eros nec sapien fringilla ullamcorper.</p>
              </div>
            </section>

            <section className="w-full flex flex-col gap-3 items-center px-5 md:flex-row md:gap-5">
              <div className="flex flex-col gap-3 md:w-1/2">
                <h2>Gjenbrukshjørnet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis magna nec mi pharetra, et dignissim lorem hendrerit. Nam fermentum sem non arcu facilisis, ac tempus justo facilisis. Integer scelerisque ligula non turpis condimentum, at tincidunt libero ornare. Quisque vel ligula sit amet sapien cursus accumsan. Fusce vel ex et risus congue laoreet. Proin euismod justo ut nibh fermentum, in malesuada purus sagittis. Sed quis quam non justo blandit elementum nec id libero. Curabitur at eros nec sapien fringilla ullamcorper.</p>
              </div>
              <img className="w-full h-96 object-cover md:w-1/2" src="/brands/gotti/gotti_dimensions.jpg" alt="" />
            </section>
          </div>

          <ImageCarousel data={carouselImages} />
        </section>
      </main>
    </>
  );
}
