import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link } from "react-router-dom";
import OurBrands from "../../OurBrands";
import ContactUsAnimation from "../../ContactUsAnimation";
import Hero from "../../Hero";
import EyecheckInfo from "../../EyecheckInfo";
import OrderLensesInfo from "../../OrderLensesInfo";

export default function HomeContainerLg() {
  const [hoverBg, setHoverBg] = useState("main");

  return (
    <>
      <div className="w-full h-screen relative top-0 z-20 hidden lg:flex">
        <div className="w-1/2 pt-20">
          <ul className="h-full flex flex-col justify-around items-center">
            <li>
              <Link
                to="/timebestilling"
                className="homeLink"
                onMouseOver={() => setHoverBg("eyecheck")}
                onMouseOut={() => setHoverBg("main")}
              >
                Timebestilling
              </Link>
            </li>
            <li>
              <Link
                to="/merker"
                className="homeLink"
                onMouseOver={() => setHoverBg("brands")}
                onMouseOut={() => setHoverBg("main")}
              >
                Våre merker
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt-oss"
                className="homeLink"
                onMouseOver={() => setHoverBg("contact")}
                onMouseOut={() => setHoverBg("main")}
              >
                Kontakt oss
              </Link>
            </li>
            <li
              className="flex gap-4 items-center"
              onMouseOver={() => setHoverBg("lenses")}
              onMouseOut={() => setHoverBg("main")}
            >
              <a
                className="homeLink"
                href="https://linsebutikk.coptikk.no/login"
              >
                Bestill kontaktlinser
              </a>
              <FontAwesomeIcon
                className={`rotate-45 m-0 ${
                  hoverBg === "lenses" ? "block" : "hidden"
                }`}
                icon={faArrowUp}
                size="2xl"
              />
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full">
          {hoverBg === "main" && <Hero />}
          {hoverBg === "eyecheck" && <EyecheckInfo />}
          {hoverBg === "brands" && <OurBrands />}
          {hoverBg == "contact" && <ContactUsAnimation />}
          {hoverBg === "lenses" && <OrderLensesInfo />}
        </div>
      </div>
    </>
  );
}
