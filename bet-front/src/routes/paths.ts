import { RootApp, RootAuth } from '~/components';
import {
  LoginPage,
  RegisterPage,
  NotFoundPage,
  HomePage,
  MyBets,
  Specialist,
} from '~/pages';

const routes: IRoutesPath[] = [
  {
    path: '/auth',
    private: false,
    element: RootAuth,
    outlets: [
      {
        path: '/auth/login',
        private: false,
        element: LoginPage,
        name: 'auth.login',
      },
      {
        path: '/auth/register',
        private: false,
        element: RegisterPage,
        name: 'auth.register',
      },
    ],
  },
  {
    path: '/',
    private: true,
    element: RootApp,
    outlets: [
      {
        path: '/',
        private: true,
        element: HomePage,
      },
      {
        path: '/my-bets',
        private: true,
        element: MyBets,
      },
    ],
  },
  {
    path: '/specialist',
    private: true,
    element: RootApp,
    outlets: [
      {
        path: '/specialist',
        private: true,
        element: Specialist,
      },
    ],
  },
  {
    path: '*',
    private: false,
    element: NotFoundPage,
  },
];

export default routes;
