import { PortableText } from "@portabletext/react";
import { PortableTextFooter } from "../../components/layout/footer/PortableTextFooter";
import { useOpeningHours } from "../../context/GetOpeninghours";
import SEOHelmet from "../../components/SEOHelmet";
import getMetadata from "../../hooks/getMetadata";

export default function Contact() {
  const { openingHours } = useOpeningHours();

  const defaultMetadata = {
    title: "Contact oss → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata("contactMetadata", defaultMetadata);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />

      <main data-animate-in="true">
        <section className="flex flex-col gap-16 items-center pb-16">
          <section className="w-full text-center bg-grey flex flex-col items-center gap-4 px-4 py-10 md:px-10 lg:py-20">
            <div className="text-center max-w-4xl flex flex-col gap-4">
              <h1>Kontakt oss</h1>
              <p>Send oss en e-post, så tar vi kontakt så fort vi kan. Du kan også ringe oss, så får du kanskje svar på det du lurer på med en gang.</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:post@lillestromoptikk.no" className="btn-primary bg-green361 border-black">
                post@lillestromoptikk.no
              </a>
              <a href="tel:64808585" className="btn-primary  bg-green361 border-black">
                tlf. 64 80 85 85
              </a>
            </div>
          </section>

          <div className="w-full max-w-7xl flex flex-col gap-10 px-4 md:px-10 lg:flex-row lg:justify-between lg:gap-32">
            <div className="flex flex-col gap-6 md:gap-10">
              <div>
                <h2>Åpningstider</h2>
                <PortableText value={openingHours.content} components={PortableTextFooter} />
              </div>
              <div>
                <h2>Adresse</h2>
                <p>Lillestrøm Optikk</p>
                <p>Storgata 22</p>
                <p>2000 Lillestrøm</p>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6">
              <span className="font-bold">Du finner oss på hjørnet av Storgata og Teatergata i hjertet av Lillestrøm.</span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.4919183364468!2d11.045527376616!3d59.957163260608915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417d76dce2cd1d%3A0xb0b87f92d509c877!2sLillestr%C3%B8m%20Optikk%20AS!5e0!3m2!1sno!2sno!4v1702301285914!5m2!1sno!2sno" width="100%" height="450" title="Google Maps - Lokasjon for Lillestrøm Optikk"></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
