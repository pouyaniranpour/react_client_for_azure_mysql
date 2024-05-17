import PropTypes from "prop-types";

export function Population({ continent = "" }) {
  return (
    <div>
      <h2>Population of {continent}</h2>
    </div>
  );
}

Population.propTypes = {
  continent: PropTypes.string.isRequired,
};
