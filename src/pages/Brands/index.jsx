import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { apiQuieries } from "../../sanity/apiQuieries";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/layout/Loader";
import Error from "../../components/layout/Error";

export default function Brands() {
  const [data, setData] = useState({ brandsInfo: [], selectedBrands: [] });

  const metadata = getMetadata(`brandsMetadata`, {
    title: "Våre merker → Lillestrøm Optikk",
    desc: "",
  });

  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const [introData, brandsData] = await Promise.all([fetchAPI(apiQuieries().brandsInfo), fetchAPI(apiQuieries().ourBrands)]);
      setData({ brandsInfo: introData, selectedBrands: brandsData });
    };
    getData();
  }, [fetchAPI]);

  const { brandsInfo, selectedBrands } = data;

  return (
    <>
      <SEOHelmet {...metadata} />

      {isLoading && <Loader />}

      {isSuccess && (
        <main>
          <section className="flex flex-col gap-16 items-center pb-16">
            <section className="w-full text-center bg-grey flex flex-col items-center px-4 py-10 md:px-10 lg:py-20">
              <div className="text-center max-w-4xl flex flex-col gap-4">
                <h1>Våre merker</h1>
                <p>{brandsInfo?.intro}</p>
              </div>
            </section>

            <div className="max-w-7xl flex flex-col gap-16 px-4 md:px-10">
              {selectedBrands.map((brand, index) => (
                <section key={brand._id} className={`w-full flex flex-col gap-4 items-center  md:flex-row md:gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <img src={brand.imageUrl} className="w-full h-96 object-cover rounded-xl md:w-1/2" alt={`Vi har briller fra ${brand.title}`} />
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <h2>{brand.title}</h2>
                    <PortableText value={brand.content} />
                  </div>
                </section>
              ))}
            </div>
          </section>
        </main>
      )}

      {isError && <Error />}
    </>
  );
}
