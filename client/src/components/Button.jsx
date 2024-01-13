/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

function Button({ text, type, addClassName, onClick, disabled }) {
  return (
    <button
      type={type}
      className={`custom-button-color border custom-button-border custom-button-shadow text-white px-4 py-1 rounded focus:outline-none mx-1 ${addClassName}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  addClassName: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  addClassName: '',
  onClick: () => {},
  disabled: false,
};
export default Button;
