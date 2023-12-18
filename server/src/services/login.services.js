import * as db from './db.service';

export const loginUser = async (username, password) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1 AND password_hash = $2', [
    username,
    password,
  ]);
  return result.rows[0];
};