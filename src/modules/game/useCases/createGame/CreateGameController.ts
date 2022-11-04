import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameUseCase } from './CreateGameUseCase';

export interface IRequestBody {
  userId: string;
  games: [
    {
      gameId: string;
      oddA: number;
      oddE: number;
      oddB: number;
    },
  ];
}

class CreateGameController {
  async handle(request: Request<unknown, unknown, IRequestBody>, response: Response): Promise<Response> {
    const { userId, games } = request.body;

    const createGameUseCase = container.resolve(CreateGameUseCase);

    await createGameUseCase.execute({ userId, games });

    return response.status(201).send();
  }
}

export { CreateGameController };
