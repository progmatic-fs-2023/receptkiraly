import * as db from './db.service';

export const listRecipesOnLogIn = async () => {
  const result = await db.query('SELECT * FROM recipes');
  return result.rows;
};
