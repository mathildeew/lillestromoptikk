import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LogMAR from "../LogMAR";

export default function TimeForCheck() {
  return (
    <section className="pt-12 px-3.5 border-2">
      <h2 className="uppercase mb-6">På tide med en synstest?</h2>

      <div className="max-w-2xl my-12">
        <LogMAR />
      </div>

      <p className="mb-6">
        Har synet på høyre, venstre eller kanskje begge øyne blitt dårligere? Er
        det plutselig vanskelig å lese på nært? Har du plutselig fått hodepine?
        Da kan det være på tide men en kontroll av synet.
      </p>
      <button className="btn-primary mb-6">
        <Link to={"/bestill-synstest"}>
          Bestill synstest
          <FontAwesomeIcon icon={faArrowRightLong} className="ml-3.5" />
        </Link>
      </button>
    </section>
  );
}
