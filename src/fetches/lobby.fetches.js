import { postData } from './utils';

export const createLobby = (lobby) => postData('/lobby', lobby);
export const getLobby = (id) => fetch(`http://localhost:3001/lobby/${id}`);

export default {
  createLobby,
  getLobby,
};
