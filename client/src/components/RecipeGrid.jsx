import PropTypes from 'prop-types';
function RecipeGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">{children}</div>
  );
}
export default RecipeGrid;
RecipeGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
