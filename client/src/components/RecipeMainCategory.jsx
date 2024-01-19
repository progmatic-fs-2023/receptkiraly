import PropTypes from 'prop-types';

function RecipeMainCategory({ editMode, selectedMainCategory, setSelectedMainCategory }) {
  function onValueChange(event) {
    setSelectedMainCategory(event.target.value);
  }

  return (
    <div className="flex justify-center">
      {editMode ? (
        <div className="grid w-[45rem] grid-cols-3 gap-2 rounded-xl p-2 m-4">
          <label htmlFor="meals">
            <input
              type="radio"
              value="Meals"
              id="meals"
              checked={selectedMainCategory === 'Meals'}
              onChange={onValueChange}
              className="peer hidden"
            />
            <span className="uppercase text-xl block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-950 peer-checked:font-bold peer-checked:text-white">
              Meal
            </span>
          </label>

          <label htmlFor="desserts">
            <input
              type="radio"
              value="Desserts"
              id="desserts"
              checked={selectedMainCategory === 'Desserts'}
              onChange={onValueChange}
              className="peer hidden"
            />
            <span className="uppercase text-xl block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-950 peer-checked:font-bold peer-checked:text-white">
              Dessert
            </span>
          </label>

          <label htmlFor="beverages">
            <input
              type="radio"
              value="Beverages"
              id="beverages"
              checked={selectedMainCategory === 'Beverages'}
              onChange={onValueChange}
              className="peer hidden"
            />
            <span className="uppercase text-xl block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-950 peer-checked:font-bold peer-checked:text-white">
              Beverage
            </span>
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
