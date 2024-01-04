import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="flex flex-col gap-16 px-4 pt-20 pb-40 relative z-30 md:px-10 md:pt-32 md:pb-48 lg:py-28 max-w-5xl mx-auto">
      <h1 className=" text-6xl md:text-7xl lg:text-9xl">
        Velkommen{<br />} til{<br />} Lillestrøm Optikk
      </h1>
      {/* <FontAwesomeIcon icon={faArrowDownLong} size="3x" className="w-fit" /> */}
    </section>
  );
}
