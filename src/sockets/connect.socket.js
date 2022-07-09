import { io } from 'socket.io-client';

export const socket = io('http://localhost:3001', { autoConect: false });
export const init = () => {
  console.log('socket server initialized');
};

export default socket;
