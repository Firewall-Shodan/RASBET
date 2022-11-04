import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { betRoutes } from './bet.routes';
import { gameRoutes } from './game.routes';

import { userRoutes } from './user.routes';

const router = Router();

router.use('/user', userRoutes);
router.use(authenticateRoutes);
router.use(gameRoutes);
router.use(betRoutes);

export { router };
