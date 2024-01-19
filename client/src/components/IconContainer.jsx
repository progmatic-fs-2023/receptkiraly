import PropTypes from 'prop-types';

function IconContainer({ children, addClassName }) {
  return (
    <div className="hidden sm:block mt-4">
      <div className={`flex ${addClassName}`}>{children.map((child) => child)} </div>
    </div>
  );
}

IconContainer.propTypes = {
  children: PropTypes.node.isRequired,
  addClassName: PropTypes.string,
};
IconContainer.defaultProps = {
  addClassName: '',
}
export default IconContainer;
