import PropTypes from 'prop-types';

function NavSubHeadListItem({ text, link }) {
  return (
    <li>
      <a
        className="capitalize font-medium text-body text-sm hover:text-primary"
        target="_self"
        href={link + text}
      >
        <span>{text}</span>
      </a>
    </li>
  );
}

NavSubHeadListItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NavSubHeadListItem;
