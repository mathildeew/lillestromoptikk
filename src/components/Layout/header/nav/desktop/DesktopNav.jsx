import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <nav className="hidden w-2/3 lg:block">
      <div className="flex items-center justify-between">
        <Link to="/timebestilling" className="navLink font-heading text-lg p-2">
          Timebestilling
        </Link>
        <Link to="/merker" className="navLink font-heading text-lg p-2">
          Våre merker
        </Link>
        <Link to="/om-oss" className="navLink font-heading text-lg p-2">
          Om oss
        </Link>
        <Link to="/kontakt-oss" className="navLink font-heading text-lg p-2">
          Kontakt
        </Link>
        <a href="https://linsebutikk.coptikk.no/login" className="navLink font-heading text-lg p-2">
          Kjøp linser
        </a>
      </div>
    </nav>
  );
}
