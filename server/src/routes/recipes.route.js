import express from 'express';
import * as recipesController from '../controllers/recipes.controller';

const router = express.Router();

router.get('/', recipesController.list);

export default router;
