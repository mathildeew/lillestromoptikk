import { navLinks } from "../NavLink";
import { NavLinkComponent } from "../NavLinkComponent";

export default function DesktopNav() {
  return (
    <nav className="hidden w-2/3 lg:block">
      <div className="flex items-center justify-between">
        {navLinks.map(({ to, text }, index) => (
          <NavLinkComponent key={to} to={to} text={text} isMobile={false} animate-in={true} animationOrder={index + 1} />
        ))}
        {/*         
        <Link to="https://www.coptikk.no/bestill-synstest?single=true&current_optician=5271" className="navLink font-heading text-lg p-2" data-animate-in="true" data-animation-order="1">
          Timebestilling
        </Link>
        <Link to="/merker" className="navLink font-heading text-lg p-2" data-animate-in="true" data-animation-order="2">
          Våre merker
        </Link>
        <Link to="/om-oss" className="navLink font-heading text-lg p-2" data-animate-in="true" data-animation-order="3">
          Om oss
        </Link>
        <Link to="/kontakt-oss" className="navLink font-heading text-lg p-2" data-animate-in="true" data-animation-order="4">
          Kontakt oss
        </Link>
        <a href="https://www.coptikk.no/linsebutikk" className="navLink font-heading text-lg p-2" data-animate-in="true" data-animation-order="5">
          Kjøp linser
        </a> */}
      </div>
    </nav>
  );
}
