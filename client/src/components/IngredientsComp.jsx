import PropTypes from 'prop-types';

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
    <div className="p-10 ">
      <h1 className="flex mx-auto justify-center sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Ingredients:
      </h1>
      {editMode ? (
        <div className="flex mx-auto justify-center m-4">
          <input
            type="text"
            placeholder="Add new ingredient"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button type="button" className="bg-amber-300 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg font-medium" onClick={addIngredient}>
            Add
          </button>
        </div>
      ) : null}
      <ul>
        {ingredients.map((ingredient) => (
          <li className="text-center bg-amber-300 text-2xl text-2xl font-medium" key={ingredient.id}>
            {ingredient.text}
            {editMode ? (
              <button type="button" className="flex mx-auto bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg" onClick={() => deleteIngredient(ingredient.id)}>
                Delete
              </button>
            ) : null}
          </li>
        ))}
      </ul>
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
