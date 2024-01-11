import PropTypes from 'prop-types';

function RecipeTitle({ editMode, recipeTitle, setRecipeTitle }) {
  const handleRecipeTitleChange = (event) => {
    setRecipeTitle(event.target.value);
  };

  return (
    <div>
      {editMode ? (
        <input
          className="bg-orange-50"
          value={recipeTitle}
          onChange={handleRecipeTitleChange}
          placeholder="Give a name to your recipe!"
        />
      ) : (
        <h1>{recipeTitle}</h1>
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
