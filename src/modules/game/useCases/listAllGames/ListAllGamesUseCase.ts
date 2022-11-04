import { Game } from '@modules/game/infra/typeorm/entities/Game';
import { IGamesRepository } from '@modules/game/repositories/IGamesRepository';
import axios from 'axios';
import { inject, injectable } from 'tsyringe';
import { v4 as uuidV4 } from 'uuid';

@injectable()
class ListAllGamesUseCase {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,
  ) {}

  async execute(): Promise<Game[]> {
    const response = await axios.get('http://ucras.di.uminho.pt/v1/games');

    const { data } = response;

    const ids = data.map((item) => item.id);

    const join: any[] = [];

    const games = await this.gamesRepository.list({ ids });

    games.forEach((game) => {
      const looked = data.find((g) => game.game_id === g.id);

      join.push({
        id: uuidV4(),
        odds: game,
        game: looked,
      });
    });

    return join;
  }
}

export { ListAllGamesUseCase };
