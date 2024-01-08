import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Newsletter() {
  const [btnText, setBtnText] = useState("Meld meg på");
  const [subscribed, setSubscribed] = useState(false);

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
          setSubscribed(true);
        },
        (error) => {
          console.log(error.text);
          setBtnText("Noe gikk galt!");
        }
      );
  };

  return (
    <section className="text-white bg-darkBlue px-4 py-24 md:px-10 md:py-32">
      <div className="max-w-5xl flex flex-col gap-12 mx-auto">
        <h2>Meld deg på vårt nyhetsbrev for gode tilbud og informasjon</h2>

        <form className="flex flex-col gap-12" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            className=" bg-darkBlue max-w-md border-2 border-white rounded-md p-5"
            placeholder="navn@epost.no"
            required
          />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="bg-white" required />
            <p>Ja takk, send meg nyhetsbrev</p>
          </div>
          <button
            value="Send"
            className={`btn-primary max-w-72 border border-white flex items-center gap-5 transition-all 0.2s ease-in-out hover:gap-10 ${
              subscribed && "hover:gap-5"
            }`}
          >
            {btnText}
            <FontAwesomeIcon
              icon={subscribed ? faCheck : faArrowRightLong}
              className="text-2xl"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
