import { AUTH, USER } from '../enums';

export function saveUser(user: IUser) {
  localStorage.setItem(USER.user, JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem(USER.user);
}

export function saveToken(token: string) {
  localStorage.setItem(AUTH.TOKEN, token);
}

export function loadToken() {
  return localStorage.getItem(AUTH.TOKEN);
}
