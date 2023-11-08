export default function Hero() {
  return (
    <section className="bg-primary text-center px-3.5 py-24 mb-24">
      <h1 className="text-2xl font-semibold mb-6">
        Velkommen til Lillestrøm Optikk!
      </h1>
      <p className="mb-6">
        14. november 2023 åpner vi dørene og inviterer til stort åpningssalg. Vi
        feirer med tilbud på alle innfatninger og solbriller.
      </p>
      <p className="mb-14">
        Kom innom og gjør et kupp — og bli kjent med din nye lokale optiker i
        Storgata 22.
      </p>

      <img src="src/assets/brille.svg" className="brille rotate-150 mb-32 " />
      <img
        src="src/assets/brille-full.svg"
        className="brille rotate-20 absolute right-0 -bottom-16"
      />

      <div className="">
        <p className="text-8xl font-bold mb-6">50 %</p>
        <p className="text-2xl font-bold uppercase mb-6">
          Alle innfatinger og solbriller
        </p>
      </div>
    </section>
  );
}
