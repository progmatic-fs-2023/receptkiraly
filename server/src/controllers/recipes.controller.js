import * as services from '../services/recipes.service';
import { preprocess, requireLabels, nRandomByCategory } from '../utils/helpers';

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

export const categorize = async (req, res) => {
  try {
    const recipes = await services.listRecipes();
    if (recipes) {
      res.status(200).json(nRandomByCategory(6, preprocess(recipes)));
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
      res.status(200).json(preprocess(recipe)[0]);
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
    recipeIngredients,
  } = req.body;
  const imagePathBackslash = req.file.path;
  const imagePath = imagePathBackslash.replace(/\\/g, '/'); // EZ állítja át a per jelet adatbásiba lementett kép elérési path stringjében.
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

export const searchRecipes = async (req, res) => {
  let title;
  let username;
  let type;
  let category;
  let labels;

  if (req.query.title) {
    title = req.query.title;
  }

  if (req.query.username) {
    username = req.query.username;
  }

  if (req.query.type) {
    type = req.query.type;
  }

  if (req.query.category) {
    category = req.query.category;
  }

  if (req.query.labels) {
    if (typeof req.query.labels === 'string') {
      labels = [req.query.labels];
    } else {
      labels = req.query.labels;
    }
  }

  try {
    const recipes = await services.listSearchedRecipes({ title, username, type, category, labels });

    if (recipes.length !== 0) {
      res.status(200).json(requireLabels(preprocess(recipes), labels));
    } else {
      res.status(404).json({
        errorMessage: 'There is no recipes with that search filters...',
      });
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};

export const modify = async (req, res) => {
  const {
    recipeID,
    recipeName,
    recipeDescription,
    recipeTimeMinutes,
    recipeDifficultyLevel,
    recipeServeCount,
    recipeCategory,
    recipeLabels,
    recipeIngredients,
  } = req.body;

  let imagePath;

  if (req.file !== undefined) {
    imagePath = `http://localhost:3000/${req.file.path.replace(/\\/g, '/')}`;
  } else {
    imagePath = req.body.image;
  }

  const recipe = await services.modifyRecipe(
    recipeID,
    recipeName,
    recipeDescription,
    recipeTimeMinutes,
    recipeDifficultyLevel,
    recipeServeCount,
    recipeCategory,
    recipeLabels,
    recipeIngredients,
    imagePath,
  );

  if (recipe) {
    res.status(200).json(preprocess(recipe));
  }
};

export const deleteRecipe = async (req, res) => {
  const { recipeID } = req.body;

  const recipe = await services.deleteRecipeFromDB(recipeID);

  if (recipe) {
    res.status(200).json(preprocess(recipe));
  }
};
