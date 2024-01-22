import express from 'express';
import * as loginController from '../controllers/login.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router();

router.post('/', loginController.login);
router.delete('/', authenticate, loginController.logout);
router.patch('/', authenticate, loginController.renew);

export default router;
