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
  getPassword,
  getUsername,
  setCurrentUser,
  setPassword,
  setUsername,
} from '../../../reducers';
import './login.css';

const createUserThunk = (user, dispatch) => {
  createUser(user).then((res) => {
    dispatch(setCurrentUser(res));
  }).catch((err) => {
    console.error(err);
  });
};

export function Login() {
  const currentUser = useSelector(getCurrentUser);
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
          <Form.Text className='text-muted'>
            Select a username
          </Form.Text>
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
          <Form.Text className='text-muted'>
            Password
          </Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Button
          size='lg'
          onClick={() => {
            createUserThunk({
              password,
              username,
            }, dispatch);
          }}
        >
          Login
        </Button>
        {
          RedirectCondition('/lobby', currentUser)
        }
      </Row>
      <Row>
        <Link to='/auth/create'>Create Account</Link>
      </Row>
      <Row>
        <Link to='/auth/forgot-password'>Forgot Password</Link>
      </Row>
    </Container>
  );
}

export default Login;
