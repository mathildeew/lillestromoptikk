import { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import useAPI from "../../hooks/useAPI";
import { apiQuieries } from "../../sanity/apiQuieries";
import { urlFor } from "../../sanity/urlFor";

export default function Hero() {
  const { fetchAPI } = useAPI();

  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().hero);
      setHeroData(data);
    };
    getData();
  }, [fetchAPI]);

  const properties = {
    prevArrow: <button className="hidden"></button>,
    nextArrow: <button className="hidden"></button>,
  };

  return (
    <section className="w-full max-w-[1400px] h-fit px-4 pt-16 mx-auto md:px-6 lg:grid lg:grid-cols-2 lg:items-center">
      <div className="mr-10 lg:mr-0">
        <Fade {...properties}>
          {heroData?.images?.map((image) => (
            <div key={image._key} style={{ backgroundImage: `url(${urlFor(image?.image).url()})` }} className="h-[420px] w-full bg-cover bg-center lg:h-[600px] rounded-xl"></div>
          ))}
        </Fade>
      </div>

      <div className="z-20 relative w-full">
        <div className="bg-green361 flex flex-col items-start gap-3 border-2 border-black rounded-xl relative p-4 ml-10 -mt-10 md:p-12 md:gap-8 lg:-mt-0 lg:-ml-8">
          <h2>Din lokale optiker i Lillestrøm</h2>
          <p>Med flere års erfaring og stort engasjement for å gi et klart, klarere, klarest syn tilbyr vi grundige synsundersøkelser med topp moderne utstyr.</p>
          <p>Hos oss finner du også et nøye kuratert utvalg av innfatninger og solbriller fra våre favorittmerker — alltid med kvalitet, individualitet og varighet i tankene.</p>
          <p>Og psst, kaffen står alltid klar!</p>
        </div>
      </div>
    </section>
  );
}
