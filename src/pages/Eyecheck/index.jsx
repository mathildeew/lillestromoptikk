import BookingForm from "../../components/BookingForm";
import EyecheckInfo from "../../components/EyecheckInfo";

export default function Eyecheck() {
  return (
    <main className="max-w-5xl px-3.5 py-20 mx-auto flex flex-col gap-12 md:py-32 lg:px-0">
      <EyecheckInfo />
      <hr />
      <BookingForm />
    </main>
  );
}
