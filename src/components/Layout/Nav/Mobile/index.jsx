import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav({ openMenu, setOpenMenu }) {
  return (
    <nav
      className={`bg-white w-full h-screen flex flex-col items-end px-6 py-16 absolute z- transition-all duration-500 ease-in-out top-20 lg:hidden ${
        openMenu ? "right-0 opacity-100" : "-right-full opacity-0"
      }`}
    >
      <ul className="w-full flex flex-col gap-14">
        <li className="border-b border-black">
          <Link
            to={"/timebestilling"}
            onClick={() => setOpenMenu(!openMenu)}
            className="px-4"
          >
            Timebestilling
          </Link>
        </li>
        <li className="border-b border-black">
          <Link
            to={"/merker"}
            onClick={() => setOpenMenu(!openMenu)}
            className="px-4"
          >
            Merker
          </Link>
        </li>
        <li className="border-b border-black">
          <Link
            to={"/kontakt-oss"}
            onClick={() => setOpenMenu(!openMenu)}
            className="px-4"
          >
            Kontakt oss
          </Link>
        </li>
        <li className="btn-link">
          <a href="https://linsebutikk.coptikk.no/login">Kjøp linser</a>
          <FontAwesomeIcon icon={faArrowUp} className="rotate-45" />
        </li>
      </ul>
    </nav>
  );
}
