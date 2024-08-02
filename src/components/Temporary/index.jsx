import { urlFor } from "../../sanity/urlFor";

export default function Temporary(data) {
  const { data: temporaryData } = data;

  console.log(temporaryData);

  const backgroundImage = temporaryData && temporaryData.image && temporaryData.image.asset ? `url(${urlFor(temporaryData.image.asset).url()})` : "none";

  return (
    <section style={{ backgroundImage }} className="w-full h-[500px] bg-cover bg-center bg-norepeat flex items-center justify-center">
      {(temporaryData.title || temporaryData.text) && (
        <div className="bg-grey bg-opacity-0 flex flex-col gap-3 items-center px-20 py-10">
          {temporaryData.title && <h2>{temporaryData.title}</h2>}
          {temporaryData.text && <p>{temporaryData.text}</p>}
        </div>
      )}
    </section>
  );
}
