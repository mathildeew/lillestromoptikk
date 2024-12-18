export default function ContactIntro() {
  return (
    <section className="w-full text-center bg-grey flex flex-col items-center gap-8 px-4 py-10 md:px-10 lg:py-20">
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
  );
}
