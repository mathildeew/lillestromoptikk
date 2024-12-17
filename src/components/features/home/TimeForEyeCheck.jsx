import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LogMAR from "./LogMAR";

export default function TimeForCheck() {
  return (
    <section className="max-w-7xl mx-4 px-4 py-12 mt-12 border-2 border-black rounded-xl md:px-10 md:mx-10 lg:my-24">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
        <LogMAR />

        <div className="flex flex-col items-start gap-10 lg:order-first">
          <div className="flex flex-col gap-4">
            <h2>På tide med en synsundersøkelse?</h2>
            <p>Merker du at høyre øye vil lese krimroman mens venstre foretrekker romantikk? Eller kanskje begge øynene har blitt litt uenige om skjermopplevelsen? Da høres det ut som det er på tide med en synsundersøkelse.</p>
            <p>Å prioritere regelmessige synsundersøkelser er å investere i fremtiden til øynene dine, uavhengig av alder eller daglige aktiviteter.</p>
          </div>

          <Link to="timebestilling" className="btn-primary bg-green361 flex items-center gap-2" aria-label="Bestill synsundersøkelse">
            Bestill synsundersøkelse
            <FontAwesomeIcon icon={faChevronRight} className="text-md" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
