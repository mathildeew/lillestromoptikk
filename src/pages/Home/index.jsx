import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import ScrollingGlasses from "../../components/ScrollingGlasses";
import Intro from "../../components/Intro";
import Hero from "../../components/Hero";
import TimeForCheck from "../../components/TimeForEyecheck";
import Newsletter from "../../components/Newsletter";

export default function Home() {
  const defaultMetadata = {
    title: "Velkommen til Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`homeMetadata`, defaultMetadata);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />
      {/* <ScrollingGlasses /> */}

      <main data-animate-in="true" data-animation-order="1">
        <Hero />
        <Intro />
        <TimeForCheck />
      </main>
    </>
  );
}
