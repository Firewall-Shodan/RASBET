import { Game } from '@modules/game/infra/typeorm/entities/Game';
import axios from 'axios';

class ListGamesUseCase {
  async execute(): Promise<Game[]> {
    const response = await axios.get('http://ucras.di.uminho.pt/v1/games');

    const { data } = response;

    return data;
  }
}

export { ListGamesUseCase };
