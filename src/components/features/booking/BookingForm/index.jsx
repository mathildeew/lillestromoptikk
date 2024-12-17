import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { booking } from "./index-1.1.mjs";
import "./bookingForm.css";

export default function BookingForm() {
  const topRef = useRef(null);
  const pageLoaded = useRef(false);
  const location = useLocation();

  useEffect(() => {
    if (!pageLoaded.current) {
      pageLoaded.current = true;
      booking(); // Kjør booking-funksjonen ved første lasting av siden
    }
  }, []);

  useEffect(() => {
    const mountBooking = () => {
      if (location === "/bestill-synstest") {
        booking(); // Kjør booking-funksjonen ved lasting av siden
      }
    };

    window.addEventListener("load", mountBooking);

    return () => {
      window.removeEventListener("load", mountBooking); // Rydde opp etterpå
    };
  }, []);

  useEffect(() => {
    const handleScrollTotop = (event) => {
      if (event.target.textContent === "Bestill time") {
        topRef.current?.scrollInToView({ behavior: "smoot" });
      }
    };

    document.addEventListener("click", handleScrollTotop);

    return () => {
      document.removeEventListener("click", handleScrollTotop);
    };
  }, []);

  return <div className="coptikk-booking-embed max-w-[1400px] h-full px-4 py-10 md:px-10" data-member-no="5271" data-member-id="829" data-domain-name="https://www.coptikk.no"></div>;
}
