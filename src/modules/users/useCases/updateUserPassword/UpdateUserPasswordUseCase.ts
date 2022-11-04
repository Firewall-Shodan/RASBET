import { compare, hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRquest {
  user_id: string;
  new_password: string;
  password: string;
}

@injectable()
class UpdateUserPasswordUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ user_id, password, new_password }: IRquest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user.id) {
      throw new AppError('User not exists!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Password does not match!');
    }

    const passwordHash = await hash(new_password, 8);

    user.password = passwordHash ? passwordHash : user.password;
    await this.usersRepository.create(user);
  }
}

export { UpdateUserPasswordUseCase };
