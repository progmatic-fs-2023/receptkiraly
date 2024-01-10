import PropTypes from 'prop-types';

function NavSubHeadItem({ text, link }) {
  return (
    <a
      className="block text-xs uppercase text-body/60 hover:text-primary"
      target="_self"
      href={link + text}
    >
      <span>{text}</span>
    </a>
  );
}

NavSubHeadItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavSubHeadItem;
