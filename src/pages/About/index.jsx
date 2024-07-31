import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import { useEffect, useState } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";

export default function About() {
  const defaultMetadata = {
    title: "Om oss → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`aboutMetadata`, defaultMetadata);

  const [about, setAbout] = useState([]);
  const { fetchAPI } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().about);
      setAbout(data);
    };
    getData();
  }, [fetchAPI]);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />
      <main>
        <section className="max-w-5xl py-20 px-3.5 mx-auto md:px-10 md:py-32 lg:px-0" data-animate-in="true" data-animation-order="3">
          <h1 className="text-center">Om oss</h1>
        </section>
      </main>
    </>
  );
}
