import PropTypes from "prop-types";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function SEOHelmet({ title, desc }) {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={desc} />
        <title>{`${title}`}</title>
      </Helmet>
    </HelmetProvider>
  );
}

SEOHelmet.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
