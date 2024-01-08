export default function Sale() {
  return (
    <section className="bg-grey flex flex-col items-center pb-24 relative z-10   md:pb-32 lg:pb-48">
      <div className=" bg-kleinBlue w-full flex flex-col items-center px-4 py-36 relative  md:py-40 lg:py-64">
        <span className="font-heading bg-white w-fit h-fit px-5 rounded-full border-2 border-black animate-sale uppercase absolute">
          Salg
        </span>
        <span className="font-heading bg-white w-fit h-fit px-5 rounded-full border-2 border-black   animate-salePercent uppercase absolute">
          50 &mdash; 70%
        </span>
        <div className="text-white flex flex-col items-center gap-5">
          <p className="text-5xl font-bold uppercase relative md:text-7xl">
            Januarsalg
          </p>
          <p className="text-xl md:text-3xl font-bold uppercase ">
            På en mengde utvalge varer
          </p>
        </div>
      </div>
    </section>
  );
}
