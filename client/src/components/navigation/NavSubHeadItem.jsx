import PropTypes from 'prop-types';

function NavSubHeadItem({ text }) {
  return (
    <p className="block text-xs uppercase text-body/60 hover:text-primary" target="_self">
      <span>{text}</span>
    </p>
  );
}

NavSubHeadItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavSubHeadItem;
