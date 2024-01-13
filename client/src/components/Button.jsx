/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

function Button({ text, type, addClassName, onClick }) {
  return (
    <button
      type={type}
      className={`bg-orange-500 text-white px-4 py-2 rounded focus:outline-none ${addClassName}`}
      onClick={onClick}
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
};

Button.defaultProps = {
  type: 'button',
  addClassName: '',
  onClick: () => {},
};
export default Button;
