import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListAllGamesUseCase } from './ListAllGamesUseCase';

class ListAllGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGamesUseCase = container.resolve(ListAllGamesUseCase);

    const all = await listGamesUseCase.execute();

    return response.json(all);
  }
}

export { ListAllGamesController };
