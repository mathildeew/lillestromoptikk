import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { booking } from "./index-1.0.mjs";
import "./bookingForm.css";

export default function BookingForm() {
  const pageLoaded = useRef(false);

  useLayoutEffect(() => {
    if (!pageLoaded.current) {
      pageLoaded.current = true;
      booking(); // Kjør booking-funksjonen ved første lasting av siden
    }
  }, []);

  useEffect(() => {
    const mountBooking = () => {
      booking(); // Kjør booking-funksjonen ved lasting av siden
    };

    window.addEventListener("load", mountBooking);

    return () => {
      window.removeEventListener("load", mountBooking); // Rydde opp etterpå
    };
  }, []);

  return (
    <div
      className="coptikk-booking-embed max-w-6xl mx-auto h-full"
      data-member-no="5271"
      data-member-id="829"
      data-domain-name="https://www.coptikk.no"
    ></div>
  );
}
