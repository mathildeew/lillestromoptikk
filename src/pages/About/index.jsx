import { useEffect, useState } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import { urlFor } from "../../sanity/urlFor";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import ImageCarousel from "../../components/features/about/ImageCarousel";
import Loader from "../../components/layout/Loader";

export default function About() {
  const [aboutData, setAboutData] = useState([]);
  const [carouselImages, setCarouselImages] = useState([]);

  const defaultMetadata = {
    title: "Om oss → Lillestrøm Optikk",
    desc: "",
  };

  const metadata = getMetadata(`aboutMetadata`, defaultMetadata);

  const { fetchAPI, isLoading, isSuccess } = useAPI();
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
      {isLoading && <Loader />}

      {isSuccess && (
        <main data-animate-in="true">
          <section className="flex flex-col gap-16 items-center">
            <section className="w-full text-center bg-grey flex flex-col items-center px-4 py-10 md:px-10 lg:py-20">
              <div className="text-center max-w-4xl flex flex-col gap-4">
                <h1>Om oss</h1>
                <p>{aboutData.intro}</p>
              </div>
            </section>

            <div className="max-w-7xl flex flex-col gap-16 px-4 md:px-10">
              {aboutData.sections?.map((section, index) => (
                <section key={section._key} className={`w-full flex flex-col gap-4 items-center  md:flex-row md:gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <img className="w-full h-96 object-cover rounded-xl md:w-1/2" src={urlFor(section.image).url()} alt={section.image.altText} />
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <h2>{section.heading}</h2>
                    <p>{section.text}</p>
                  </div>
                </section>
              ))}
            </div>

            <ImageCarousel data={carouselImages} />
          </section>
        </main>
      )}
    </>
  );
}
