export default function MobileNav({ openMenu }) {
  return (
    <nav
      className={`bg-white w-full h-80 text-end flex flex-col items-end px-6 py-16 absolute right-0 transition-all duration-300 ease-in-out z-10  ${
        openMenu ? "top-20" : "-top-full"
      }`}
    >
      <ul>
        <li className="mb-6">
          <a href={`/#synsundersokelse`}>Synsundersøkelse</a>
        </li>
        <li className="mb-6">
          <a href={`/#bestilltime`}>Bestill time</a>
        </li>
        <li className="mb-6">
          <a href={`/#kontaktoss`}>Kontakt oss</a>
        </li>
      </ul>
    </nav>
  );
}
