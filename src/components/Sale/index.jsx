export default function Sale() {
  return (
    <section className="bg-grey pb-24 flex flex-col items-center md:pb-32">
      <div className="max-w-5xl flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-0">
        <div
          className="text-white bg-kleinBlue max-w-sm max-h-xs mx-auto px-10 py-20 flex flex-col items-center gap-10
        md:p-0 md:h-96 md:justify-center md:relative md:right-5"
        >
          <h2 className="uppercase text-9xl md:text-6xl">Salg</h2>
          <span className="text-4xl font-bold">50 - 70%</span>
          <span className="text-md font-bold uppercase text-center">
            På et stort utvalg av innfatninger og solbriller
          </span>
        </div>

        <div className="bg-lightBlue w-full max-w-lg px-4 py-24 md:px-16">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
            recusandae illo omnis natus debitis cum quidem dignissimos magni
            tempora? Tenetur blanditiis delectus provident nostrum nesciunt
            corrupti a quaerat corporis laboriosam!
          </p>
        </div>
      </div>
    </section>
  );
}
