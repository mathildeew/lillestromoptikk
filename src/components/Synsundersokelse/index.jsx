import { Link } from "react-router-dom";

export default function Synsundersokelse() {
  return (
    <>
      <div className="max-w-6xl mx-auto ">
        <section className="mt-20 mx-3.5 mb-24 z-10" id="synsundersokelse">
          <h2>Synsundersøkelse</h2>
          <p className="mb-6">
            Med lang erfaring og kunnskap tilbyr vi synsundersøkelser med
            avansert og moderne utstyr.
          </p>
          <p className="mb-6">
            Våre synsundersøkelser inkluderer alltid utmåling av brillestyrker
            og en grundig øyehelseundersøkels. Vi kartlegger ditt behov og
            hjelper deg med å velge riktig løsning. Ved behov utfører vi
            supplerende tester.
          </p>
          <p>
            Vi tar barns syn på alvor og tilbyr derfor en god pris for alle barn
            mellom 5 - 18 år. I tillegg til vanlig synsundersøkelse vurderer vi
            blant annet samsyn og fargesyn. Ved noen tilfeller har barnet rett
            på støtte fra NAV til briller og vi hjelper så klart til med
            søknader.
          </p>
        </section>

        <button
          id="bestilltime"
          className="text-2xl font-semibold uppercase bg-white w-72  border-2 border-black rounded-lg px-3.5 py-5 mx-3.5 mb-24 z-10 hover:shadow-lg"
        >
          <Link to="https://www.coptikk.no/bestill-synstest">Bestill time</Link>
        </button>

        <section className="max-w-xl mx-3.5 mb-36 z-10">
          <h2>Meny</h2>
          <div className="flex justify-between mb-5">
            <p>Synsundersøkelse</p>
            <p>790,–</p>
          </div>

          <div className="flex justify-between mb-5">
            <p>Linsekontroll</p>
            <p>790,–</p>
          </div>

          <div className="flex justify-between items-center mb-5">
            <p>Nytilpasning av kontaktlinser</p>
            <p>1390,–</p>
          </div>

          <div className="flex justify-between items-center mb-5">
            <p>Synsundersøkelse av barn</p>
            <p>590,–</p>
          </div>

          <div className="flex justify-between mb-5">
            <p>Kaffe</p>
            <p>0,–</p>
          </div>
        </section>
      </div>
    </>
  );
}
