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
      setIngredients([...ingredients, { id: Date.now(), text: newIngredient }]);
      setNewIngredient('');
    }
  };

  const deleteIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

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
            <Button
              type="button"
              text="Add"
              onClick={addIngredient}
            />
            </div>
          </label>
      ) : null}
      <div className="recipe-paper"><div className="recipe-paper-header">Ingredients</div>
      <ul>
        <li><div className="recipe-paper-ingredients"/></li>
        {ingredients.map((ingredient) => (
          <li
            key={ingredient.id}
          ><div className="recipe-paper-ingredients flex flex-nowrap flex-row items-center justify-between my-3">
            {ingredient.text}
            {editMode ? (
              <Button
                type="button"
                text="Remove"
                onClick={() => deleteIngredient(ingredient.id)}
              />
            ) : null}
          </div></li>
        ))}
      </ul><div className="recipe-paper-footer"/></div>
    </div>
  );
}

IngredientsComp.propTypes = {
  editMode: PropTypes.bool.isRequired,
  ingredients: PropTypes.string.isRequired,
  setIngredients: PropTypes.func.isRequired,
  newIngredient: PropTypes.string.isRequired,
  setNewIngredient: PropTypes.func.isRequired,
};

export default IngredientsComp;
