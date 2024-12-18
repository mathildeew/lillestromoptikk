import { navLinks } from "../NavLink";
import { NavLinkComponent } from "../NavLinkComponent";

export default function DesktopNav() {
  return (
    <nav className="hidden w-2/3 lg:block">
      <div className="flex items-center justify-between">
        {navLinks.map(({ to, text }, index) => (
          <NavLinkComponent key={to} to={to} text={text} isMobile={false} animate-in={true} animationOrder={index + 1} />
        ))}
      </div>
    </nav>
  );
}
