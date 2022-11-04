import { BetTeam } from '../infra/typeorm/entities/BetTeam';

interface ICreateBetTeamDTO {
  betTeams: BetTeam[];
}

export { ICreateBetTeamDTO };
