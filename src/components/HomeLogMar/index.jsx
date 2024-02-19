import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import LogMAR from "../LogMAR";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeLogMar() {
  const [hover, setHover] = useState(false);

  const handleHoverEnter = () => {
    setHover(true);
  };

  const handleHoverLeave = () => {
    setHover(false);
  };

  return (
    <div className="home-container bg-white lg:bg-kleinBlue lg:text-white">
      <div className="max-w-3xl flex flex-col gap-8 px-4">
        <h2 className="lg:hidden">Synsundersøkelse</h2>
        <LogMAR hover={hover} />

        <p>
          Merker du at høyre øye vil lese krimroman mens venstre foretrekker
          romantikk? Eller kanskje begge øynene har blitt litt uenige om
          skjermopplevelsen? Da høres det ut som det er på tide med en
          synsundersøkelse.
        </p>
        <p>
          Å prioritere regelmessige synsundersøkelser er å investere i fremtiden
          til øynene dine, uavhengig av alder eller daglige aktiviteter.
        </p>

        <Link
          to="/timebestilling"
          onMouseEnter={handleHoverEnter}
          onMouseLeave={handleHoverLeave}
          className="btn-primary border-kleinBlue flex gap-4 items-center justify-center hover:bg-kleinBlue hover:text-white lg:hidden"
        >
          Bestill synsundersøkelse
          <FontAwesomeIcon icon={faLongArrowRight} className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
