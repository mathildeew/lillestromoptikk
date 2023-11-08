export default function Footer() {
  return (
    <footer className="bg-grey px-3.5 py-24 ">
      <section className="mb-12">
        <h2>Kontakt oss</h2>
        <div className="mb-6">
          <p>post@lillestromoptikk.no</p>
          <p>64 80 85 85</p>
        </div>

        <div>
          <p>Storgata 22</p>
          <p>2000 Lillestrøm</p>
        </div>
      </section>

      <section className="mb-12">
        <h2>Åpningstider</h2>
        <div className="flex justify-between">
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
    </footer>
  );
}
