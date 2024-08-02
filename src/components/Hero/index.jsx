import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import { apiQuieries } from "../../sanity/apiQuieries";
import { urlFor } from "../../sanity/urlFor";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

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
    <section className="w-full">
      <Fade {...properties}>
        {heroData?.images?.map((image) => (
          <div key={image._key} style={{ backgroundImage: `url(${urlFor(image?.image).url()})` }} className="h-[420px] w-full bg-cover bg-center flex items-end justify-center lg:h-[600px]">
            <div>
              <h1 className="text-green361 uppercase text-[9vw]  bg-grey bg-opacity-80 my-5">{heroData.title}</h1>
            </div>
          </div>
        ))}
      </Fade>
    </section>
  );
}
