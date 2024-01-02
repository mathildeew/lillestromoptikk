import Sale from "../Sale";

export default function Intro() {
  return (
    <section className="bg-grey flex flex-col gap-16 px-4 py-20 md:px-10 md:py-32 lg:py-28">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 z-30 relative">
        <span className="max-w-2xl text-2xl text-bold md:text-5xl lg:text-7xl">
          Din lokale optiker i Lillestrøm
        </span>
        <p>
          Vi feirer nytt år med tilbud på et stort utvalg av innfatninger og
          solbriller.
        </p>
        <p>
          Kom innom og gjør et kupp — og bli kjent med din nye lokale optiker i
          Storgata 22.
        </p>
      </div>

      <Sale />
    </section>
  );
}
