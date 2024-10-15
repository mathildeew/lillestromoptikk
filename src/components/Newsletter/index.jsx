import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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

    emailjs.sendForm("service_82iidek", "template_v3dyddg", e.target, "iXpqM_-0f3ssTExHL").then(
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
    <div className="max-w-lg flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
      <label htmlFor="epost">
        {" "}
        <h3>Meld deg på vårt nyhetsbrev* </h3>
      </label>

      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <div className="relative w-full flex flex-col gap-6">
          <input id="epost" type="email" name="user_email" className="bg-white w-full py-3 pl-6 border-2 border-black rounded-full" placeholder="navn@epost.no" required />
          <button value="Send" className="btn-primary bg-green361">
            {btnText}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <input className="bg-white" type="checkbox" role="checkbox" id="mailCheckbox" onChange={handleCheckboxChange} aria-checked={checked} required />
          <label htmlFor="mailCheckbox">
            <p>Ja takk, send meg nyhetsbrev</p>
          </label>
        </div>
      </form>
      <p className="italic">* Kun gode tilbud og informasjon inkludert</p>
    </div>
  );
}
