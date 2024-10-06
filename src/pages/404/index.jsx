import SEOHelmet from "../../components/SEOHelmet";

export default function PageNotFound() {
  return (
    <>
      <SEOHelmet title={"404"} />

      <section className="h-96 flex flex-col items-center justify-center px-3.5  mt-20 mb-24">
        <h1 className="text-6xl font-semibold mb-6">Denne siden ser vi ikke!</h1>
        <p>Kanskje vi trenger sterkere briller? Vi finner dessverre ikke siden du ser etter, men du kan alltids klikke deg tilbake til forsiden og få øye på noe annet!</p>
      </section>
    </>
  );
}
