import { postData } from './utils';

export const createCard = (cardPatches) => postData('/card-builder', cardPatches);
export const getCard = (id) => fetch(`http://localhost:3001/card-builder/${id}`);

export default {
  createCard,
  getCard,
};
