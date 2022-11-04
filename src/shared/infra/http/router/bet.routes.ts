import { CreateBetController } from '@modules/bet/useCases/createBet/CreateBetController';
import { LIstBetsController } from '@modules/bet/useCases/listBets/LIstBetsController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const betRoutes = Router();

betRoutes.post('/bets', ensureAuthenticated, new CreateBetController().handle);

betRoutes.get('/bets', ensureAuthenticated, new LIstBetsController().handle);

export { betRoutes };
