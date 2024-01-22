import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants';

export default function authenticate(req, res, next) {
  jwt.verify(req.cookies.authToken, JWT_SECRET, (err, payload) => {
    if (err) {
      res.status(401).send('Not logged in');
    } else {
      req.userID = payload.userId;
      next();
    }
  });
}
