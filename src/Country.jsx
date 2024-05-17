import PropTypes from "prop-types";

export function Country({ countryname }) {
  return (
    <div>
      <h2>Country</h2>
    </div>
  );
}

Country.propTypes = {
  countryname: PropTypes.string.isRequired,
};
