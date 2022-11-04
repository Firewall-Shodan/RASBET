import { ICreateBetDTO } from '@modules/bet/dtos/ICreateBetDTO';
import { IListBetByUserDTO } from '@modules/bet/dtos/IListBetByUserDTO';
import { IBetRepository } from '@modules/bet/repositories/IBetRepository';

import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source';
import { Bet } from '../entities/Bet';

class BetRepository implements IBetRepository {
  private repository: Repository<Bet>;

  constructor() {
    this.repository = AppDataSource.getRepository(Bet);
  }

  create({ amount, quota, userId }: ICreateBetDTO): Promise<Bet> {
    const bet = new Bet();

    bet.amount = amount;
    bet.quota = quota;
    bet.userId = userId;

    return this.repository.save(bet);
  }

  list({ userId }: IListBetByUserDTO): Promise<Bet[]> {
    return this.repository
      .createQueryBuilder('bet')
      .innerJoinAndSelect('bet.betTeams', 'betTeams')
      .where('bet.userId = :userId', { userId })
      .getMany();
  }
}

export { BetRepository };
