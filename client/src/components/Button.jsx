import PropTypes from 'prop-types';

function handleClick() {
  return;
}
function Button(props) {
  return <button onClick={handleClick}>{props.text}</button>;
}

ButtonProject.propTypes = {
  props: PropTypes.string.isRequired,
};
export default Button;
