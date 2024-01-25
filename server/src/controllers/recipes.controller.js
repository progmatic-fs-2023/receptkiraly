import * as services from '../services/recipes.service';
import { preprocess } from '../utils/helpers';

export const list = async (req, res) => {
  try {
    const recipes = await services.listRecipes();
    if (recipes) {
      res.status(200).json(preprocess(recipes));
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
    const recipeID = req.params.id;
    const recipe = await services.getRecipe(recipeID);

    if (recipe) {
      res.status(200).json(preprocess(recipe));
      console.log(preprocess(recipe));
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
      res.status(200).json(preprocess(recipes));
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
    const id = req.userID;
    const recipes = await services.listRecipes({ userID: id });

    if (recipes) {
      res.status(200).json(preprocess(recipes));
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
    recipeTimeMinutes,
    recipeDifficultyLevel,
    recipeServeCount,
    recipeCategory,
    recipeLabels,
    recipeIngredients
  } = req.body;
  const imagePath = req.file.path;
  const { userID } = req;
  try {
    const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;

    const newRecipe = await services.addNewRecipe(
      recipeName,
      recipeDescription,
      recipeTimeMinutes,
      recipeDifficultyLevel,
      recipeServeCount,
      recipeCategory,
      recipeLabels,
      recipeIngredients,
      imagePath,
      userID,
    );

    if (newRecipe) {
      res.status(201).json({ imageUrl });
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};
