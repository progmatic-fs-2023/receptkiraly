import PropTypes from 'prop-types';

function RecipeMainCategory({ editMode, selectedOption, setSelectedOption }) {
  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      {editMode ? (
        <div>
          <label htmlFor="meals">
            <input
              type="radio"
              value="Meals"
              id="meals"
              checked={selectedOption === 'Meals'}
              onChange={onValueChange}
            />
            Meals
          </label>

          <label htmlFor="desserts">
            <input
              type="radio"
              value="Desserts"
              checked={selectedOption === 'Desserts'}
              onChange={onValueChange}
            />
            Desserts
          </label>

          <label htmlFor="beverages">
            <input
              type="radio"
              value="Beverages"
              checked={selectedOption === 'Beverages'}
              onChange={onValueChange}
            />
            Beverages
          </label>
        </div>
      ) : (
        <div>{selectedOption}</div>
      )}
    </div>
  );
}

RecipeMainCategory.propTypes = {
  editMode: PropTypes.bool.isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

export default RecipeMainCategory;
