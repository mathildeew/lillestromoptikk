import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <nav className="hidden w-2/3  lg:block">
      <ul className="flex items-center justify-between">
        <li className="relative">
          <Link to="/timebestilling" className="text-lg p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-sm before:-bottom-1 before:right-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black">
            Timebestilling
          </Link>
        </li>
        <li>
          <Link to="/merker" className="text-lg p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-full before:-bottom-1 before:right-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black">
            Våre merker
          </Link>
        </li>
        <li>
          <Link to="/om-oss" className="text-lg p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-sm before:-bottom-1 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black">
            Om oss
          </Link>
        </li>
        <li>
          <Link to="/kontakt-oss" className="text-lg p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-sm before:-bottom-1 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black">
            Kontakt
          </Link>
        </li>
        <li className="text-lg p-1 relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:rounded-sm before:-bottom-1 before:right-0  before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-black">
          <a href="https://linsebutikk.coptikk.no/login" className="mr-4">
            Kjøp linser
          </a>
        </li>
      </ul>
    </nav>
  );
}
