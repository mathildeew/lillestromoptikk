import Hero from "../../components/Hero";
import SEOHelmet from "../../components/SEOHelmet";
import TimeForCheck from "../../components/TimeForEyecheck";
import Newsletter from "../../components/Newsletter";
import Intro from "../../components/Intro";
import ScrollingGlasses from "../../components/ScrollingGlasses";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={
          "Velkommen til Lillestrøm Optikk, din lokale optiker i Lillestrøm. Bestill synsundersøkelse online og besøk oss i Storgata 22."
        }
      />
      <ScrollingGlasses />

      <main>
        <Hero />
        <Intro />
        <TimeForCheck />
        <Newsletter />
      </main>
    </>
  );
}
