import { ICreateGameDTO } from '@modules/game/dtos/ICreateGameDTO';
import { IGamesRepository } from '@modules/game/repositories/IGamesRepository';
import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source';
import { Game } from '../entities/Game';

class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = AppDataSource.getRepository(Game);
  }

  async create({ games }: ICreateGameDTO): Promise<void> {
    await this.repository.save(games);
  }

  async findById(game_id: string): Promise<Game> {
    const game = await this.repository.findOneBy({ game_id });
    return game;
  }

  async list({ ids }: { userId: string; ids: string[] }): Promise<Game[]> {
    const query = this.repository
      .createQueryBuilder('game')
      .innerJoin('game.user', 'user')
      .where('game.game_id = :gameId', { gameId: ids[0] });

    ids
      .filter((i, index) => index > 0)
      .forEach((id, index) => {
        query.orWhere(`game.game_id = :gameId${index}`, { [`gameId${index}`]: id });
      });

    return query.getMany();
  }

  all(): Promise<Game[]> {
    return this.repository.find();
  }
}

export { GamesRepository };
