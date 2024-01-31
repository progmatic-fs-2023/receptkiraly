import PropTypes from 'prop-types';
import Tooltips from './Tooltips';

function RecipeMainCategory({ editMode, selectedMainCategory, setSelectedMainCategory }) {
  function onValueChange(event) {
    setSelectedMainCategory(event.target.value);
  }

  return (
    <div className="flex justify-center"><Tooltips title="Select the recipe category">
      {editMode ? (
        <div className="grid w-[45rem] grid-cols-3 gap-2 rounded-xl p-2 m-4">
          <label htmlFor="meals">
            <input
              type="radio"
              value="meals"
              id="meals"
              checked={selectedMainCategory === 'meals'}
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
              value="desserts"
              id="desserts"
              checked={selectedMainCategory === 'desserts'}
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
              value="beverages"
              id="beverages"
              checked={selectedMainCategory === 'beverages'}
              onChange={onValueChange}
              className="peer hidden"
            />
            <span className="uppercase text-xl block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-950 peer-checked:font-bold peer-checked:text-white">
              Beverage
            </span>
          </label>
        </div>
      ) : (
        <div className="hidden">{selectedMainCategory}</div>
      )}
      </Tooltips>
    </div>
  );
}

RecipeMainCategory.propTypes = {
  editMode: PropTypes.bool.isRequired,
  selectedMainCategory: PropTypes.string.isRequired,
  setSelectedMainCategory: PropTypes.func.isRequired,
};

export default RecipeMainCategory;
