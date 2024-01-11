import PropTypes from 'prop-types';

function RecipeMainCategory({ editMode, selectedMainCategory, setSelectedMainCategory }) {
  function onValueChange(event) {
    setSelectedMainCategory(event.target.value);
  }

  return (
    <div>
      {editMode ? (
        <div className="m-2 title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 flex justify-around">
          <label htmlFor="meals">
            <input
              type="radio"
              value="Meals"
              id="meals"
              checked={selectedMainCategory === 'Meals'}
              onChange={onValueChange}
            />
            Meals
          </label>

          <label htmlFor="desserts">
            <input
              type="radio"
              value="Desserts"
              id="desserts"
              checked={selectedMainCategory === 'Desserts'}
              onChange={onValueChange}
            />
            Desserts
          </label>

          <label htmlFor="beverages">
            <input
              type="radio"
              value="Beverages"
              id="beverages"
              checked={selectedMainCategory === 'Beverages'}
              onChange={onValueChange}
            />
            Beverages
          </label>
        </div>
      ) : (
        <div>{selectedMainCategory}</div>
      )}
    </div>
  );
}

RecipeMainCategory.propTypes = {
  editMode: PropTypes.bool.isRequired,
  selectedMainCategory: PropTypes.string.isRequired,
  setSelectedMainCategory: PropTypes.func.isRequired,
};

export default RecipeMainCategory;
