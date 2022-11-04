import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListBetsUseCase } from './ListBetsUseCase';

class LIstBetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listBetsUseCase = container.resolve(ListBetsUseCase);

    const bets = await listBetsUseCase.execute({
      userId: request.user.id,
    });

    return response.status(200).json(bets);
  }
}

export { LIstBetsController };
