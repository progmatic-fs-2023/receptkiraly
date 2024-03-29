import express from 'express';
import * as user from '../controllers/user.controller';
import * as recipe from '../controllers/recipes.controller';

const router = express.Router();
router.get('/', user.profile);
router.get('/recipes', recipe.byUserid);

export default router;
