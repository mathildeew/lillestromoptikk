import { Link } from "react-router-dom";
import SEOHelmet from "../../components/SEOHelmet";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={"Velkommen til Lillestrøm Optikk."}
      />
      <h1 className="uppercase absolute left-0 ">Lillestrøm Optikk</h1>

      <div className="w-fit flex flex-col m-24">
        <button className="border-2 border-secondary rounded-lg p-3 mb-10 hover:cursor-zoom-in">
          <Link
            to="https://www.coptikk.no/bestill-synstest"
            className="text-2xl uppercase p-1 hover:cursor-zoom-in"
          >
            Bestill time
          </Link>
        </button>

        <div className="">
          <p>9-17 (10-17)</p>
          <p>Storgata 22</p>
          <p>64 80 85 85</p>
          <Link to="post@lillestromoptikk.no">post@lillestromoptikk.no</Link>
        </div>
      </div>
    </>
  );
}
