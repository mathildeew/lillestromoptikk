import Hero from "../../components/Hero";
import LogMAR from "../../components/LogMAR";
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
      <main className="h-full flex flex-col mx-auto relative overflow-hidden">
        <Hero />
        <LogMAR />
      </main>
    </>
  );
}
