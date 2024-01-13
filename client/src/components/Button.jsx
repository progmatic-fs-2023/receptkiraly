/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

function Button({ text, type, addClassName }) {
  return (
    <button type={type} className={`bg-orange-500 text-white px-4 py-2 rounded focus:outline-none ${addClassName}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  addClassName: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  addClassName: '',
};
export default Button;