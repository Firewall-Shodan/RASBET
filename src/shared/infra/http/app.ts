require('dotenv').config();
import express from 'express';
import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'module-alias/register';
import { AppError } from '../../errors/AppError';
import 'reflect-metadata';
import { router } from './router';
import { AppDataSource } from '../typeorm/data-source';
import cors from 'cors';
const app = express();
AppDataSource.initialize();
import '../../container';

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    message: `Internal server error - ${err.message!}`,
  });
});

export default app;
