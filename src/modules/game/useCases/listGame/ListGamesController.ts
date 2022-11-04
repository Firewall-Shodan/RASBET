import { Request, Response } from 'express';
import { ListGamesUseCase } from './ListGamesUseCase';

class ListGamesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listGamesUseCase = new ListGamesUseCase();

    const all = await listGamesUseCase.execute();

    return response.json(all);
  }
}

export { ListGamesController };
