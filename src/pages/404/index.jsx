import SEOHelmet from "../../components/SEOHelmet";

export default function PageNotFound() {
  return (
    <>
      <SEOHelmet title={"Side ikke funnet"} />
      <h1 className="uppercase absolute left-0 ">Lillestrøm Optikk</h1>

      <div className="flex flex-col items-center justify-center">
        <i class="fa-solid fa-mug-hot text-5xl mb-5"></i>
        <p>Side ikke funnet.</p>
      </div>
    </>
  );
}
