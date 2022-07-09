import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const {
  addCard,
} = cardSlice.actions;
export const getCardList = (state) => state.cards.list;
export default cardSlice.reducer;
