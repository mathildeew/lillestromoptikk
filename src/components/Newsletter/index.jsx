import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Newsletter() {
  const [btnText, setBtnText] = useState("Meld meg på");
  const [subscribed, setSubscribed] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

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
    <section className=" bg-darkBlue px-4 py-24 md:px-10 md:py-32 md:flex md:items-center">
      <div className="max-w-7xl flex flex-col gap-12 mx-auto ">
        <h2 className="text-white">Meld deg på vårt nyhetsbrev*</h2>
        <form className="flex flex-col gap-12" ref={form} onSubmit={sendEmail}>
          <div className="relative w-full flex flex-col gap-6">
            <input
              id="epost"
              type="email"
              name="user_email"
              className="bg-white w-full py-4 pl-6 border-2 border-black rounded-full"
              placeholder="navn@epost.no"
              required
            />
            <button
              value="Send"
              className="text-white px-4 py-2 border-2 border-white rounded-full md:absolute md:bg-darkBlue  md:right-5 md:top-2  transition-all 0.2s ease-in-out hover:bg-white hover:text-darkBlue lg:hover:border-darkBlue "
            >
              {btnText}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <input
              className="bg-white"
              type="checkbox"
              role="checkbox"
              onChange={handleCheckboxChange}
              aria-checked={checked}
              required
            />
            <p className="text-white">Ja takk, send meg nyhetsbrev</p>
          </div>
        </form>
        <p className="text-white italic">
          * Kun gode tilbud og informasjon inkludert
        </p>
      </div>
    </section>
  );
}
