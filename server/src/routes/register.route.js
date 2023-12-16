import express from 'express';
import * as registerController from '../controllers/register.controller';

const router = express.Router();

router.post('/', registerController.add);

export default router;
