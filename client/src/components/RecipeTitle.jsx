import PropTypes from 'prop-types';

function RecipeTitle({ editMode, recipeTitle, setRecipeTitle, addClassName }) {
  const handleRecipeTitleChange = (event) => {
    setRecipeTitle(event.target.value);
  };

  return (
    <div>
      {editMode ? (
          <input
            id="recipeTitle"
            type="text"
            className={`w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClassName}`}
            value={recipeTitle}
            onChange={handleRecipeTitleChange}
            placeholder="Recipe name"
          />
      ) : (
        <p>{recipeTitle}</p>
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
