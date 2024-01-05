export default function Sale() {
  return (
    <section className="bg-grey pb-24 flex flex-col items-center md:pb-32 lg:pb-48">
      <div className="max-w-5xl flex flex-col  md:flex-row-reverse md:items-center md:gap-0">
        <div
          className="w-full text-white bg-kleinBlue max-w-xs max-h-xs mx-auto px-20 py-10 flex flex-col items-center gap-6 relative top-10
        md:p-0 md:h-96 md:justify-center md:right-5 md:top-0"
        >
          <h2 className="uppercase text-6xl md:text-6xl">Salg</h2>
          <span className="text-4xl font-bold">50 - 70%</span>
        </div>

        <div className="bg-lightBlue w-full px-4 py-24 md:px-16">
          <p className="text-2xl  leading-10  md:text-3xl">
            Nytt år, nye muligheter, nye briller? Vi feirer det nye året med
            salg på et stort utvalg av innfatninger og solbriller.
          </p>
        </div>
      </div>
    </section>
  );
}
