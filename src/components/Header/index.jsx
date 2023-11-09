import { useEffect } from "react";
import { useState } from "react";

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
      <header className="bg-white w-full h-20 border-black border-2 z-20 absolute">
        <div className="flex justify-between items-center mx-6 my-3.5">
          <img src="src/assets/logo.svg" className="w-40"></img>
          <div
            className="w-10 h-10 flex flex-col justify-around p-1"
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

      <nav
        className={`bg-white w-full text-end flex flex-col items-end px-6 py-16 absolute right-0 transition-all duration-300 ease-in-out z-10 ${
          openMenu ? "top-20" : "-top-full"
        }`}
      >
        <ul>
          <li className="mb-4">Synsundersøkelse</li>
          <li className="mb-4">Kontakt oss</li>
        </ul>
      </nav>
    </>
  );
}
