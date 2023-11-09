export default function Hero() {
  return (
    <section className="bg-primary text-center px-3.5 py-24 mb-24">
      <h1 className="text-3xl font-semibold my-24">
        Velkommen til Lillestrøm Optikk!
      </h1>

      <div className="mb-24">
        <img src="src/assets/briller.svg" className="w-80 mx-auto" />

        <p className="text-8xl font-bold mb-6">50 %</p>
        <p className="text-2xl font-bold uppercase mb-6">
          Alle innfatinger og solbriller
        </p>
      </div>

      <p className="mb-6">
        14. november 2023 åpner vi dørene og inviterer til stort åpningssalg. Vi
        feirer med tilbud på alle innfatninger og solbriller.
      </p>
      <p>
        Kom innom og gjør et kupp — og bli kjent med din nye lokale optiker i
        Storgata 22.
      </p>
    </section>
  );
}
