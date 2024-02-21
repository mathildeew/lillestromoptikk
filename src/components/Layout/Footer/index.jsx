import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-grey flex justify-center px-4 py-20 sm:px-8">
      <div className="w-full max-w-screen-2xl flex flex-col items-center gap-20">
        <div className="w-full flex flex-col gap-16 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:flex  lg:flex-row lg:justify-between">
          <div className="footerGrids w-[250px]">
            <h3>Åpningstider</h3>
            <div className="flex justify-between">
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

          <div className="footerGrids w-fit">
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

            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/lillestromoptikk"
                aria-label="Følg oss på Facebook"
                className="hover:text-kleinBlue"
              >
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
              <a
                href="https://www.instagram.com/lillestromoptikk"
                aria-label="Følg oss på Instagram"
                className="hover:text-kleinBlue"
              >
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </div>
          </div>

          <Newsletter />
        </div>

        <div className="w-full">
          <p className="text-xs">
            {new Date().getFullYear()} &copy; Lillestrøm Optikk
          </p>
          <p className="text-xs">
            Utvikling og design av{" "}
            <a
              href="https://www.mathildeelinor.no"
              className="text-xs underline hover:text-kleinBlue"
            >
              Mathilde Elinor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
