import { ICreateGameDTO } from '../dtos/ICreateGameDTO';
import { Game } from '../infra/typeorm/entities/Game';

interface IGamesRepository {
  create(data: ICreateGameDTO): Promise<void>;
  findById(game_id: string): Promise<Game>;
  list({ ids }: { ids: string[] }): Promise<Game[]>;

  all(): Promise<Game[]>;
}

export { IGamesRepository };
