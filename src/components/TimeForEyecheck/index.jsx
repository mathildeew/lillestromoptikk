import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import LogMAR from "../LogMAR";

export default function TimeForCheck() {
  return (
    <section className="max-w-7xl flex flex-col gap-12 px-4 py-24 md:px-10 md:py-32 lg:mx-auto lg:px-0">
      <h2>På tide med en synstest?</h2>

      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
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

          <button className="btn-primary border-black">
            <Link
              to={"/timebestilling"}
              className="flex items-center gap-5 hover:gap-10"
            >
              Bestill synsundersøkelse
              <FontAwesomeIcon icon={faArrowRightLong} className="text-2xl" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
