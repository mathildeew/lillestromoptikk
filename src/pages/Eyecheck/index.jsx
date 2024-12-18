import { useEffect, useState } from "react";
import { apiQuieries } from "../../sanity/apiQuieries";
import getMetadata from "../../hooks/getMetadata";
import SEOHelmet from "../../components/SEOHelmet";
import useAPI from "../../hooks/useAPI";
import Loader from "../../components/layout/Loader";
import MainComponentAnimation from "../../components/layout/MainComponentAnimation";
import BookingForm from "../../components/features/booking/BookingForm";
import Error from "../../components/layout/Error";

export default function Eyecheck() {
  const [eyecheckData, setEyecheckData] = useState([]);

  const metadata = getMetadata(`eyecheckMetadata`, {
    title: "Bestill time til synsundersøkelse → Lillestrøm Optikk",
    desc: "",
  });

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
      <SEOHelmet {...metadata} />

      {isLoading && <Loader />}

      {isSuccess && (
        <MainComponentAnimation>
          <section className="w-full flex flex-col">
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
        </MainComponentAnimation>
      )}

      {isError && <Error />}
    </>
  );
}
