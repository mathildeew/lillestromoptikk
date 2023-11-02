import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title }, { content }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/hgq0xzm.css" />
        <meta name="description" content={content} />
        <title>Lillestrøm Optikk | {title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
