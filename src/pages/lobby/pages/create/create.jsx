import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { createLobby } from '../../../../fetches';
import {
  // addPlayer,
  // getCurrentUser,
  getLobbyCode,
  setLobby,
  setJoinedLobby,
  getMap,
  setMap,
} from '../../../../reducers';
import { RedirectCondition } from '../../../../components';

const createLobbyThunk = (lobby, dispatch) => {
  createLobby(lobby).then((createdLobby) => {
    dispatch(setLobby(createdLobby));
    // dispatch(addPlayer());
    dispatch(setJoinedLobby(createdLobby.lobbyCode));
  }).catch((err) => {
    console.error(err);
  });
};

export function Create() {
  const lobbyCode = useSelector(getLobbyCode);
  const selectedMap = useSelector(getMap);
  const dispatch = useDispatch();

  return (
    <Container className='game-container new-form'>
      <h3>Create your Game</h3>
      <Form>
        <Row>
          <Form.Group>
            <Form.Label>Select Map</Form.Label>
            <Form.Control
              as='select'
              value={selectedMap}
              onChange={(event) => {
                dispatch(setMap(event.target.value));
              }}
            >
              <option value='1'>Map 1</option>
              <option value='2'>Map 2</option>
              <option value='3'>Map 3</option>
              <option value='4'>Map 4</option>
              <option value='5'>Map 5</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className='flush-row'>
          <Button
            variant='primary'
            size='lg'
            block
            onClick={() => {
              createLobbyThunk({
                map: selectedMap,
              }, dispatch);
            }}
          >
            Create Game
          </Button>
          { RedirectCondition('/lobby', lobbyCode) }
        </Row>
      </Form>
    </Container>
  );
}

export default Create;
