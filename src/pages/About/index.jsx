import { useEffect, useState } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import ImageCarousel from "../../components/features/about/ImageCarousel";
import Loader from "../../components/layout/Loader";
import Error from "../../components/layout/Error";
import MainComponentAnimation from "../../components/layout/MainComponentAnimation";
import AboutIntro from "../../components/features/about/AboutIntro";
import AboutContent from "../../components/features/about/AboutContent";

export default function About() {
  const [aboutData, setAboutData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  const metadata = getMetadata(`aboutMetadata`, {
    title: "Om oss → Lillestrøm Optikk",
    desc: "",
  });

  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

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
      <SEOHelmet {...metadata} />
      {isLoading && <Loader />}

      {isSuccess && (
        <MainComponentAnimation>
          <section className="flex flex-col gap-16 items-center">
            <AboutIntro {...aboutData} />
            <AboutContent {...aboutData} />
            {carouselImages && <ImageCarousel data={carouselImages} />}
          </section>
        </MainComponentAnimation>
      )}

      {isError && <Error />}
    </>
  );
}
