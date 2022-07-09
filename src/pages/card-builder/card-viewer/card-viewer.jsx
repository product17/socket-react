import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import {
  useDispatch,
  // useSelector,
} from 'react-redux';
import { createCard } from '../../../fetches';
import {
  addCard,
} from '../../../reducers';

const createCardThunk = (cardPatches, dispatch) => {
  createCard(cardPatches).then((res) => {
    dispatch(addCard(res));
  }).catch((err) => {
    console.error(err);
  });
};

export function CardViewer() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Button
          onClick={() => {
            console.log('testing');
            createCardThunk({
              op: 'add',
              path: '/name',
              value: 'testing the water',
            }, dispatch);
          }}
        >
          Test Card
        </Button>
      </Row>
    </Container>
  );
}

export default CardViewer;
