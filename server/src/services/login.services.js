import jwt from 'jsonwebtoken';
import * as db from './db.service';
import { JWT_SECRET } from '../utils/constants';

export const loginUser = async (username, password) => {
  const result = await db.query('SELECT * FROM users WHERE username = $1 AND password_hash = $2', [
    username,
    password,
  ]);
  const user = result.rows[0];

  if (user) {
    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET);
    return { user, token };
  }

  return null;
};

export const renewLogin = async userID => {
  const result = await db.query('SELECT id, username FROM users WHERE id = $1', [userID]);
  const user = result.rows[0];

  if (user) {
    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET);
    return { user, token };
  }

  return null;
};
