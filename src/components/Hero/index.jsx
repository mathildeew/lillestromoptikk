import ScrollingGlasses from "../ScrollingGlasses";

export default function Hero() {
  return (
    <div className="text-white bg-kleinBlue h-full flex flex-col items-center justify-center">
      <div className="text-black uppercase tracking-wider bg-white w-full px-4 py-32 lg:hidden">
        <h1 className=" z-20 relative">Din lokale optiker</h1>
        <ScrollingGlasses />
      </div>
      <div className="max-w-3xl flex flex-col gap-8 px-4 py-20 lg:px-8">
        <h1 className="hidden lg:inline uppercase tracking-wider">
          Din lokale optiker
        </h1>
        <p className="z-20">
          Med flere års erfaring og stort engasjement for å gi et klart,
          klarere, klarest syn tilbyr vi grundige synsundersøkelser med topp
          moderne utstyr.
        </p>
        <p className="z-20">
          Hos oss finner du også et nøye kuratert utvalg av innfatninger og
          solbriller fra våre favorittmerker — alltid med kvalitet,
          individualitet og varighet i tankene.
        </p>
        <p className="z-20"> Og psst, kaffen står alltid klar!</p>
      </div>
    </div>
  );
}
