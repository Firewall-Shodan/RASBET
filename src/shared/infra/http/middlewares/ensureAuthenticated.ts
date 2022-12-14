import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/AppError';

interface IPlayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '5022762b6b5ed534482e2aba4420c710') as IPlayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
