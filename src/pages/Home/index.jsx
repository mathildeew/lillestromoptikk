import { useState, useEffect } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/layout/Loader";
import Error from "../../components/layout/Error";
import Hero from "../../components/features/home/Hero";
import TimeForCheck from "../../components/features/home/TimeForEyeCheck";
import Temporary from "../../components/features/home/Temporary";
import BrandsHome from "../../components/features/home/Brands";

export default function Home() {
  const [data, setData] = useState({ heroData: [], temporaryData: [] });

  const metadata = getMetadata(`homeMetadata`, {
    title: "Velkommen til Lillestrøm Optikk",
    desc: "",
  });

  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const [hero, temporary] = await Promise.all([fetchAPI(apiQuieries().hero), fetchAPI(apiQuieries().temporary)]);
      setData({ heroData: hero, temporaryData: temporary });
    };
    getData();
  }, [fetchAPI]);

  const { heroData, temporaryData } = data;

  return (
    <>
      <SEOHelmet {...metadata} />

      {isLoading && <Loader />}

      {isSuccess && (
        <main>
          {temporaryData.published === true && <Temporary data={temporaryData} />}
          <Hero {...heroData} />
          <TimeForCheck />
          <BrandsHome />
        </main>
      )}

      {isError && <Error />}
    </>
  );
}
