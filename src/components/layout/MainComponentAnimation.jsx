import PropTypes from "prop-types";
import { motion as m } from "framer-motion";

export default function MainComponentAnimation({ children }) {
  return (
    <m.main initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full flex flex-col items-center">
      {children}
    </m.main>
  );
}

MainComponentAnimation.propTypes = {
  children: PropTypes.node,
};
