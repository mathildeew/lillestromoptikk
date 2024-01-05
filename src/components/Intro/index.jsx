import Sale from "../Sale";

export default function Intro() {
  return (
    <section className="bg-grey flex flex-col gap-16 px-4 py-24 md:px-10 md:py-32">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 z-30 relative">
        <h2>Din lokale optiker i Lillestrøm</h2>
        <p>
          Med flere års erfaring og stort engasjement for å gi et klart,
          klarere, klarest syn tilbyr vi grundige synsundersøkelser med topp
          moderne utstyr.
        </p>
        <p>
          Hos oss finner du også et nøye kuratert utvalg av innfatninger og
          solbriller fra våre favorittmerker — alltid med kvalitet,
          individualitet og varighet i tankene.
        </p>
        <p>Og psst, kaffen står alltid klar!</p>
      </div>
    </section>
  );
}
