export default function Sale() {
  return (
    <div className="text-white bg-kleinBlue flex flex-col px-3.5 py-24  sm:px-16">
      <div className="mb-12">
        <p className="mb-6">
          Din nye lokale optiker på Romerike har åpnet! Du finner oss på hjørnet
          av Storgata og Teatergata i hjertet av Lillestrøm.
        </p>
        <p>
          Vi feirer åpning med gode tilbud. Kom innom og gjør et kupp — og bli
          kjent med din nye lokale optiker i Storgata 22.
        </p>
      </div>

      <div className="text-center">
        <img src="/assets/elements/briller.svg" className=" mb-12 " />
        <p className="text-8xl font-bold mb-12">50 - 70%</p>
        <p className="text-xl font-bold uppercase">
          På et stort utvalg av innfatninger og solbriller
        </p>
      </div>
    </div>
  );
}
