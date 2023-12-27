import EyecheckInfo from "../../components/EyecheckInfo";
import Hero from "../../components/Hero";
import LogMAR from "../../components/LogMAR";
import SEOHelmet from "../../components/SEOHelmet";
import TimeForCheck from "../../components/TimeForEyecheck";
import Sale from "../../components/Sale";
import { BrandsSlider } from "../../components/BrandsSlider";
import Newsletter from "../../components/Newsletter";
import Intro from "../../components/intro";
import ScrollingGlasses from "../../components/ScrollingGlasses";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={
          "Velkommen til Lillestrøm Optikk, din lokale optiker på Romerriket. Bestill synsundersøkelse online og besøk oss i Storgata 22."
        }
      />
      <ScrollingGlasses />

      <main className="">
        <Hero />
        <section className="flex flex-col gap-12">
          <Intro />

          <Sale />
        </section>

        <TimeForCheck />

        {/*<BrandsSlider /> */}
        <Newsletter />
      </main>
    </>
  );
}
