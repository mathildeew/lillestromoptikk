import SEOHelmet from "../../components/SEOHelmet";
import Newsletter from "../../components/Newsletter";
import Intro from "../../components/Intro";
import ScrollingGlasses from "../../components/ScrollingGlasses";
import HomeNav from "../../components/HomeNav";
import Hero from "../../components/Hero";
import BrandsAnimation from "../../components/BrandsAnimation";
import HomeLogMar from "../../components/HomeLogMar";
import HomeContainerSM from "../../components/HomeContainerSM";
import Instagram from "../../components/Instagram";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Velkommen!"}
        content={
          "Velkommen til Lillestrøm Optikk, din lokale optiker i Lillestrøm. Bestill synsundersøkelse online og besøk oss i Storgata 22."
        }
      />
      {/* <ScrollingGlasses /> */}

      <main className="relative top-[88px] lg:top-0">
        <HomeContainerSM />
        <HomeNav />
        <Instagram />
      </main>
    </>
  );
}
