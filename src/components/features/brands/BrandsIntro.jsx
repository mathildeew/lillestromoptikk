import PropTypes from "prop-types";

export default function BrandsIntro({ intro }) {
  return (
    <section className="w-full text-center bg-grey flex flex-col items-center px-4 py-10 md:px-10 lg:py-20">
      <div className="text-center max-w-4xl flex flex-col gap-4">
        <h1>Våre merker</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

BrandsIntro.propTypes = {
  intro: PropTypes.string,
};
