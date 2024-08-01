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

      <main>
        <EyecheckInfo />
        <hr />
        <BookingForm />
      </main>
    </>
  );
}
