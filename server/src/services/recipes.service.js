import * as db from './db.service';

export const listRecipes = async params => {
  let result;
  const { count, userID } = params || {};
  if (!count && !userID) {
    result = await db.query('SELECT * FROM recipes');
  }
  if (count && !userID) {
    result = await db.query(
      'SELECT recipe_id FROM recipes ORDER BY recipe_created_at DESC LIMIT $1',
      [count],
    );
  }
  if (userID && !count) {
    result = await db.query('SELECT recipe_id FROM recipes WHERE user_id = $1', [userID]);
  }
  return result.rows;
};
