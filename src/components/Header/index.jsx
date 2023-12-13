import { useEffect } from "react";
import { useState } from "react";
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
      <header className="bg-white w-full h-20 flex  z-20">
        <div className="w-full max-w-6xl flex justify-between items-center mx-6 md:mx-auto md:px-3.5">
          <Link to={`/`}>
            <img src="/assets/identity/logo.svg" className="w-40"></img>
          </Link>

          <DesktopNav />

          <div
            className="w-10 h-10 flex flex-col justify-around p-1 md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span
              className={`w-full h-1 bg-black relative transition-all duration-500 ease-in-out ${
                openMenu && "rotate-45 top-2.5"
              }`}
            ></span>
            <span
              className={`w-full h-1 bg-black block transition all duration-100 ease-in-out ${
                openMenu && "opacity-0"
              }`}
            ></span>
            <span
              className={`w-full h-1 bg-black transition-all duration-500 ease-in-out ${
                openMenu && "-rotate-45 relative -top-2.5"
              }`}
            ></span>
          </div>
        </div>
      </header>

      <MobileNav openMenu={openMenu} />
    </>
  );
}
