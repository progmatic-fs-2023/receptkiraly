import PropTypes from 'prop-types';

function Button({ text }) {
  return (
    <button
      type="button"
      className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
