import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DesktopNav from "../Nav/Desktop";
import MobileNav from "../Nav/Mobile";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [openMenu, setOpenMenu] = useState(false);

  const hideOnScroll = () => {
    if (window.scrollY > 0) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
  });

  return (
    <>
      <header className="bg-white w-full h-fit flex justify-center absolute z-50 lg:z-10">
        <div className="w-full max-w-[1800px] flex justify-between items-center py-6 px-4 md:px-10">
          <Link to={`/`}>
            <img
              aria-label="Gå til forsiden"
              src="/identity/logo.svg"
              className="w-40"
              alt="Logo for Lillestrøm Optikk"
            />
          </Link>

          {path !== "/" && <DesktopNav />}

          <div
            className="w-7 h-8 relative lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Åpne og lukk menu"
          >
            <span
              className={`w-full h-0.5 bg-black absolute top-2 transition-all duration-500 ease-in-out ${
                openMenu && "translate-x-4 opacity-0"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black absolute top-4 transition-all duration-500 ease-in-out ${
                openMenu && "opacity-100 -rotate-45"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black absolute top-4 transition-all duration-500 ease-in-out ${
                openMenu && "rotate-45"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black absolute top-6 transition-right duration-500 ease-in-out ${
                openMenu && "-translate-x-4 opacity-0"
              }`}
            ></span>
          </div>
        </div>

        <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </header>
    </>
  );
}
