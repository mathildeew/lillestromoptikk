import { useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import { apiQuieries } from "../../sanity/apiQuieries";
import { urlFor } from "../../sanity/urlFor";

export default function Hero() {
  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();

  const [heroImage, setHeroImage] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().hero);
      setHeroImage(data);
    };
    getData();
  }, [fetchAPI]);

  const backgroundImage = heroImage && heroImage.image && heroImage.image.asset ? `url(${urlFor(heroImage.image.asset).url()})` : "none";

  return (
    <section className="bg-cover bg-no-repeat bg-center w-full h-[400px] flex flex-col justify-center" style={{ backgroundImage }}>
      <div className="text-green361 text-right px-5">
        <h1 className="flex flex-col text-right">
          <span>Hei!</span> <span>Velkommen til oss</span>
        </h1>
      </div>
    </section>
  );
}
