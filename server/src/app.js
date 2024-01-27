import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from './middlewares/logger.middleware';
import errorHandler from './middlewares/errorHandler.middleware';
import recipeRouter from './routes/recipes.route';
import apiRouter from './routes/api.router';
import loginRouter from './routes/login.router';
import registerRouter from './routes/register.route';
import userRouter from './routes/user.router';
import searchRouter from './routes/search.router';
import authenticate from './middlewares/authenticate.middleware';

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger);

app.use('/uploads', express.static('uploads'));
app.use('/api/recipes', recipeRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/search', searchRouter);
app.use('/api/user', authenticate, userRouter);
app.use('/api', apiRouter);
app.use(express.static('dist'));
app.use('*', express.static('dist/index.html'));

app.use(errorHandler);

export default app;
