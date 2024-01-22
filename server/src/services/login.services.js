import jwt from 'jsonwebtoken';
import * as db from './db.service';

export const loginUser = async (username, password) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1 AND password_hash = $2', [
    username,
    password,
  ]);
  const user = result.rows[0];

  if (user) {
    const token = jwt.sign({ userId: user.id, username: user.username }, 'secret_key');
    return { user, token };
  }

  return null;
};
