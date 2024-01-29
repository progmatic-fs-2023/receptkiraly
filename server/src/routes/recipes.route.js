import express from 'express';
import { upload } from '../middlewares/imageUpload';
import * as recipesController from '../controllers/recipes.controller';
import authenticate from '../middlewares/authenticate.middleware';

const router = express.Router();

router.get('/', recipesController.list);
router.get('/:id', recipesController.get);
router.get('/latest/:count', recipesController.getLatest);
router.post('/newrecipe', authenticate, upload.single('image'), recipesController.add);
router.patch('/modifyrecipe', upload.single('image'), recipesController.modify);
router.delete('/deleterecipe', recipesController.deleteRecipe);

export default router;
