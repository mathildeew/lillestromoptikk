import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav({ openMenu, setOpenMenu }) {
  return (
    <nav
      className={`bg-white w-full h-screen flex flex-col px-4 pt-8 absolute top-20 transition-all duration-500 ease-in-out md:pt-20 md:px-10 lg:hidden ${
        openMenu ? "right-0 opacity-100" : "-right-full opacity-0"
      }`}
    >
      <div className="w-full flex flex-col gap-8 md:gap-16">
        <Link
          to={"/timebestilling"}
          onClick={() => setOpenMenu(!openMenu)}
          className="underline font-semibold transition-all duration-500 ease-in-out md:text-xl hover:text-kleinBlue"
        >
          Timebestilling
        </Link>
        <Link
          to={"/merker"}
          onClick={() => setOpenMenu(!openMenu)}
          className="underline font-semibold transition-all duration-500 ease-in-out  md:text-xl hover:text-kleinBlue"
        >
          Våre merker
        </Link>
        <Link
          to={"/kontakt-oss"}
          onClick={() => setOpenMenu(!openMenu)}
          className="underline font-semibold transition-all duration-500 ease-in-out  md:text-xl hover:text-kleinBlue"
        >
          Kontakt oss
        </Link>
        <a
          href="https://linsebutikk.coptikk.no/login"
          className="underline font-semibold flex items-center gap-4 transition-all duration-500 ease-in-out  md:text-xl hover:text-kleinBlue"
        >
          Bestill kontaktlinser
          <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
        </a>
      </div>
    </nav>
  );
}
