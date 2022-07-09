import { socket } from '../connect.socket';

socket.on('lobbyJoined', (event) => {
  console.log(event);
});
socket.onAny((event, ...args) => {
  console.log(event, args);
});
