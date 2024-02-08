import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Newsletter from "../../Newsletter";

export default function Footer() {
  return (
    <footer className="bg-grey w-full flex justify-center px-4 py-20 sticky top-[100vh]">
      <div className="max-w-9xl grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-32">
        <Newsletter />

        <div className="flex flex-col gap-6">
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

        <div className="w-fit flex flex-col gap-6">
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

        <div>
          <p className="text-base">
            {new Date().getFullYear()} &copy; Lillestrøm Optikk
          </p>
          <p className="text-base mr-2">
            Utvikling og design av{" "}
            <a
              href="https://www.mathildeelinor.no"
              className="text-base underline hover:text-kleinBlue"
            >
              Mathilde Elinor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
