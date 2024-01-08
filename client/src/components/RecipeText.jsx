import { useState } from 'react';
import PropTypes from 'prop-types';

function RecipeText({ isLoggedIn }) {
  const [recipeText, setRecipeText] = useState('');

  const handleRecipeTextChange = (event) => {
    setRecipeText(event.target.value);
  };

  return (
    <div>
      {isLoggedIn ? (
        <textarea
          value={recipeText}
          onChange={handleRecipeTextChange}
          placeholder="Say something about this recipe!"
          rows={8}
        />
      ) : (
        <p>{recipeText}</p>
      )}
    </div>
  );
}

RecipeText.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default RecipeText;
