import PropTypes from 'prop-types';

function NavSubHeadListItem({ itemsArray, link }) {
  return itemsArray.map((element) => (
    <li key={element.key}>
      <a
        className="capitalize font-medium text-body text-sm hover:text-orange-400"
        target="_self"
        href={`${link}?category=${element.value}`}
      >
        <span>{element.label}</span>
      </a>
    </li>
  ));
}

NavSubHeadListItem.propTypes = {
  itemsArray: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
  link: PropTypes.string.isRequired,
};

export default NavSubHeadListItem;
