import BookingForm from "../../components/BookingForm";
import EyecheckInfo from "../../components/EyecheckInfo";

export default function Eyecheck() {
  return (
    <main className="max-w-6xl px-3.5 mt-20 mx-auto flex flex-col gap-12">
      <EyecheckInfo />
      <BookingForm />
    </main>
  );
}
