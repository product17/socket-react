import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loadedUsers: [],
  joinedLobby: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setJoinedLobby: (state, action) => {
      state.joinedLobby = action.payload;
    },
  },
});

export const {
  setCurrentUser,
  setJoinedLobby,
} = userSlice.actions;
export const getCurrentUser = (state) => state.user.currentUser;
export const getJoinedLobby = (state) => state.user.joinedLobby;
export default userSlice.reducer;
