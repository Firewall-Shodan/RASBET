import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateBetUseCase } from './CreateBetUseCase';

interface IRequestBody {
  amount: number;
  quota: number;
  teams: {
    awayTeam: string;
    homeTeam: string;
    result: string;
  }[];
}

class CreateBetController {
  async handle(request: Request<unknown, unknown, IRequestBody>, response: Response): Promise<Response> {
    const { amount, quota, teams } = request.body;

    const createBetUseCase = container.resolve(CreateBetUseCase);

    await createBetUseCase.execute({
      userId: request.user.id,
      amount,
      quota,
      teams,
    });

    return response.status(201).json({
      success: true,
    });
  }
}

export { CreateBetController };
