export default function Sale() {
  return (
    <section className=" bg-kleinBlue w-full flex flex-col items-center px-4 py-36 relative z-10  md:py-40 lg:py-64">
      <span className="font-heading bg-white w-fit h-fit px-5 rounded-full border-2 border-black animate-sale uppercase absolute">
        Salg
      </span>
      <span className="font-heading bg-white w-fit h-fit px-5 rounded-full border-2 border-black   animate-salePercent uppercase absolute">
        50 &mdash; 70%
      </span>
      <div className="text-white flex flex-col items-center gap-5 relative z-20">
        <p className="text-5xl font-bold uppercase  md:text-7xl lg:text-8xl">
          Januarsalg
        </p>
        <p className="text-xl font-bold uppercase md:text-3xl lg:text-4xl">
          På en mengde utvalge varer
        </p>
      </div>
    </section>
  );
}
