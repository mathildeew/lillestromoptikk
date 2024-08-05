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

      <main>
        <section className="flex flex-col gap-10" data-animate-in="true" data-animation-order="1">
          <EyecheckInfo />
          <BookingForm />
        </section>
      </main>
    </>
  );
}
