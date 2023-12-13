import { Link } from "react-router-dom";
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function MobileNav({ openMenu }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <nav
      className={`bg-white w-full h-full flex flex-col items-end px-6 py-16 absolute transition-all duration-300 ease-in-out z-10 top-20 ${
        openMenu ? "right-0" : "-right-full"
      }`}
    >
      <ul className="w-full">
        <li className="mb-7 border-b border-black">
          <Link to={"/bestill-synstest"}>Bestill synstest</Link>
        </li>
        <li className="mb-7 border-b border-black">
          <Link to={"/merker"}>Merker</Link>
        </li>
        <li className="mb-7 border-b border-black">
          <a href="https://linsebutikk.coptikk.no/login">Kjøp linser</a>
        </li>
        <li>
          <button
            {...getToggleProps()}
            className="w-full flex justify-between items-center mb-7"
          >
            Om oss
            {isExpanded ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </button>
          <ul {...getCollapseProps()}>
            <li className="mb-7">
              <Link to={"/kontakt-oss"}>Kontakt</Link>
            </li>
            <li className="mb-7">
              <Link>Øyehelseklinikk</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
