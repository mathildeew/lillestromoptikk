import { urlFor } from "../../../sanity/urlFor";

export default function Temporary(data) {
  const { data: temporaryData } = data;

  const backgroundImage = temporaryData && temporaryData.image && temporaryData.image.asset ? `url(${urlFor(temporaryData.image.asset).url()})` : "none";

  return (
    <section style={{ backgroundImage }} className="w-full bg-cover bg-center bg-norepeat flex items-center justify-center py-8 md:py-16 lg:py-24">
      {(temporaryData.title || temporaryData.text) && (
        <div className="bg-green361 bg-opacity-60 border-2 border-black rounded-xl flex flex-col gap-0 items-center px-10 py-8">
          {temporaryData.title && <h2>{temporaryData.title}</h2>}
          {temporaryData.text && <p>{temporaryData.text}</p>}
        </div>
      )}
    </section>
  );
}
