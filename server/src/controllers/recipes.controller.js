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
  const recipeID = req.params.id;

  try {
    const recipe = await services.getRecipe(recipeID);

    if (recipe) {
      res.status(200).json({recipe});
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

export const add = async (req, res) => {
  const {
    recipeName,
    recipeDescription,
    recipeImg,
    recipeTimeMinutes,
    recipeDifficultyLevel,
    recipeServeCount,
    recipeCategory,
    recipeLabels,
  } = req.body;

  try {
    const newRecipe = await services.addNewRecipe(
      recipeName,
      recipeDescription,
      recipeImg,
      recipeTimeMinutes,
      recipeDifficultyLevel,
      recipeServeCount,
      recipeCategory,
      recipeLabels,
    );

    if (newRecipe) {
      res.status(200).json({newRecipe});
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};
