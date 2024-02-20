import SlidingGlasses from "../../SlidingGlasses";
import ScrollingGlasses from "../ScrollingGlasses";

export default function Hero() {
  return (
    <div className="text-white bg-kleinBlue h-full flex flex-col items-center justify-center">
      {/* <ScrollingGlasses /> */}
      <SlidingGlasses />

      <div className="max-w-3xl flex flex-col gap-8 px-4 py-20 z-20 lg:px-8">
        <h2>Vi er din lokale optiker</h2>
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
        <p> Og psst, kaffen står alltid klar!</p>
      </div>
    </div>
  );
}
