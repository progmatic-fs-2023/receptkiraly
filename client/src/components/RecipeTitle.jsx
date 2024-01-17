import PropTypes from 'prop-types';

function RecipeTitle({ editMode, recipeTitle, setRecipeTitle }) {
  const handleRecipeTitleChange = (event) => {
    setRecipeTitle(event.target.value);
  };

  return (
    <div>
      {editMode ? (
        <label htmlFor="recipeTitle">
          Recipe Title
          <input
            id="recipeTitle"
            type="text"
            className="w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={recipeTitle}
            onChange={handleRecipeTitleChange}
            placeholder="Give a name to your recipe!"
          />
        </label>
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
};

export default RecipeTitle;
