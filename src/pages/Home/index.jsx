import Hero from "../../components/Hero";
import SEOHelmet from "../../components/SEOHelmet";
import Synsundersokelse from "../../components/Synsundersokelse";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={
          "Velkommen til Lillestrøm Optikk, din lokale optiker på Romerriket. Bestill synsundersøkelse online og besøk oss i Storgata 22."
        }
      />

      <Hero />
      <Synsundersokelse />
    </>
  );
}
