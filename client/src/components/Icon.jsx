import PropTypes from 'prop-types';

function Icon({ imgUrl, text, editMode }) {
  return (
    <div className="flex items-center opacity-60">
      <img src={imgUrl} className="h-[31px] w-[31px] grow-0 h-auto w-auto" alt="" />
      {editMode ? (
        <input
          type="text"
          className="pl-2 border-solid border-4 border-orange-500 text-[25px] leading-[18px] ml-[10px] mr-[20px] h5 uppercase whitespace-nowrap m-2"
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
};
export default Icon;
