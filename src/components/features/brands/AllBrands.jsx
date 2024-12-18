import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";

export default function AllBrands({ allBrands }) {
  if (!allBrands || !Array.isArray(allBrands)) {
    return;
  }

  return (
    <div className="max-w-7xl flex flex-col gap-16 px-4 md:px-10">
      {allBrands.map((brand, index) => (
        <section key={brand._id} className={`w-full flex flex-col gap-4 items-center  md:flex-row md:gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
          <img src={brand.imageUrl} className="w-full h-96 object-cover rounded-xl md:w-1/2" alt={`Vi har briller fra ${brand.title}`} />
          <div className="flex flex-col gap-2 md:w-1/2">
            <h2>{brand.title}</h2>
            <PortableText value={brand.content} />
          </div>
        </section>
      ))}
    </div>
  );
}

AllBrands.propTypes = {
  allBrands: PropTypes.array,
};
