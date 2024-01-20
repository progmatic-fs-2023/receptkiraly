/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

function Button({ text, type, addClassName, onClick, disabled, addImage }) {
  return (
    <button
      type={type}
      className={`font-bold custom-button-color border custom-button-border custom-button-shadow text-white px-3 py-1 rounded focus:outline-none mx-1 ${addClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-nowrap flex-row justify-between items-center">
      {addImage && <img src={addImage} alt={`${text} icon`} className="w-5 mr-2" />}
      {text}
      </div>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  addClassName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  addImage: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  addClassName: '',
  onClick: () => {},
  disabled: false,
  addImage: '',
};
export default Button;
