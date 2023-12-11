export default function Contact() {
  return (
    <section className="mt-20 px-3.5">
      <h1>Kontakt oss</h1>

      <div className="mb-6">
        <p>64 85 80 80</p>
        <p>post@lillestromoptikk.no</p>
      </div>

      <div className="mb-10">
        <p>Storgata 22</p>
        <p>2000 Lillestrøm</p>
      </div>

      <section className="mb-16">
        <h2>Åpningstider</h2>
        <div className="flex justify-between max-w-sm">
          <div>
            <p>Mandag – onsdag</p>
            <p>Torsdag</p>
            <p>Fredag</p>
            <p>Lørdag</p>
          </div>

          <div>
            <p>10 – 17</p>
            <p>10 – 18</p>
            <p>10 – 17</p>
            <p>10 – 16</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.4919183364468!2d11.045527376616!3d59.957163260608915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417d76dce2cd1d%3A0xb0b87f92d509c877!2sLillestr%C3%B8m%20Optikk%20AS!5e0!3m2!1sno!2sno!4v1702301285914!5m2!1sno!2sno"
          width="350"
          height="450"
        ></iframe>
      </div>
    </section>
  );
}
