import PropTypes from 'prop-types';

function PopularThisWeek({ img, label, link, type, typelabel }) {
  return (
    <div>
      <div className="text-body max-w-[204px]">
        <a
          className="hover:text-orange-400 text-body max-w-[204px]"
          href={`${link}?type=${typelabel}`}
        >
          <span>Best {type}</span>
          <img src={img} loading="lazy" width="1240" className="mb-4 rounded" alt="" />
        </a>
        <span className="capitalize font-medium text-sm">{label}</span>
      </div>
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
