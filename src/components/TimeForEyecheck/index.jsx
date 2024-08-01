import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import LogMAR from "../LogMAR";

export default function TimeForCheck() {
  return (
    <section className="max-w-7xl flex flex-col items-center gap-12 mx-auto px-4 py-16 md:px-10">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <LogMAR />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2>På tide med en synstest?</h2>
            <p>Merker du at høyre øye vil lese krimroman mens venstre foretrekker romantikk? Eller kanskje begge øynene har blitt litt uenige om skjermopplevelsen? Da høres det ut som det er på tide med en synsundersøkelse.</p>
            <p>Å prioritere regelmessige synsundersøkelser er å investere i fremtiden til øynene dine, uavhengig av alder eller daglige aktiviteter.</p>
          </div>

          <button className="btn-primary bg-green361 w-fit border-black">
            <Link to={"/timebestilling"} className="flex items-center gap-5 hover:gap-10">
              Bestill synsundersøkelse
              <FontAwesomeIcon icon={faArrowRightLong} className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
