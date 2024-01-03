export default function Contact() {
  return (
    <main>
      <div className="max-w-6xl px-3.5 mx-auto mt-20 md:px-10">
        <h1>Kontakt oss</h1>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-32">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <div>
                <p>64 85 80 80</p>
                <a href="mailto: post@lillestromoptikk.no">
                  post@lillestromoptikk.no
                </a>
              </div>

              <div>
                <p>Storgata 22</p>
                <p>2000 Lillestrøm</p>
              </div>
            </div>

            <div>
              <h2>Åpningstider</h2>
              <div className="grid grid-cols-2 max-w-md lg:gap-x-8">
                <p>Mandag &ndash; onsdag</p>
                <p>10&ndash;17</p>
                <p>Torsdag</p>
                <p>10&ndash;18</p>
                <p>Fredag</p>
                <p>10&ndash;17</p>
                <p>Lørdag</p>
                <p>10&ndash;16</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md flex flex-col gap-6">
            <span className="font-bold">
              Du finner oss på hjørnet av Storgata og Teatergata i hjertet av
              Lillestrøm.
            </span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.4919183364468!2d11.045527376616!3d59.957163260608915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417d76dce2cd1d%3A0xb0b87f92d509c877!2sLillestr%C3%B8m%20Optikk%20AS!5e0!3m2!1sno!2sno!4v1702301285914!5m2!1sno!2sno"
              width="100%"
              height="450"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
