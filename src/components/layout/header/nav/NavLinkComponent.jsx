import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavLinkComponent = ({ to, text, isMobile = false, animationOrder, onClick }) => (
  <Link to={to} className="navLink font-heading text-lg p-4" onClick={isMobile ? onClick : undefined} animate-in="true" animation-order={animationOrder}>
    {text}
  </Link>
);

NavLinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  animationOrder: PropTypes.number,
};
