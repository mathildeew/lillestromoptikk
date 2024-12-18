import { useEffect, useState } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import GetMetadata from "../../hooks/GetMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/layout/Loader";
import Error from "../../components/layout/Error";
import MainComponentAnimation from "../../components/layout/MainComponentAnimation";
import BrandsIntro from "../../components/features/brands/BrandsIntro";
import AllBrands from "../../components/features/brands/AllBrands";

export default function Brands() {
  const [data, setData] = useState({ brandsInfo: [], selectedBrands: [] });

  const metadata = GetMetadata(`brandsMetadata`, {
    title: "Våre merker → Lillestrøm Optikk",
    desc: "",
  });

  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const [introData, brandsData] = await Promise.all([fetchAPI(apiQuieries().brandsInfo), fetchAPI(apiQuieries().ourBrands)]);
      setData({ brandsInfo: introData, allBrands: brandsData });
    };
    getData();
  }, [fetchAPI]);

  const { brandsInfo, allBrands } = data;

  return (
    <>
      <SEOHelmet {...metadata} />

      {isLoading && <Loader />}

      {isSuccess && (
        <MainComponentAnimation>
          <section className="flex flex-col gap-16 items-center pb-16">
            <BrandsIntro {...brandsInfo} />

            <AllBrands allBrands={allBrands} />
          </section>
        </MainComponentAnimation>
      )}

      {isError && <Error />}
    </>
  );
}
