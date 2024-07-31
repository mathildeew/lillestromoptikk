import { PortableText } from "@portabletext/react";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import { apiQuieries } from "../../sanity/apiQuieries";
import { useEffect, useState } from "react";

export default function Brands() {
  const defaultMetadata = {
    title: "Våre merker → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`brandsMetadata`, defaultMetadata);
  const [ourBrands, setOurBrands] = useState([]);
  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().ourBrands);
      setOurBrands(data);
    };
    getData();
  }, [fetchAPI]);

  console.log(ourBrands);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />

      <main className="max-w-5xl py-20 px-3.5 mx-auto md:px-10 md:py-32 lg:px-0">
        <h1>Våre merker</h1>

        <div className="flex flex-col gap-24 lg:gap-32">
          {ourBrands.map((brand, index) => (
            <section key={brand._id} className={`flex flex-col gap-6 lg:flex-row lg:items-center ${index % 2 === 1 ? "flex-row" : "lg:flex-row-reverse"}`}>
              <img src={brand.imageUrl} className="w-full h-44 object-cover object-center md:h-72 lg:w-96 lg:h-96" alt={`Vi har briller fra ${brand.title}`} />
              <div className="flex flex-col gap-4">
                <h2>{brand.title}</h2>
                <PortableText value={brand.content} />
              </div>
            </section>
          ))}

          <p className="font-semibold">Vi fører også merker som Tom Ford, Ray-Ban, Face a Face, Fleye, Traction Production og mange fler.</p>
        </div>
      </main>
    </>
  );
}
