import { Link } from "react-router-dom";
import SEOHelmet from "../../components/SEOHelmet";

export default function PageNotFound() {
  return (
    <>
      <SEOHelmet title={"404 → Denne siden ser vi ikke!"} />

      <section className="max-w-7xl h-96 flex flex-col items-center justify-center gap-4 px-3.5 mt-20 mx-auto mb-24">
        <h1 className="text-center font-semibold mb-6">Denne siden ser vi ikke!</h1>
        <p>Kanskje vi trenger sterkere briller? Vi finner dessverre ikke siden du ser etter, men du kan alltids klikke deg tilbake til forsiden og få øye på noe annet!</p>
        <Link href="/" className="underline hover:text-green361">
          Til forsiden
        </Link>
      </section>
    </>
  );
}
