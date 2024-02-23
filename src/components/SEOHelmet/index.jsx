import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title, content }) {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/hgq0xzm.css" />
        <script
          src="https://kit.fontawesome.com/831e6c6172.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="identity/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="identity/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="identity/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/identity/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/identity/favicon/safari-pinned-tab.svg"
          color="#1f1bbd"
        />
        <meta name="msapplication-TileColor" content="#1f1bbd" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content={content} />
        <title>Lillestrøm Optikk | {title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
