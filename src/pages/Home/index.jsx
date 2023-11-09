import Hero from "../../components/Hero";
import SEOHelmet from "../../components/SEOHelmet";
import Synsundersokelse from "../../components/Synsundersokelse";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={"Velkommen til Lillestrøm Optikk."}
      />

      <Hero />
      <Synsundersokelse />
    </>
  );
}
