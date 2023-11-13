export default function Hero() {
  return (
    <section className="bg-primary bg-hero-pattern bg-cover flex justify-center mt-20">
      <div className="bg-primary bg-opacity-75 max-w-2xl my-3.5 py-24 mx-3.5 px-3.5">
        <div className=" mb-14 text-center">
          <h1 className="text-3xl font-semibold mb-6">
            Velkommen til Lillestrøm Optikk!
          </h1>

          <p className="mb-6">
            14. november 2023 åpner vi dørene og inviterer til stort
            åpningssalg. Vi feirer med tilbud på alle innfatninger og
            solbriller.
          </p>
          <p>
            Kom innom og gjør et kupp — og bli kjent med din nye lokale optiker
            i Storgata 22.
          </p>
        </div>

        <div className="text-center">
          <img
            src="/assets/elements/briller.svg"
            className="w-90 mx-auto mb-8 md:w-72"
          />
          <p className="text-8xl font-bold mb-6">50 %</p>
          <p className="text-2xl font-bold uppercase">
            Alle innfatninger og solbriller
          </p>
        </div>
      </div>
    </section>
  );
}
