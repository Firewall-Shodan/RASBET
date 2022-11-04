import { CreateGameController } from '@modules/game/useCases/createGame/CreateGameController';
import { ListAllGamesController } from '@modules/game/useCases/listAllGames/ListAllGamesController';
import { ListGamesController } from '@modules/game/useCases/listGame/ListGamesController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const gameRoutes = Router();

const createGameController = new CreateGameController();
const listGamesController = new ListGamesController();

gameRoutes.post('/games', ensureAuthenticated, createGameController.handle);

gameRoutes.get('/games', ensureAuthenticated, listGamesController.handle);
gameRoutes.get('/games/all', ensureAuthenticated, new ListAllGamesController().handle);

export { gameRoutes };
