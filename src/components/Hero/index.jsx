import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="px-4 py-20 z-30 relative md:px-10 md:py-32 lg:py-28 max-w-5xl mx-auto">
      <div>
        <h1 className="text-6xl md:text-7xl lg:text-9xl">
          Velkommen{<br />} til{<br />} Lillestrøm Optikk
        </h1>
        <FontAwesomeIcon icon={faArrowDownLong} size="3x" />
      </div>
    </section>
  );
}
