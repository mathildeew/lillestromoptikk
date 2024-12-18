import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { apiQuieries } from "../sanity/apiQuieries";
import sanityClient from "../sanity/sanityClient";

const OpeningHoursContext = createContext();

export function GetOpeningHours({ children }) {
  const [openingHours, setOpeningHours] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const hours = await sanityClient.fetch(apiQuieries().openingHours);
      setOpeningHours(hours);
    }
    fetchAPI();
  }, []);

  return <OpeningHoursContext.Provider value={{ openingHours }}>{children}</OpeningHoursContext.Provider>;
}

export const useOpeningHours = () => useContext(OpeningHoursContext);

GetOpeningHours.propTypes = {
  children: PropTypes.node,
};
