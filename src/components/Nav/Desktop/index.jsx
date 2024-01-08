import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function DesktopNav() {
  const [rotateArrow, setRotateArrow] = useState(false);

  return (
    <nav className="hidden w-2/3  lg:block">
      <ul className="flex items-center justify-between">
        <li className="relative">
          <Link
            to="/timebestilling"
            className="p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-sm before:-bottom-1 before:right-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black"
          >
            Timebestilling
          </Link>
        </li>
        <li>
          <Link
            to="/merker"
            className="p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-full before:-bottom-1 before:right-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black"
          >
            Merker
          </Link>
        </li>
        <li>
          <Link
            to="/kontakt-oss"
            className="p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-sm before:-bottom-1 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black"
          >
            Kontakt oss
          </Link>
        </li>
        <li className="text-white bg-kleinBlue flex items-center gap-1 rounded-full px-5 py-1">
          <a
            href="https://linsebutikk.coptikk.no/login"
            className="mr-4"
            onMouseOver={() => setRotateArrow(true)}
            onMouseOut={() => setRotateArrow(false)}
          >
            Kjøp linser
          </a>
          <FontAwesomeIcon
            icon={faArrowUp}
            className={`rotate-45 transition-all duration-200 ease-in-out ${
              rotateArrow && "translate-x-0.5 -translate-y-0.5"
            }`}
          />
        </li>
      </ul>
    </nav>
  );
}
