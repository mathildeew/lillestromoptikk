import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-grey w-full px-3.5 py-24 z-20 relative ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2>Åpningstider</h2>
          <div className="flex justify-between max-w-sm">
            <div>
              <p>Mandag – onsdag</p>
              <p>Torsdag</p>
              <p>Fredag</p>
              <p>Lørdag</p>
            </div>

            <div>
              <p>10 – 17</p>
              <p>10 – 18</p>
              <p>10 – 17</p>
              <p>10 – 16</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2>Kontakt oss</h2>
          <div className="mb-6">
            <p>post@lillestromoptikk.no</p>
            <p>64 80 85 85</p>
          </div>

          <div>
            <p>Storgata 22</p>
            <p>2000 Lillestrøm</p>
          </div>
        </div>

        <div className="mb-12">
          <h2>Sosiale medier</h2>
          <FontAwesomeIcon icon={faFacebook} size="2x" className="mr-2 p-1" />
          <FontAwesomeIcon icon={faInstagram} size="2x" className="p-1" />
        </div>

        <div>
          <p>2023 &copy; Lillestrøm Optikk</p>
          <div className="flex">
            <p className="mr-2">Utvikling og design av</p>
            <a className="underline">Mathilde Elinor</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
