import { Game } from '../infra/typeorm/entities/Game';

interface ICreateGameDTO {
  games: Game[];
}

export { ICreateGameDTO };
