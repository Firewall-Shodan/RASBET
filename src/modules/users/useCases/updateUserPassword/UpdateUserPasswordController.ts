import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateUserPasswordUseCase } from './UpdateUserPasswordUseCase';

class UpdateUserPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { new_password, password } = request.body;

    const updateUserPasswordUseCase = container.resolve(UpdateUserPasswordUseCase);

    await updateUserPasswordUseCase.execute({
      user_id: id,
      new_password,
      password,
    });

    return response.status(201).send();
  }
}

export { UpdateUserPasswordController };
