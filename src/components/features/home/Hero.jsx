import PropTypes from "prop-types";
import { PortableText } from "@portabletext/react";

export default function Hero({ imageUrl, imageAlt, title, content }) {
  return (
    <section className="w-full max-w-7xl h-fit px-4 pt-16 mx-auto md:px-10 lg:grid lg:grid-cols-2 lg:items-center lg:pt-20">
      <div className="z-20 mr-6 lg:mr-0">
        <img src={imageUrl} alt={imageAlt} className="w-full h-auto object-cover rounded-xl sm:max-h-[450px]" />
      </div>

      <div className="w-full">
        <div className="bg-grey flex flex-col items-start gap-3 border-2 border-black rounded-xl relative p-4 ml-6 -mt-4 md:p-12 md:gap-8 lg:-mt-0 lg:-ml-4">
          <h2>{title}</h2>
          <PortableText value={content} />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.array,
};
