import * as services from '../services/recipes.service';

export const list = async (req, res) => {
  try {
    const recipes = await services.listRecipes();

    if (recipes) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({
        errorMessage: 'There is no recipes...',
      });
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const recipeID = req.params.id
    const recipe = await services.getRecipe(recipeID);

    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({
        errorMessage: 'There is no recipe with that ID.',
      });
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};
