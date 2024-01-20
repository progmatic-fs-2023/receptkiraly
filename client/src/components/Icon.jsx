import PropTypes from 'prop-types';

function Icon({ imgUrl, text, editMode, addClassName }) {
  return (
    <div className="flex flex-nowrap flex-row items-center my-3">
      <img src={imgUrl} className="h-[31px] w-[31px] grow-0 h-auto w-auto" alt="" />
      {editMode ? (
        <input
          type="number"
          className={`shadow-sm appearance-none border rounded mx-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClassName}`}
        />
      ) : (
        <span className="text-[12px] leading-[18px] ml-[8px] mr-[16px] h5 uppercase whitespace-nowrap">
          {text}
        </span>
      )}
    </div>
  );
}
Icon.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  addClassName: PropTypes.string,
};
Icon.defaultProps = {
  addClassName: '',
};
export default Icon;
