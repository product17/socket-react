import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { RedirectCondition } from '../../../components';
import { createUser } from '../../../fetches';
import {
  getCurrentUser,
  getEmail,
  getPassword,
  getUsername,
  setCurrentUser,
  setEmail,
  setPassword,
  setUsername,
} from '../../../reducers';
import './create.css';

const createUserThunk = (user, dispatch) => {
  createUser(user)
    .then((res) => {
      dispatch(setCurrentUser(res));
    })
    .catch((err) => {
      console.error(err);
    });
};

export function Create() {
  const currentUser = useSelector(getCurrentUser);
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Form.Group>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='username...'
            value={username}
            onChange={(event) => {
              dispatch(setUsername(event.target.value));
            }}
          />
          <Form.Text className='text-muted'>username errors...</Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='email...'
            value={email}
            onChange={(event) => {
              dispatch(setEmail(event.target.value));
            }}
          />
          <Form.Text className='text-muted'>email errors...</Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={(event) => {
              dispatch(setPassword(event.target.value));
            }}
          />
          <Form.Text className='text-muted'>password errors...</Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Button
          size='lg'
          onClick={() => {
            createUserThunk(
              {
                email,
                password,
                username,
              },
              dispatch
            );
          }}
        >
          Create Account
        </Button>
        {RedirectCondition('/lobby', currentUser)}
      </Row>
      <Row>
        <Link to='/auth/login'>Login to Your Account</Link>
      </Row>
      <Row>
        <Link to='/auth/forgot-password'>Forgot Password</Link>
      </Row>
    </Container>
  );
}

export default Create;
