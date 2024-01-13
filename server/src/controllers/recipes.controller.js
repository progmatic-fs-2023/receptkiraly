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

export const getLatest = async (req, res) => {
  try {
    const count = req.params.count;
    const recipes = await services.listRecipes(count);

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
