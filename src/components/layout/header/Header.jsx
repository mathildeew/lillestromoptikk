import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DesktopNav from "./nav/desktop/DesktopNav";
import MobileNav from "./nav/mobile/MobileNav";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function hideOnScroll() {
    if (window.scrollY > 0) {
      setOpenMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
  });

  return (
    <>
      <header className="bg-white w-full flex z-40 relative md:px-12 border-b-black border-b">
        <div className="w-full max-w-7xl flex justify-between items-center px-6 md:mx-auto md:px-3.5">
          <Link to={`/`}>
            <img aria-label="Gå til forsiden" src="/identity/logo.svg" className="w-24 h-auto lg:w-36" alt="Lillestrøm Optikk logo" />
          </Link>

          <DesktopNav />

          <button className="w-8 h-8 relative lg:hidden" onClick={() => setOpenMenu(!openMenu)} aria-label="Åpne og lukk menu">
            <span className={`w-full h-0.5 bg-black absolute left-0 top-2 transition-all duration-500 ease-in-out ${openMenu && "translate-x-4 opacity-0"}`}></span>
            <span className={`w-full h-0.5 bg-black absolute left-0 top-4 transition-all duration-500 ease-in-out ${openMenu && "opacity-100 -rotate-45"}`}></span>
            <span className={`w-full h-0.5 bg-black absolute left-0 top-4 transition-all duration-500 ease-in-out ${openMenu && "rotate-45"}`}></span>
            <span className={`w-full h-0.5 bg-black absolute left-0 top-6 transition-right duration-500 ease-in-out ${openMenu && "-translate-x-4 opacity-0"}`}></span>
          </button>
        </div>
        <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
    </>
  );
}
