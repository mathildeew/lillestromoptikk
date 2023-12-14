import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DesktopNav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="hidden w-2/3  md:block">
      <ul className="flex justify-between">
        <li>
          <Link to="/bestill-synstest">Bestill synstest</Link>
        </li>
        <li>
          <a href="https://linsebutikk.coptikk.no/login">Kjøp linser</a>
        </li>
        <li>
          <Link to="/merker">Merker</Link>
        </li>
        <li
          className="flex items-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <p className="mr-2">Om oss</p>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`transition-all duration-300 ease-in-out ${
              !openMenu && "rotate-180"
            }`}
          />
          <ul
            className={`absolute top-20  bg-primary rounded-xl transition-all duration-1000 ease-in-out ${
              openMenu ? "hidden opacity-0 " : "block opacity-100"
            }`}
          >
            <li>
              <Link to={"/kontakt-oss"}>Kontakt oss</Link>
            </li>
            <li>
              <a href="https://www.coptikk.no/oyehelseklinikk">
                Øyehelseklinikk
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
