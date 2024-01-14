import * as db from './db.service';

export const listRecipes = async () => {
  const result = await db.query('SELECT * FROM recipes');
  return result.rows;
};

export const listRecipesByUser = async userID => {
  const result = await db.query('SELECT id FROM recipes WHERE user_id = $1', [userID]);
  return result.rows;
};
