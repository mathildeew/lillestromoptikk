import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";

export default function About() {
  const defaultMetadata = {
    title: "Om oss → Lillestrøm Optikk",
    desc: "",
  };
  const metadata = getMetadata(`aboutMetadata`, defaultMetadata);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />
      <h1>Om oss</h1>
    </>
  );
}
