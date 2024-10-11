import { useState, useEffect } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/layout/Loader";
import Hero from "../../components/features/home/Hero";
import TimeForCheck from "../../components/features/home/TimeForEyeCheck";
import Temporary from "../../components/features/home/Temporary";
import BrandsHome from "../../components/features/home/Brands";

export default function Home() {
  const [temporaryData, setTemporaryData] = useState([]);

  const defaultMetadata = {
    title: "Velkommen til Lillestrøm Optikk",
    desc: "",
  };

  const metadata = getMetadata(`homeMetadata`, defaultMetadata);

  const { fetchAPI, isLoading, isSuccess } = useAPI();

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

      {isLoading && <Loader />}
      {isSuccess && (
        <main data-animate-in="true" data-animation-order="1" className="flex flex-col items-center">
          {temporaryData.published === true && <Temporary data={temporaryData} />}
          <Hero />
          <TimeForCheck />
          <BrandsHome />
        </main>
      )}
    </>
  );
}
