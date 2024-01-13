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
            className='p-2'
          />
          <Button
            type="button"
            text="Add"
            className="bg-orange-300 border-0 py-2 px-8 hover:bg-orange-600 text-lg font-medium"
            onClick={addIngredient}/>
        </div>
      ) : null}
      <ul>
        {ingredients.map((ingredient) => (
          <li
            className="flex items-center justify-between bg-orange-300 text-2xl font-medium m-1 p-1 pl-2"
            key={ingredient.id}
          >
            {ingredient.text}
            {editMode ? (
              <Button
                type="button"
                text="Delete"
                className="ml-auto bg-red-700 border-0 py-2 px-8 hover:bg-orange-600 text-lg uppercase"
                onClick={() => deleteIngredient(ingredient.id)}/>
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
