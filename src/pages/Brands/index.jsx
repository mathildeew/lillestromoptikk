import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { apiQuieries } from "../../sanity/apiQuieries";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/layout/Loader";

export default function Brands() {
  const defaultMetadata = {
    title: "Våre merker → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`brandsMetadata`, defaultMetadata);
  const [ourBrands, setOurBrands] = useState([]);
  const { fetchAPI, isLoading, isSuccess } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().ourBrands);
      setOurBrands(data);
    };
    getData();
  }, [fetchAPI]);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />

      {isLoading && <Loader />}

      {isSuccess && (
        <main data-animate-in="true">
          <section className="flex flex-col gap-16 items-center pb-16">
            <section className="w-full text-center bg-grey flex flex-col items-center px-4 py-10 md:px-10 lg:py-20">
              <div className="text-center max-w-4xl flex flex-col gap-4">
                <h1>Våre merker</h1>
                <p>Hos oss finner du et nøye kuratert utvalg av innfatninger og solbriller fra våre favorittmerker — alltid med kvalitet, individualitet og varighet i tankene.</p>
              </div>
            </section>

            <div className="max-w-7xl flex flex-col gap-16 px-4 md:px-10">
              {ourBrands.map((brand, index) => (
                <section key={brand._id} className={`w-full flex flex-col gap-4 items-center  md:flex-row md:gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <img src={brand.imageUrl} className="w-full h-96 object-cover rounded-xl md:w-1/2" alt={`Vi har briller fra ${brand.title}`} />
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <h2>{brand.title}</h2>
                    <PortableText value={brand.content} />
                  </div>
                </section>
              ))}

              <p className="font-semibold">Vi fører også merker som Tom Ford, Ray-Ban, Face a Face, Fleye, Traction Production og mange fler.</p>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
