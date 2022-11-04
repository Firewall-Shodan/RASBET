import { BetTeam } from './../../infra/typeorm/entities/BetTeam';
import { IBetRepository } from '@modules/bet/repositories/IBetRepository';
import { inject, injectable } from 'tsyringe';
import { v4 as uuidV4 } from 'uuid';

import { AppError } from '@shared/errors/AppError';
import { IBetTeamRepository } from '@modules/bet/repositories/IBetTeamRepository';

interface IRequest {
  userId: string;
  amount: number;
  quota: number;
  teams: {
    awayTeam: string;
    homeTeam: string;
    result: string;
  }[];
}

@injectable()
class CreateBetUseCase {
  constructor(
    @inject('BetRepository')
    private betRepository: IBetRepository,
    @inject('BetTeamRepository')
    private betTeamRepository: IBetTeamRepository,
  ) {}

  async execute({ amount, quota, teams, userId }: IRequest): Promise<any> {
    const bet = await this.betRepository.create({ amount, quota, userId });

    if (!bet) {
      throw new AppError('Create bet failed');
    }

    const data: any[] = [];

    teams.forEach((team) => {
      data.push({
        id: uuidV4(),
        awayTeam: team.awayTeam,
        betId: bet.id,
        homeTeam: team.homeTeam,
        result: team.result,
        createdAt: new Date(),
      });
    });

    return this.betTeamRepository.create({ betTeams: data });
  }
}

export { CreateBetUseCase };
