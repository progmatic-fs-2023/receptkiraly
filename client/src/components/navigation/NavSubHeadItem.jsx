import PropTypes from 'prop-types';

function NavSubHeadItem({ label }) {
  return (
    <p className="block text-xs uppercase text-body/60 hover:text-primary" target="_self">
      <span>{label}</span>
    </p>
  );
}

NavSubHeadItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NavSubHeadItem;
