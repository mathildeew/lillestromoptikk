import PropTypes from "prop-types";
import { urlFor } from "../../../sanity/urlFor";

export default function AboutContent({ sections }) {
  return (
    <div className="max-w-7xl flex flex-col gap-4 px-4 mb-10 md:gap-16 md:px-10 lg:mb-20">
      {sections?.map((section, index) => (
        <section key={section._key} className={`w-full flex flex-col gap-4 items-center  md:flex-row md:gap-10 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
          <img className="w-full h-96 object-cover rounded-xl md:w-1/2" src={urlFor(section.image).url()} alt={section.image.alt} />
          <div className="flex flex-col gap-2 md:w-1/2">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        </section>
      ))}
    </div>
  );
}

AboutContent.propTypes = {
  sections: PropTypes.array,
};
