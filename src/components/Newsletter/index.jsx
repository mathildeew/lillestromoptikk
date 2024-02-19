import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const [btnText, setBtnText] = useState("Meld meg på");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isError, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const handleFormValidity = () => {
    setIsFormValid(!document.querySelector("form:invalid"));
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("Melder på...");

    emailjs
      .sendForm(
        "service_82iidek",
        "template_v3dyddg",
        e.target,
        "iXpqM_-0f3ssTExHL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(e.target);
          setBtnText("Påmeldt!");
          setDisableButton(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <section className="newsletter w-fit">
      <div className="flex flex-col gap-8 ">
        <h3>Meld deg på vårt nyhetsbrev*</h3>
        <form
          className="footerGrids"
          ref={form}
          onChange={handleFormValidity}
          onSubmit={sendEmail}
        >
          <div className="footerGrids w-full">
            <input
              id="epost"
              type="email"
              name="user_email"
              className="bg-grey w-full py-2 pl-6 border-2 border-black rounded-full"
              placeholder="navn@epost.no"
              required
            />
            <div className="flex items-center gap-3">
              <input type="checkbox" role="checkbox" required />
              <p>Ja takk, send meg nyhetsbrev</p>
            </div>
            <button
              value="Send"
              disabled={disableButton}
              className={`px-4 py-2 rounded-full border-2 transition-all 0.3s ease-in-out ${
                isFormValid
                  ? "text-white bg-kleinBlue border-kleinBlue"
                  : "border-stone-300 bg-stone-300"
              }`}
            >
              {btnText}
            </button>
            <p className={`text-red-700 ${!isError && "hidden"}`}>
              Noe gikk galt, prøv igjen!
            </p>
          </div>
        </form>
        <p className="italic">* Kun gode tilbud og informasjon inkludert</p>
      </div>
    </section>
  );
}
