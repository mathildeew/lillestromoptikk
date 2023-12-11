import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <nav className="hidden w-2/3  md:block">
      <ul className="flex justify-between">
        <li>
          <a href={`/#synsundersokelse`}>Synsundersøkelse</a>
        </li>
        <li>
          <Link to="/synstest">Synstest</Link>
        </li>
        <li>
          <a href={`/#kontaktoss`}>Kontakt oss</a>
        </li>
      </ul>
    </nav>
  );
}
