export default function Hero() {
  return (
    <section className="bg-primary bg-hero-pattern bg-cover flex justify-center mt-20">
      <div className="bg-primary bg-opacity-75 max-w-2xl my-3.5 py-24 mx-3.5 px-3.5">
        <div className=" mb-14 text-center">
          <h1 className="text-3xl font-semibold uppercase mb-6">
            Velkommen til Lillestrøm Optikk
          </h1>

          <p className="mb-6">
            Din nye lokale optiker på Romerike har åpnet! Du finner oss på
            hjørnet av Storgata og Teatergata i hjertet av Lillestrøm.
          </p>
          <p>
            Vi feirer åpning med gode tilbud. Kom innom og gjør et kupp — og bli
            kjent med din nye lokale optiker i Storgata 22.
          </p>
        </div>

        <div className="text-center">
          <img
            src="/assets/elements/briller.svg"
            className="w-90 mx-auto mb-8 md:w-72"
          />
          <p className="text-8xl font-bold mb-6">50 - 70%</p>
          <p className="text-2xl font-bold uppercase">
            På et stort utvalg av innfatninger og solbriller
          </p>
        </div>
      </div>
    </section>
  );
}
