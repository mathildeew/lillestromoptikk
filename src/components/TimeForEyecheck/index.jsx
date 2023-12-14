import { Link } from "react-router-dom";
import LogMAR from "../LogMAR";

export default function TimeForCheck() {
  return (
    <section className="mt-10">
      <h2 className="mb-6">På tide med en synstest?</h2>

      <div className="max-w-2xl mb-6">
        <LogMAR />
      </div>

      <p className="mb-6">
        Har synet på høyre, venstre eller kanskje begge øyne blitt dårligere? Er
        det plutselig vanskelig å lese på nært? Har du plutselig fått hodepine?
        Da kan det være på tide men en kontroll av synet.
      </p>
      <button className="btn-primary mb-6">
        <Link to={"/bestill-synstest"}>Bestill synstest</Link>
      </button>

      <section className="max-w-xl mx-3.5 mb-36">
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
    </section>
  );
}
