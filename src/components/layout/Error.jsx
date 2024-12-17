import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main className="flex flex-col items-center">
      <section className="max-w-7xl h-96 flex flex-col items-center justify-center gap-4 px-3.5 mt-20 mx-auto mb-24">
        <h1 className="text-center font-semibold mb-6">Ojda, noe gikk galt!</h1>
        <p>Kanskje vi trenger sterkere briller? Vi finner dessverre ikke riktig innhold, men du kan alltids klikke deg tilbake til forsiden og få øye på noe annet!</p>
        <Link href="/" className="underline hover:text-green361">
          Til forsiden
        </Link>
      </section>
    </main>
  );
}
