import * as db from './db.service.js';

export const listReceiptsOnLogIn = async () => {
  const result = await db.query('SELECT * FROM recipes');
  return result.rows;
};
