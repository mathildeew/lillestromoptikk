import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { PortableText } from "@portabletext/react";
import { useOpeningHours } from "../../../context/GetOpeninghours";
import { PortableTextFooter } from "./PortableTextFooter";

export default function Footer() {
  const { openingHours } = useOpeningHours();

  return (
    <footer className="bg-grey w-full flex justify-center px-4 py-16 md:px-10">
      <div className="w-full max-w-[1400px] grid gap-12 md:grid-cols-2">
        <div>
          <h3>Åpningstider</h3>
          <PortableText value={openingHours.content} components={PortableTextFooter} />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3>Kontakt oss</h3>
            <a href="mailto:post@lillestromoptikk.no">post@lillestromoptikk.no</a>
            <p>64 80 85 85</p>
          </div>

          <div>
            <p>Storgata 22</p>
            <p>2000 Lillestrøm</p>
          </div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/lillestromoptikk" aria-label="Følg oss på Facebook" className="hover:text-green361">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.instagram.com/lillestromoptikk" aria-label="Følg oss på Instagram" className="hover:text-green361">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm">{new Date().getFullYear()} &copy; Lillestrøm Optikk</p>
          <p className="text-sm mr-2">
            Utvikling og design av{" "}
            <a href="https://www.mathildeelinor.no" className="text-base underline hover:text-green361">
              Mathilde Elinor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
