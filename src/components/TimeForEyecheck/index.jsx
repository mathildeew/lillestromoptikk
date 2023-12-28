import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import LogMAR from "../LogMAR";

export default function TimeForCheck() {
  return (
    <section className="max-w-6xl flex flex-col gap-12 px-4 py-20 md:px-10 lg:px-20 lg:mx-auto">
      <h2>På tide med en synstest?</h2>

      <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
        <LogMAR />

        <div className="flex flex-col gap-14">
          <p>
            Merker du at høyre øye vil lese krimroman mens venstre foretrekker
            romantikk? Eller kanskje begge øynene har blitt litt uenige om
            skjermopplevelsen? Da høres det ut som det er på tide med en
            synsundersøkelse.
          </p>
          <p>
            Å prioritere regelmessige synsundersøkelser er å investere i
            fremtiden til øynene dine, uavhengig av alder eller daglige
            aktiviteter.
          </p>

          <button className="btn-primary bg-lightBlue border-none">
            <Link
              to={"/bestill-synstest"}
              className="flex items-center gap-5 hover:gap-10"
            >
              Bestill synsundersøkelse
              <FontAwesomeIcon icon={faArrowRightLong} />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
