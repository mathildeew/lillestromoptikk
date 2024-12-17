import { useEffect, useState } from "react";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import BookingForm from "../../components/features/booking/BookingForm";
import useAPI from "../../hooks/useAPI";
import { apiQuieries } from "../../sanity/apiQuieries";
import Loader from "../../components/layout/Loader";

export default function Eyecheck() {
  const [eyecheckData, setEyecheckData] = useState([]);

  const defaultMetadata = {
    title: "Bestill time til synsundersøkelse → Lillestrøm Optikk",
    desc: "",
  };

  const metadata = getMetadata(`eyecheckMetadata`, defaultMetadata);

  const { fetchAPI, isLoading, isSuccess, isError } = useAPI();
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAPI(apiQuieries().eyecheckInfo);
      setEyecheckData(data);
    };
    getData();
  }, [fetchAPI]);

  return (
    <>
      <SEOHelmet title={metadata.title} content={metadata.desc} />
      {isLoading && <Loader />}

      {isSuccess && (
        <main data-animate-in="true">
          <section className="flex flex-col">
            <section className="flex flex-col items-center gap-6">
              <section className="w-full text-center bg-grey flex flex-col items-center px-4 py-10 md:px-10 lg:py-20">
                <div className="text-center max-w-4xl flex flex-col gap-4">
                  <h1>Bestill time</h1>
                  <p>{eyecheckData.intro}</p>
                </div>
              </section>
            </section>

            <BookingForm />
          </section>
        </main>
      )}
    </>
  );
}
