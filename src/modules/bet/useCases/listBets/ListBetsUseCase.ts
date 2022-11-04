import { IBetRepository } from '@modules/bet/repositories/IBetRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  userId: string;
}

@injectable()
class ListBetsUseCase {
  constructor(
    @inject('BetRepository')
    private betRepository: IBetRepository,
  ) {}

  execute({ userId }: IRequest): Promise<any> {
    return this.betRepository.list({ userId });
  }
}

export { ListBetsUseCase };
