import * as db from './db.service';

export const addNewUser = async (username, email, password) => {
  const result = await db.query(
    'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password],
  );
  return result.rows[0];
};
