import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import recipeRouter from './routes/recipes.route';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api/recipes', recipeRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is listening on port 3000....');
});

export default app;
