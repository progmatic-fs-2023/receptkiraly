import { useState } from 'react';
import PropTypes from 'prop-types';

function IngredientsComp({ isLoggedIn }) {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');

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
      <h1>Ingredients:</h1>
      {isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Add new ingredient"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
          />
          <button type="button" onClick={addIngredient}>
            Add
          </button>
        </div>
      ) : null}
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.text}
            {isLoggedIn ? (
              <button type="button" onClick={() => deleteIngredient(ingredient.id)}>
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
  isLoggedIn: PropTypes.bool.isRequired,
};

export default IngredientsComp;
