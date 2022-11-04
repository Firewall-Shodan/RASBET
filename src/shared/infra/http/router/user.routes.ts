import { Router } from 'express';
import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from '@modules/users/useCases/deleteUser/DeleteUserController';
import { ListUsersController } from '@modules/users/useCases/listUser/ListUsersController';
import { UpdateUserPasswordController } from '@modules/users/useCases/updateUserPassword/UpdateUserPasswordController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

const createUserController = new CreateUserController();
const updateUserPasswordController = new UpdateUserPasswordController();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();

userRoutes.post('/', createUserController.handle);

userRoutes.patch('/update-password', ensureAuthenticated, updateUserPasswordController.handle);

userRoutes.delete('/delete/:id', ensureAuthenticated, deleteUserController.handle);

userRoutes.get('/users', ensureAuthenticated, listUsersController.handle);

export { userRoutes };
