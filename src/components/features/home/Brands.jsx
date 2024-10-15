import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { apiQuieries } from "../../../sanity/apiQuieries";
import useAPI from "../../../hooks/useAPI";

export default function BrandsHome() {
  const [brandsData, setBrandsData] = useState([]);

  const { fetchAPI, isLoading, isSuccess } = useAPI();
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().ourBrands);
      const filteredData = data.filter((brand) => brand.inFocus === true);
      const limitedData = filteredData.slice(0, 8);
      setBrandsData(limitedData);
    };
    getData();
  }, [fetchAPI]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-24 flex flex-col gap-4 items-center justify-center md:px-10">
      <h2>Våre merker</h2>
      <div className="flex flex-col gap-16 items-center justify-center">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {brandsData.map((brand, index) => (
            <img key={index} src={brand.focusUrl} alt={brand.title} className="w-full h-auto object-cover" />
          ))}
        </div>
        <button className="btn-primary bg-green361">
          <Link to={"/merker"} className="flex items-center gap-2">
            Se alle våre merker
            <FontAwesomeIcon icon={faChevronRight} className="text-md" />
          </Link>
        </button>
      </div>
    </section>
  );
}
