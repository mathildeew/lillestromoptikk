import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { booking } from "./index-1.0.mjs";
import "./index.css";

export default function Eyecheck() {
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

  // useEffect(() => {
  //   const onLoad = () => {
  //     booking();
  //     console.log("hei");
  //   };

  //   window.addEventListener("load", onLoad);

  //   return () => {
  //     window.removeEventListener("load", onLoad);
  //   };
  // }, []);

  return (
    <div
      className="coptikk-booking-embed max-w-6xl mt-20 mx-auto h-full"
      data-member-no="5271"
      data-member-id="829"
      data-domain-name="https://www.coptikk.no"
    ></div>
  );
}
