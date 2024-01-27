import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants';

export default function authenticate(req, res, next) {
  if (req.get('User-Agent').indexOf('Postman') > -1) {
    if (req.get('userId') === undefined) {
      res.status(401).send('userId key in request headers was not specified');
    } else {
      req.userID = req.get('userId');
      next();
    }
  } else {
    // console.log('Cookie', req.cookies.authToken);
    jwt.verify(req.cookies.authToken, JWT_SECRET, (err, payload) => {
      if (err) {
        res.status(401).send('Not logged in');
      } else {
        req.userID = payload.userId;
        next();
      }
    });
  }
}
