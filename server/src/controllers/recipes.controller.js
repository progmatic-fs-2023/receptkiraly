import * as services from '../services/recipes.service';
import * as utils from '../utils/helpers';

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

export const getLatest = async (req, res) => {
  try {
    const { count } = req.params;
    const recipes = await services.listRecipes({ count });

    if (recipes) {
      const arr = utils.transformArrayToIntegers(recipes, 'recipe_id');
      res.status(200).json({ ids: arr });
    } else {
      res.status(404).json({
        errorMessage: `Cannot get ${count} latest recipes`,
      });
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};

export const byUserid = async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await services.listRecipes({ userID: id });

    if (recipes) {
      const arr = utils.transformArrayToIntegers(recipes, 'recipe_id');
      res.status(200).json({ ids: arr });
    } else {
      res.status(404).json({
        errorMessage: `Cannot get recipes of user ${id}`,
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
  const imagePath = req.file.path;

  try {
    const imageUrl = `http://localhost:3000/src/uploads/${req.file.filename}`;

    const newRecipe = await services.addNewRecipe(
      recipeName,
      recipeDescription,
      recipeImg,
      imagePath,
      recipeTimeMinutes,
      recipeDifficultyLevel,
      recipeServeCount,
      recipeCategory,
      recipeLabels,
    );

    if (newRecipe) {
      res.status(200).json({ imageUrl });
      res.status(201).send('Recipe created successfully.');
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};
