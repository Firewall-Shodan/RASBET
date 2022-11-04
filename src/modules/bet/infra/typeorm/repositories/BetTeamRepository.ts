import { ICreateBetTeamDTO } from '@modules/bet/dtos/ICreateBetTeamDTO';
import { IBetTeamRepository } from '@modules/bet/repositories/IBetTeamRepository';

import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source';

import { BetTeam } from '../entities/BetTeam';

class BetTeamRepository implements IBetTeamRepository {
  private repository: Repository<BetTeam>;

  constructor() {
    this.repository = AppDataSource.getRepository(BetTeam);
  }

  create({ betTeams }: ICreateBetTeamDTO): Promise<BetTeam[]> {
    return this.repository.save(betTeams);
  }
}

export { BetTeamRepository };
