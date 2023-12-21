import EyecheckInfo from "../../components/EyecheckInfo";
import Hero from "../../components/Hero";
import LogMAR from "../../components/LogMAR";
import SEOHelmet from "../../components/SEOHelmet";
import TimeForCheck from "../../components/TimeForEyecheck";
import Sale from "../../components/Sale";
import { BrandsSlider } from "../../components/BrandsSlider";
import Newsletter from "../../components/Newsletter";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={
          "Velkommen til Lillestrøm Optikk, din lokale optiker på Romerriket. Bestill synsundersøkelse online og besøk oss i Storgata 22."
        }
      />

      <main className="">
        <Hero />
        {/* <Sale />
        <TimeForCheck />
        <BrandsSlider /> */}
        <Newsletter />
      </main>
    </>
  );
}
