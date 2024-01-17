import express from 'express';
import * as recipesController from '../controllers/recipes.controller';

const router = express.Router();

router.get('/latest/:count', recipesController.getLatest);
router.get('/', recipesController.list);

export default router;
