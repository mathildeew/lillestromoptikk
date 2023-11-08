export default function Header() {
  return (
    <>
      <header className="w-full border-black border-2">
        <div className="flex justify-between items-center mx-6 my-3.5">
          <img src="src/assets/logo.svg" className="w-40"></img>
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
      </header>

      <nav className="flex flex-col items-end text-end py-16">
        <ul>
          <li className="mb-4">Synsndersøkelse</li>
          <li className="mb-4">Kontakt oss</li>
        </ul>
      </nav>
    </>
  );
}
