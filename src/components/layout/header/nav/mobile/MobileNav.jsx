import { Link } from "react-router-dom";

export default function MobileNav({ openMenu, setOpenMenu }) {
  return (
    <nav className={`bg-white w-full h-screen flex flex-col items-end px-6 py-16 absolute z-50 transition-all duration-500 ease-in-out top-16 lg:hidden ${openMenu ? "right-0 opacity-100" : "-right-full opacity-0"}`}>
      <div className="w-full flex flex-col gap-4 items-center">
        <Link to={"/timebestilling"} onClick={() => setOpenMenu(!openMenu)} className="navLink font-heading text-lg p-4">
          Timebestilling
        </Link>
        <Link to={"/merker"} onClick={() => setOpenMenu(!openMenu)} className="navLink font-heading text-lg p-4">
          Våre merker
        </Link>
        <Link to={"/om-oss"} onClick={() => setOpenMenu(!openMenu)} className="navLink font-heading text-lg p-4">
          Om oss
        </Link>
        <Link to={"/kontakt-oss"} onClick={() => setOpenMenu(!openMenu)} className="navLink font-heading text-lg p-4">
          Kontakt oss
        </Link>
        <a href="https://www.coptikk.no/linsebutikk" className="navLink font-heading text-lg p-4">
          Kjøp linser
        </a>
      </div>
    </nav>
  );
}
