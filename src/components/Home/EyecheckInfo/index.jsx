import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import LogMAR from "./LogMAR";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EyecheckInfo() {
  const [hover, setHover] = useState(false);

  const handleHoverEnter = () => {
    setHover(true);
  };

  const handleHoverLeave = () => {
    setHover(false);
  };

  return (
    <section className="home-container bg-white px-4 py-20 md:px-10 relative z-30 lg:text-white lg:bg-kleinBlue">
      <div className="flex flex-col gap-16">
        <h2 className="lg:hidden">Bestill synsundersøkelse</h2>

        <div className="flex flex-col gap-8">
          <LogMAR hover={hover} />
          <div className="flex flex-col gap-8">
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
            <div>
              <Link
                to="/timebestilling"
                onMouseEnter={handleHoverEnter}
                onMouseLeave={handleHoverLeave}
                className="group text-white bg-kleinBlue inline-flex overflow-hidden gap-2 items-center px-5 py-2 rounded-full border-2 border-transparent transition-all duration-500 ease-in-out hover:bg-kleinBlue/80 lg:hidden"
              >
                Bestill synsundersøkelse
                <FontAwesomeIcon
                  icon={faLongArrowRight}
                  className="text-xl group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
