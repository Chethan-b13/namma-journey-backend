import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import connectDB from './config/db';
import { morganMiddleware } from './api/middlewares/loggerMiddleware';
import { errorHandlingMiddleware } from './api/middlewares/errorHandlingMiddleware';
import authRoutes from './api/routes/authRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morganMiddleware);
app.use(helmet());

// Routes
app.use('/api/auth', authRoutes);
app.use(errorHandlingMiddleware);

export default app;
