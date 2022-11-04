import { ICreateBetTeamDTO } from '../dtos/ICreateBetTeamDTO';
import { BetTeam } from '../infra/typeorm/entities/BetTeam';

interface IBetTeamRepository {
  create({ betTeams }: ICreateBetTeamDTO): Promise<BetTeam[]>;
}

export { IBetTeamRepository };
