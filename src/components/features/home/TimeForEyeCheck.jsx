import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LogMAR from "./LogMAR";

export default function TimeForCheck() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 md:px-10">
      <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-2 lg:items-center">
        {/* <LogMAR /> */}

        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col gap-4">
            <h2>På tide med en synsundersøkelse?</h2>
            <p>Merker du at høyre øye vil lese krimroman mens venstre foretrekker romantikk? Eller kanskje begge øynene har blitt litt uenige om skjermopplevelsen? Da høres det ut som det er på tide med en synsundersøkelse.</p>
            <p>Å prioritere regelmessige synsundersøkelser er å investere i fremtiden til øynene dine, uavhengig av alder eller daglige aktiviteter.</p>
          </div>

          <button className="btn-primary bg-green361">
            <Link to={"/timebestilling"} className="flex items-center gap-2">
              Bestill synsundersøkelse
              <FontAwesomeIcon icon={faChevronRight} className="text-md" />
            </Link>
          </button>
        </div>

        <img src="public/brands/masunaga/GMS123_124_2.jpg" className="w-full h-96 object-cover rounded-xl md:h-[600px] lg:h-auto" />
      </div>
    </section>
  );
}
