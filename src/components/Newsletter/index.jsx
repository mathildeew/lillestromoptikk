import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useCallback } from "react";

export default function Newsletter() {
  const [btnText, setBtnText] = useState("Meld meg på");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const invalid = document.querySelector("form:invalid");

    if (invalid) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, []);

  console.log(formValid);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
          setBtnText("Noe gikk galt!");
        }
      );
  };

  return (
    <section className="newsletter w-fit">
      <div className="flex flex-col gap-8 ">
        <h3>Meld deg på vårt nyhetsbrev*</h3>
        <form className="footerGrids" ref={form} onSubmit={sendEmail}>
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
              className={`px-4 py-2 rounded-full border-2 transition-all 0.3s ease-in-out ${
                formValid
                  ? "text-white  border-white md:bg-kleinBlue"
                  : "border-stone-300 bg-stone-300"
              }`}
            >
              {btnText}
            </button>
          </div>
        </form>
        <p className="italic">* Kun gode tilbud og informasjon inkludert</p>
      </div>
    </section>
  );
}
