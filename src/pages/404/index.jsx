import SEOHelmet from "../../components/SEOHelmet";

export default function PageNotFound() {
  return (
    <>
      <SEOHelmet title={"Side ikke funnet"} />

      <section className="h-96 flex flex-col items-center justify-center px-3.5  mt-20 mb-24 border-black border-2">
        <h1 className="text-6xl font-semibold mb-6">Side ikke funnet.</h1>
        <p>Beklager, vi finner ikke innholdet du leter etter!</p>
      </section>
    </>
  );
}
