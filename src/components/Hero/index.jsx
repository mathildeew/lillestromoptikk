import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section className="px-4 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl">
          Velkommen{<br />} til{<br />} Lillestrøm Optikk
        </h1>
        <FontAwesomeIcon icon={faArrowDownLong} size="3x" />
      </div>
    </section>
  );
}
