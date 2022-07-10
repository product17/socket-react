import { postData } from './utils';

export const authUser = (user) => postData('/users/auth', user);
export const createUser = (user) => postData('/users', user);
export const forgotPassword = (userIdentifier) => postData('/users/password-reset-token', userIdentifier);
export const getUser = (id) => fetch(`/users/${id}`);
export const resetPasswordWithToken = (data) => postData('/users/reset-password', data);

export default {
  authUser,
  createUser,
  forgotPassword,
  getUser,
  resetPasswordWithToken,
};
