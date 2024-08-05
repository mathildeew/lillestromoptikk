import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import Hero from "../../components/Hero";
import TimeForCheck from "../../components/TimeForEyecheck";
import Temporary from "../../components/Temporary";
import useAPI from "../../hooks/useAPI";
import { apiQuieries } from "../../sanity/apiQuieries";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [temporaryData, setTemporaryData] = useState([]);

  const defaultMetadata = {
    title: "Velkommen til Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`homeMetadata`, defaultMetadata);

  const { fetchAPI } = useAPI();
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().temporary);
      setTemporaryData(data);
    };
    getData();
  }, [fetchAPI]);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />
      {/* <ScrollingGlasses /> */}

      <main data-animate-in="true" data-animation-order="1">
        {temporaryData.image && <Temporary data={temporaryData} />}
        <Hero />
        <TimeForCheck />
      </main>
    </>
  );
}
