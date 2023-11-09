import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <nav className="hidden w-8/12  md:block">
      <ul className="flex justify-between">
        <li>Synsundersøkelse</li>
        <Link>Bestill time</Link>
        <li>Kontakt oss</li>
      </ul>
    </nav>
  );
}
