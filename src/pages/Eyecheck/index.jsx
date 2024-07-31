import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import EyecheckInfo from "../../components/EyecheckInfo";
import BookingForm from "../../components/BookingForm";

export default function Eyecheck() {
  const defaultMetadata = {
    title: "Bestill time til synsundersøkelse → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`eyecheckMetadata`, defaultMetadata);
  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />

      <main className="max-w-5xl px-3.5 py-20 mx-auto flex flex-col gap-12 md:py-32 lg:px-0">
        <EyecheckInfo />
        <hr />
        <BookingForm />
      </main>
    </>
  );
}
