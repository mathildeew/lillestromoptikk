import SEOHelmet from "../../components/SEOHelmet";
import HomeContainerLg from "../../components/Home/HomeContainer/HomeContainerLg";
import HomeContainerSm from "../../components/Home/HomeContainer/HomeContainerSm";
import Instagram from "../../components/Home/Instagram";

export default function Home() {
  return (
    <>
      <SEOHelmet
        title={"Din lokale optiker | "}
        content={
          "Velkommen til Lillestrøm Optikk, din lokale optiker i Lillestrøm. Bestill synsundersøkelse online og besøk oss i Storgata 22."
        }
      />

      <main className="relative top-[88px] lg:top-0">
        <HomeContainerSm />
        <HomeContainerLg />
        <Instagram />
      </main>
    </>
  );
}
