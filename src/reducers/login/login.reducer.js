import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const {
  setPassword,
  setUsername,
} = loginSlice.actions;
export const getPassword = (state) => state.login.password;
export const getUsername = (state) => state.login.username;
export default loginSlice.reducer;
