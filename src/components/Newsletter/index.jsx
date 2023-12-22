import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="text-white bg-darkBlue px-4 py-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <h2>Meld deg på vårt nyhetsbrev for gode tilbud og informasjon</h2>

        <form className="flex flex-col gap-8" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            className=" bg-darkBlue border-2 border-white rounded-md p-5"
            placeholder="navn@epost.no"
            required
          />
          <div className="flex items-center gap-4">
            <input type="checkbox" className="bg-white" required />
            <p>Jeg vil motta nyhetsbrev</p>
          </div>
          <button value="Send" className="btn-primary border-white">
            Meld meg på
          </button>
        </form>
      </div>
    </section>
  );
}
