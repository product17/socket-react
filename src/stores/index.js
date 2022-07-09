import { configureStore } from '@reduxjs/toolkit';
import lobbyReducer from '../reducers/lobby/lobby.reducer';
import loginReducer from '../reducers/login/login.reducer';
import userReducer from '../reducers/user/user.reducer';

const appStores = configureStore({
  reducer: {
    lobby: lobbyReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default appStores;
