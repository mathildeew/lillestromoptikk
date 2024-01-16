import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-grey w-full px-4 py-20 sticky top-[100vh] md:px-10">
      <div className="max-w-5xl grid gap-12 mx-auto md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h3>Åpningstider</h3>
          <div className="flex justify-between max-w-sm">
            <div>
              <p>Mandag &ndash; onsdag</p>
              <p>Torsdag</p>
              <p>Fredag</p>
              <p>Lørdag</p>
            </div>

            <div>
              <p>10 &ndash; 17</p>
              <p>10 &ndash; 18</p>
              <p>10 &ndash; 17</p>
              <p>10 &ndash; 16</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3>Kontakt oss</h3>
          <div>
            <a href="mailto:post@lillestromoptikk.no">
              post@lillestromoptikk.no
            </a>
            <p>64 80 85 85</p>
          </div>

          <div>
            <p>Storgata 22</p>
            <p>2000 Lillestrøm</p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.facebook.com/lillestromoptikk"
              aria-label="Følg oss på Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              href="https://www.instagram.com/lillestromoptikk"
              aria-label="Følg oss på Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-base">
            {new Date().getFullYear()} &copy; Lillestrøm Optikk
          </p>
          <p className="text-base mr-2">
            Utvikling og design av{" "}
            <a
              href="https://www.mathildeelinor.no"
              className="text-base underline"
            >
              Mathilde Elinor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
