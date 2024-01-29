import PropTypes from 'prop-types';

function PopularThisWeek({ img, label, link, type, typelabel }) {
  return (
    <div>
      <div className="text-body text-center   max-w-[204px]">
        <a
          className="hover:text-orange-400  text-body max-w-[204px]"
          href={`${link}?type=${typelabel}`}
        >
          <span className="capitalize font-medium">Best {type}</span>
          <img
            src={img}
            loading="lazy"
            width="1240"
            className="mb-4 rounded my-hover-class p-2"
            alt=""
          />
        </a>
      </div>
      <span className="capitalize text-left  font-medium text-sm">{label}</span>
    </div>
  );
}

PopularThisWeek.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  typelabel: PropTypes.string.isRequired,
};
export default PopularThisWeek;
