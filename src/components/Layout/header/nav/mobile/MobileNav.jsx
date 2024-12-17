import PropTypes from "prop-types";
import { navLinks } from "../NavLink";
import { NavLinkComponent } from "../NavLinkComponent";

export default function MobileNav({ openMenu, setOpenMenu }) {
  return (
    <nav className={`bg-white w-full h-screen flex flex-col items-end px-6 py-16 absolute z-50 transition-all duration-500 ease-in-out top-16 lg:hidden ${openMenu ? "right-0 opacity-100" : "-right-full opacity-0"}`}>
      <div className="w-full flex flex-col gap-4 items-center">
        {navLinks.map(({ to, text }) => (
          <NavLinkComponent
            key={to}
            to={to}
            text={text}
            isMobile={true}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          />
        ))}
      </div>
    </nav>
  );
}

MobileNav.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};
