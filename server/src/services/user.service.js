import * as db from './db.service';

export const getByID = async id => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};
