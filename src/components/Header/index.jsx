import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DesktopNav from "../Nav/Desktop";
import MobileNav from "../Nav/Mobile";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function hideOnScroll() {
    if (window.scrollY > 3) {
      setOpenMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
  });

  return (
    <>
      <header className="bg-white w-full h-20 flex z-20 md:px-12">
        <div className="w-full max-w-6xl flex justify-between items-center px-6 md:mx-auto md:px-3.5">
          <Link to={`/`}>
            <img
              aria-label="Gå til forsiden"
              src="/assets/identity/logo.svg"
              className="w-36"
              alt="Lillestrøm Optikk logo"
            />
          </Link>

          <DesktopNav />

          <div
            className="w-10 h-10 relative lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Åpne og lukk menu"
          >
            <span
              className={`w-full h-0.5 bg-black absolute top-3 transition-all duration-500 ease-in-out ${
                openMenu && "translate-x-4 opacity-0"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black absolute top-5 transition-all duration-500 ease-in-out ${
                openMenu && "opacity-100 -rotate-45"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black absolute top-5 transition-all duration-500 ease-in-out ${
                openMenu && "rotate-45"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-black absolute top-7 transition-right duration-500 ease-in-out ${
                openMenu && "-translate-x-4 opacity-0"
              }`}
            ></span>
          </div>
        </div>
      </header>

      <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
