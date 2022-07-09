import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lobbyCode: '',
  lobbyCreator: null,
  map: '1',
  players: [],
};

export const lobbySlice = createSlice({
  name: 'lobby',
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    removePlayer: (state, action) => {
      state.players = state.players.filter((player) => player.id !== action.payload.id);
    },
    setLobby: (state, action) => {
      const lobby = action.payload;
      state.lobbyCode = lobby.lobbyCode;
      state.lobbyCreator = lobby.lobbyCreator;
      state.map = lobby.map;
      state.players = lobby.players;
    },
    setLobbyCode: (state, action) => {
      state.lobbyCode = action.payload;
    },
    setLobbyCreator: (state, action) => {
      state.lobbyCreator = action.payload;
    },
    setMap: (state, action) => {
      state.map = action.payload;
    },
  },
});

export const {
  addPlayer,
  removePlayer,
  setLobby,
  setLobbyCode,
  setLobbyCreator,
  setMap,
} = lobbySlice.actions;
export const getLobbyCode = (state) => state.lobby.lobbyCode;
export const getLobbyCreator = (state) => state.lobby.lobbyCreator;
export const getMap = (state) => state.lobby.map;
export const getPlayers = (state) => state.lobby.players;
export default lobbySlice.reducer;
