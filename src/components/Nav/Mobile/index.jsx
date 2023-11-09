export default function MobileNav({ openMenu }) {
  return (
    <nav
      className={`bg-white w-full text-end flex flex-col items-end px-6 py-16 absolute right-0 transition-all duration-300 ease-in-out z-10  ${
        openMenu ? "top-20" : "-top-full"
      }`}
    >
      <ul>
        <li className="mb-4">Synsundersøkelse</li>
        <li className="mb-4">Kontakt oss</li>
      </ul>
    </nav>
  );
}
