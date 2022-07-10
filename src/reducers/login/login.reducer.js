import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../enums';

const initialState = {
  email: '',
  username: '',
  password: '',
  passwordResetStatus: '',
  passwordToken: '',
  pendingPasswordReset: RequestStatus.NotRequesting,
  retypePassword: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordResetStatus: (state, action) => {
      state.passwordResetStatus = action.payload.status;
    },
    setPasswordToken: (state, action) => {
      state.passwordToken = action.payload;
    },
    setPendingPasswordReset: (state, action) => {
      // Can get a server error message from action.message
      state.pendingPasswordReset = action.payload.status;
    },
    setRetypePassword: (state, action) => {
      state.retypePassword = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const {
  setEmail,
  setPassword,
  setPasswordResetStatus,
  setPasswordToken,
  setPendingPasswordReset,
  setRetypePassword,
  setUsername,
} = loginSlice.actions;
export const getEmail = (state) => state.login.email;
export const getPassword = (state) => state.login.password;
export const getPasswordResetStatus = (state) => state.login.passwordResetStatus;
export const getPasswordToken = (state) => state.login.passwordToken;
export const getPendingPassordReset = (state) => state.login.pendingPasswordReset;
export const getRetypePassword = (state) => state.login.retypePassword;
export const getUsername = (state) => state.login.username;
export default loginSlice.reducer;
