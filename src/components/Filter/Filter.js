import PropTypes from 'prop-types';

export const Filter = ({ filter, getContact }) => {
  return (
    <div>
      <input
        value={filter}
        onChange={getContact}
        placeholder="Search..."
        type="text"
        name="filter"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  getContact: PropTypes.func.isRequired,
};
