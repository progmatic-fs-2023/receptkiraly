import PropTypes from 'prop-types';
import Tooltips from './Tooltips';

function RecipeTitle({ editMode, recipeTitle, setRecipeTitle, addClassName }) {
  const handleRecipeTitleChange = (event) => {
    setRecipeTitle(event.target.value);
  };

  return (
    <div>
      {editMode ? (
        <Tooltips title="Give a name to your recipe!">
          <input
            id="recipeTitle"
            type="text"
            className={`w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClassName}`}
            value={recipeTitle}
            onChange={handleRecipeTitleChange}
            placeholder="Recipe name"
          />
        </Tooltips>
      ) : (
        <strong className="text-2xl">{recipeTitle}</strong>
      )}
    </div>
  );
}

RecipeTitle.propTypes = {
  editMode: PropTypes.bool.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  setRecipeTitle: PropTypes.func.isRequired,
  addClassName: PropTypes.string,
};
RecipeTitle.defaultProps = {
  addClassName: '',
};
export default RecipeTitle;
