import express from 'express';
import multer from 'multer';
import * as recipesController from '../controllers/recipes.controller';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', recipesController.list);
router.get('/:id', recipesController.get);
router.post('/newrecipe', upload.single('image'), recipesController.add);

export default router;
