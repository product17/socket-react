import React from 'react';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import {
  getLobbyCode,
  getPlayers,
} from '../../../../reducers';

export function Room() {
  const lobbyCode = useSelector(getLobbyCode);
  const players = useSelector(getPlayers);
  // const dispatch = useDispatch();
  return (
    <Container>
      {
        ((isInRoom) => {
          if (isInRoom) {
            return (
              <Row>
                <div>
                  Room Code:&nbsp;
                  {lobbyCode}
                </div>
                <div>
                  {players.length}
                </div>
              </Row>
            );
          }

          return (
            <Row>
              <Link to='/lobby/create'><Button>Create Lobby</Button></Link>
              <Link to='/lobby/join'><Button>Join Lobby</Button></Link>
            </Row>
          );
        })(lobbyCode)
      }
    </Container>
  );
}

export default Room;
