import { inject, injectable } from 'tsyringe';
import { IGamesRepository } from '@modules/game/repositories/IGamesRepository';
import { AppError } from '@shared/errors/AppError';
import { IRequestBody } from './CreateGameController';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { Game } from '@modules/game/infra/typeorm/entities/Game';

@injectable()
class CreateGameUseCase {
  constructor(
    @inject('GamesRepository')
    private gamesRepository: IGamesRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ userId, games }: IRequestBody): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found');
    }

    const sGames: any[] = [];
    for (let i = 0; i < games.length; i++) {
      const game = games[i];

      const gameAlreadyExists = await this.gamesRepository.findById(game.gameId);

      if (gameAlreadyExists) {
        await gameAlreadyExists.remove();
      }

      sGames.push({
        game_id: game.gameId,
        oddA: game.oddA,
        oddE: game.oddE,
        oddB: game.oddB,
        user_id: user.id,
      });
    }

    await this.gamesRepository.create({ games: sGames });
  }
}

export { CreateGameUseCase };
