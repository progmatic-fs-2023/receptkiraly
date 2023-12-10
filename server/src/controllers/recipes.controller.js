import * as services from '../services/recipes.service.js';

// GET /api/recipes
export const list = async (req, res) => {
  try {
    const recipes = await services.listReceiptsOnLogIn();

    if (recipes) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({
        errorMessage: 'There is no receipts...',
      });
    }
  } catch (err) {
    res.status(400).json({
      errorMessage: err.message,
    });
  }
};
