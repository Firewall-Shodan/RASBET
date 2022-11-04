import { container } from 'tsyringe';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IGamesRepository } from '@modules/game/repositories/IGamesRepository';
import { GamesRepository } from '@modules/game/infra/typeorm/repositories/GamesRepository';
import { BetRepository } from '@modules/bet/infra/typeorm/repositories/BetRepository';
import { BetTeamRepository } from '@modules/bet/infra/typeorm/repositories/BetTeamRepository';
import { IBetRepository } from '@modules/bet/repositories/IBetRepository';
import { IBetTeamRepository } from '@modules/bet/repositories/IBetTeamRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IGamesRepository>('GamesRepository', GamesRepository);

container.registerSingleton<IBetRepository>('BetRepository', BetRepository);

container.registerSingleton<IBetTeamRepository>('BetTeamRepository', BetTeamRepository);
