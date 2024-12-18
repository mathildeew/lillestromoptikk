import SEOHelmet from "../../components/SEOHelmet";
import GetMetadata from "../../hooks/GetMetadata";
import ContactIntro from "../../components/features/contact/contactIntro";
import StoreInfo from "../../components/features/contact/StoreInfo";
import MainComponentAnimation from "../../components/layout/MainComponentAnimation";

export default function Contact() {
  const metadata = GetMetadata("contactMetadata", {
    title: "Kontakt oss → Lillestrøm Optikk",
    desc: "",
  });

  return (
    <>
      <SEOHelmet {...metadata} />

      <MainComponentAnimation>
        <section className="flex flex-col gap-16 items-center pb-16">
          <ContactIntro />
          <StoreInfo />
        </section>
      </MainComponentAnimation>
    </>
  );
}
