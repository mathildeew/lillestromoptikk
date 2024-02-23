import SEOHelmet from "../../components/SEOHelmet";
import { brands } from "./brands";

export default function Brands() {
  return (
    <>
      <SEOHelmet
        title={"Våre merker | "}
        content={
          "Vi fører merker som Moscot, Ørgreen, RES REI, Masunaga, Tom Ford, Traction Production og mange fler. Kom innom oss og opplev hele utvalget."
        }
      />

      <main className="max-w-5xl py-20 px-3.5 mx-auto md:px-10 md:py-32 lg:px-0">
        <h1>Merker</h1>

        <div className="flex flex-col gap-24 lg:gap-32">
          {brands.map((brand) => (
            <section
              key={brand.id}
              className={`flex flex-col gap-6 lg:flex-row lg:items-center ${
                brand.id === "moscot" || brand.id === "masunaga"
                  ? "flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              <img
                src={brand.img}
                className="w-full h-44 object-cover object-center md:h-72 lg:w-96 lg:h-96"
                alt={`Vi har briller fra ${brand.name}`}
              />
              <div className="flex flex-col gap-4">
                <h2>{brand.name}</h2>
                <p>{brand.description1}</p>
                <p>{brand.description2}</p>
              </div>
            </section>
          ))}

          <p className="font-semibold">
            Vi fører også merker som Tom Ford, Ray-Ban, Face a Face, Fleye,
            Traction Production og mange fler.
          </p>
        </div>
      </main>
    </>
  );
}
