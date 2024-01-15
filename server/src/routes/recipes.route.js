import express from 'express';
import { upload } from '../middlewares/imageUpload';
import * as recipesController from '../controllers/recipes.controller';

const router = express.Router();

router.get('/', recipesController.list);
router.get('/:id', recipesController.get);
router.get('/latest/:count', recipesController.getLatest);
router.post('/newrecipe', upload.single('image'), recipesController.add);

export default router;
