import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const user_id = id;
    await deleteUserUseCase.execute(user_id);

    return response.status(201).send();
  }
}
export { DeleteUserController };
