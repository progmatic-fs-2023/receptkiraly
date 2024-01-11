import PropTypes from 'prop-types';

function IconContainer({ children }) {
  return (
    <div className="hidden sm:block mt-4">
      <div className="flex justify-center sm:flex-wrap ">{children.map((child) => child)} </div>
    </div>
  );
}

IconContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default IconContainer;
