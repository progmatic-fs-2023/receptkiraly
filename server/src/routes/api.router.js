import { Router } from 'express';
import * as apiController from '../controllers/api.controller.js';

const router = Router();

router.get('/', apiController.getApi);
router.get('recipes', apiController.getApi);


export default router;
