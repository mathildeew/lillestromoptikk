import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function HomeNavLg({ hoverBg, setHoverBg }) {
  return (
    <div className="w-1/2 h-full pt-20 flex flex-col justify-around items-center">
      <Link
        to="/timebestilling"
        className="homeLink"
        onMouseOver={() => setHoverBg("eyecheck")}
        onMouseOut={() => setHoverBg("main")}
      >
        Timebestilling
      </Link>

      <Link
        to="/merker"
        className="homeLink"
        onMouseOver={() => setHoverBg("brands")}
        onMouseOut={() => setHoverBg("main")}
      >
        Våre merker
      </Link>

      <Link
        to="/kontakt-oss"
        className="homeLink"
        onMouseOver={() => setHoverBg("contact")}
        onMouseOut={() => setHoverBg("main")}
      >
        Kontakt oss
      </Link>

      <a
        className="homeLink flex gap-4 items-center ml-10"
        href="https://linsebutikk.coptikk.no/login"
        onMouseOver={() => setHoverBg("lenses")}
        onMouseOut={() => setHoverBg("main")}
      >
        Bestill kontaktlinser
        <FontAwesomeIcon
          className={`rotate-45 transition-all duration-500 ease-in-out ${
            hoverBg === "lenses" ? "opacity-1" : "opacity-0"
          }`}
          icon={faArrowUp}
        />
      </a>
    </div>
  );
}
