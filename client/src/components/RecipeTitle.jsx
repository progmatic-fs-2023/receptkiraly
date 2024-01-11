import PropTypes from 'prop-types';

function RecipeTitle({ editMode, recipeTitle, setRecipeTitle }) {
  const handleRecipeTitleChange = (event) => {
    setRecipeTitle(event.target.value);
  };

  return (
    <div className="flex justify-center">
      {editMode ? (
        <input
          className="p-2 m-2 bg-amber-300 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"
          value={recipeTitle}
          onChange={handleRecipeTitleChange}
          placeholder="Give a name to your recipe!"
        />
      ) : (
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{recipeTitle}</h1>
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
