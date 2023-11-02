import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title }, { content }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/hgq0xzm.css" />
        <script
          src="https://kit.fontawesome.com/831e6c6172.js"
          crossorigin="anonymous"
        ></script>
        <meta name="description" content={content} />
        <title>Lillestrøm Optikk | {title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
