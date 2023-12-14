import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import recipeRouter from './routes/recipes.route';
import apiRouter from './routes/api.router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api/recipes', recipeRouter);
app.use('/api', apiRouter);
app.use(express.static('dist'));

app.use(errorHandler);

export default app;
