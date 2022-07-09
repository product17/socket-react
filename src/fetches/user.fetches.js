import { postData } from './utils';

export const createUser = (user) => postData('http://localhost:3001/users', user);
export const getUser = (id) => fetch(`http://localhost:3001/users/${id}`);

export default {
  createUser,
  getUser,
};
