import BookingForm from "../../components/Eyecheck/BookingForm";
import EyecheckInfo from "../../components/Eyecheck/EyecheckInfo";
import SEOHelmet from "../../components/SEOHelmet";

export default function Eyecheck() {
  return (
    <>
      <SEOHelmet
        title={"Bestill synsundersøkelse | "}
        content={
          "På tide med en synsundersøkelse? Bestill time i dag hos erfaren optiker med topp moderne utstyr."
        }
      />

      <main className="max-w-5xl px-3.5 py-20 mx-auto flex flex-col gap-12 md:py-32 lg:px-0">
        <EyecheckInfo />
        <hr />
        <BookingForm />
      </main>
    </>
  );
}
