import SEOHelmet from "../../components/SEOHelmet";
import { brands } from "./brands";

export default function Brands() {
  return (
    <>
      <SEOHelmet
        title={"Merker"}
        content={
          "Vi fører merker som Moscot, Ørgreen, Tom Ford, Traction Production og mange fler. Kom innom oss og opplev hele utvalget."
        }
      />

      <main className="max-w-5xl py-20 px-3.5 mx-auto md:px-10 md:py-32 lg:px-0">
        <h1>Merker</h1>

        <div className="flex flex-col gap-24 lg:gap-32">
          {brands.map((brand) => (
            <section
              key={brand.id}
              className={`flex flex-col gap-6 lg:flex-row lg:items-center ${
                brand.id === "moscot" || brand.id === "resrei"
                  ? "flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              <img
                src={brand.img}
                className="w-full h-44 object-cover object-center lg:w-96 lg:h-96"
                alt={`Vi har briller fra ${brand.name}`}
              />
              <div className="flex flex-col gap-4">
                <h2>{brand.name}</h2>
                <p>{brand.description1}</p>
                <p>{brand.description2}</p>
              </div>
            </section>
          ))}
          {/* <section className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <img
              src="/brands/moscot/moscot-collection.jpg"
              className="w-full h-44 object-cover object-center lg:w-96 lg:h-96"
              alt="Vi har briller fra Moscot"
            />
            <div className="flex flex-col gap-4">
              <h2>Moscot</h2>
              <p>
                MOSCOT har i over 100 år vært tro mot sine opprinnelige design
                som går tilbake til 1920-tallet. Selskapets grunnlegger, Hyman
                Moscot, immigrerte til USA fra Øst-Europa tidlig på 1900-tallet.
                Siden den gang har selskapet vært drevet av Moscot-familien og
                ledes nå av 4. og 5. generasjon, Dr. Harvey Moscot og sønnen
                hans, Zachary Moscot.
              </p>
              <p>
                MOSCOT består av klassiske retrobriller i ekte New York-stil, og
                designet holder fortsatt i dag. Kolleksjonene er unike og
                autentiske med materialer av titan, stål og acetat.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-6 lg:flex-row-reverse lg:items-center">
            <img
              src="/brands/orgreen/orgreen-optics-collection.jpg"
              className="w-full h-44 object-cover object-center lg:w-96 lg:h-96"
              alt="Vi har briller fra Ørgreen"
            />
            <div className="flex flex-col gap-4">
              <h2>Ørgreen</h2>
              <p>
                Ørgreen er et internasjonalt merke fra København, som lager
                førsteklasses briller i materialer av høy kvalitet. Kjent for
                sine dynamiske design og tekniske presisjon, produserer Ørgreen
                håndlagde rammer med unike fargekombinasjoner.
              </p>
              <p>
                Hele kolleksjonen til Ørgreen er produsert i Japan, et land
                kjent for sin stolte tradisjon innen overlegen produksjon av
                briller og for å anvende den høyeste standarden på hvert trinn i
                prosessen. Å kombinere denne produksjonsetikken med den danske
                designkulturen for presisjon og ekspertise resulterer i et
                produkt som kjennetegnes av kjærlighet for detaljer og varer
                livet ut.
              </p>
            </div>
          </section> */}
          <p className="font-semibold">
            Vi fører også merker som Tom Ford, Ray-Ban, Face a Face, Fleye,
            Traction Production og mange fler.
          </p>
        </div>
      </main>
    </>
  );
}
