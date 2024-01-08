import PropTypes from 'prop-types';

function Icon({ imgUrl, text }) {
  return (
    <div className="flex items-center opacity-60">
      <img src={imgUrl} className="h-[16px] w-[16px] grow-0 h-auto w-auto" alt="" />
      <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
Icon.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Icon;
