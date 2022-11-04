import { ICreateBetDTO } from '../dtos/ICreateBetDTO';
import { IListBetByUserDTO } from '../dtos/IListBetByUserDTO';
import { Bet } from '../infra/typeorm/entities/Bet';

interface IBetRepository {
  create({ amount, quota, userId }: ICreateBetDTO): Promise<Bet>;
  list({ userId }: IListBetByUserDTO): Promise<Bet[]>;
}

export { IBetRepository };
