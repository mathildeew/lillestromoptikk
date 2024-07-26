import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useOpeningHours } from "../../../context/GetOpeninghours";
import { PortableText } from "@portabletext/react";

export default function Footer() {
  const { openingHours } = useOpeningHours();
  console.log(openingHours);

  return (
    <footer className="bg-grey w-full px-4 py-20 sticky top-[100vh] md:px-10">
      <div className="max-w-7xl grid gap-12 mx-auto md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h3>Åpningstider</h3>
          {/* <div className="flex justify-between max-w-md">
            <div>
              <div className="flex gap-2">
                <p className="font-semibold">Mandag &ndash; onsdag:</p>
                <p>10 &ndash; 17</p>
              </div>

              <div className="flex gap-2">
                <p className="font-semibold">Torsdag:</p>
                <p>10 &ndash; 18</p>
              </div>

              <div className="flex gap-2">
                <p className="font-semibold">Fredag:</p>
                <p>10 &ndash; 17</p>
              </div>

              <div>
                <div className="flex gap-2">
                  <p className="font-semibold">Lørdag: </p>
                  <p>10 &ndash; 15 (oddetallsuker)</p>
                </div>

                <div>
                  <p>Neste åpne lørdager: 3. august, 10. august og 17. august.</p>
                </div>
              </div>
            </div>

            <div></div>
          </div> */}
          <PortableText value={openingHours.content} />
        </div>

        <div className="flex flex-col gap-6">
          <h3>Kontakt oss</h3>
          <div>
            <a href="mailto:post@lillestromoptikk.no">post@lillestromoptikk.no</a>
            <p>64 80 85 85</p>
          </div>

          <div>
            <p>Storgata 22</p>
            <p>2000 Lillestrøm</p>
          </div>

          <div className="flex  gap-6">
            <a href="https://www.facebook.com/lillestromoptikk" aria-label="Følg oss på Facebook" className="hover:text-kleinBlue">
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.instagram.com/lillestromoptikk" aria-label="Følg oss på Instagram" className="hover:text-kleinBlue">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-base">{new Date().getFullYear()} &copy; Lillestrøm Optikk</p>
          <p className="text-base mr-2">
            Utvikling og design av{" "}
            <a href="https://www.mathildeelinor.no" className="text-base underline hover:text-kleinBlue">
              Mathilde Elinor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
