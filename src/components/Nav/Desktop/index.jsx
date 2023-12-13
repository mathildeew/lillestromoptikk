import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function DesktopNav() {
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
        <li className="flex items-center">
          <p className="mr-2">Om oss</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </li>
      </ul>
    </nav>
  );
}
