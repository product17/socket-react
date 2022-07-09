import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';

import { RedirectCondition } from '../../../../components';
import { getLobby } from '../../../../fetches';
import {
  getLobbyCode,
  getJoinedLobby,
  setLobbyCode,
  setJoinedLobby,
} from '../../../../reducers';

const getLobbyThunk = (id, dispatch) => {
  getLobby(id).then((res) => {
    console.log(res.body);
    if (res.status === 404) {
      console.log('404 boiiiis');
    } else {
      dispatch(setJoinedLobby(res.lobbyCode));
    }
  }).catch((err) => {
    console.error(err);
  });
};

export function Join() {
  const lobbyCode = useSelector(getLobbyCode);
  const joinedLobby = useSelector(getJoinedLobby);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Form.Group>
          <Form.Label>Lobby Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='code...'
            value={lobbyCode}
            onChange={(event) => {
              dispatch(setLobbyCode(event.target.value));
            }}
          />
          <Form.Text className='text-muted'>
            Ask the lobby owner for the code...
          </Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Button
          onClick={() => {
            console.log('test');
            getLobbyThunk(lobbyCode, dispatch);
          }}
        >
          Join Lobby
        </Button>
        {
          RedirectCondition('/lobby', joinedLobby)
        }
      </Row>
    </Container>
  );
}

export default Join;
