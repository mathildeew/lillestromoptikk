import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import EyecheckInfo from "../../components/features/booking/EyecheckInfo";
import BookingForm from "../../components/features/booking/BookingForm";

export default function Eyecheck() {
  const defaultMetadata = {
    title: "Bestill time til synsundersøkelse → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`eyecheckMetadata`, defaultMetadata);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />

      <main data-animate-in="true">
        <section className="flex flex-col">
          <EyecheckInfo />
          <BookingForm />
        </section>
      </main>
    </>
  );
}
