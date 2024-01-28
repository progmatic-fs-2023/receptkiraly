import PropTypes from 'prop-types';
import Button from './Button';

function IngredientsComp({
  editMode,
  ingredients,
  setIngredients,
  newIngredient,
  setNewIngredient,
}) {
  const addIngredient = () => {
    if (newIngredient.trim() !== '') {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const deleteIngredient = (ingredientToDelete) => {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient !== ingredientToDelete,
    );
    setIngredients(updatedIngredients);
  };

  const getTotalIngredients = () => ingredients.length;

  return (
    <div>
      {editMode ? (
        <label htmlFor="ingredients">
          Add ingredients:
          <div className="flex flex-nowrap flex-row justify-start items-center my-2">
            <input
              id="ingredients"
              type="text"
              placeholder="Add new ingredient"
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
              className="w-full shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <Button type="button" text="Add" onClick={addIngredient} />
          </div>
        </label>
      ) : null}
      <div className="recipe-paper flex flex-col flex-nowrap justify-between">
        <div className="recipe-paper-header">Ingredients</div>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>
              <div className="recipe-paper-ingredients flex justify-between mx-10">
                {ingredient}
                {editMode ? (
                  <button type="button" onClick={() => deleteIngredient(ingredient)}>
                    <img src="/images/delete.svg" alt="Delete ingredient" className="w-6" />
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <div className="recipe-paper-footer mx-8 my-4">Total: {getTotalIngredients()}</div>
      </div>
    </div>
  );
}

IngredientsComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  setIngredients: PropTypes.func.isRequired,
  newIngredient: PropTypes.string.isRequired,
  setNewIngredient: PropTypes.func.isRequired,
};

export default IngredientsComp;
