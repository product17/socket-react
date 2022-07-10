import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { RedirectCondition } from '../../../components';
import { forgotPassword } from '../../../fetches';
import {
  getPendingPassordReset,
  getUsername,
  RequestStatus,
  setPendingPasswordReset,
  setUsername,
} from '../../../reducers';
import './forgot-password.css';

const createTokenThunk = (username, dispatch) => {
  forgotPassword(username)
    .then((res) => {
      // update to true if status is success from request
      dispatch(setPendingPasswordReset(res));
    })
    .catch((err) => {
      dispatch(setPendingPasswordReset({
        status: RequestStatus.Failed,
      }));
      console.error(err);
    });
};

export function ForgotPassword() {
  const pendingPassordReset = useSelector(getPendingPassordReset);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Form.Group>
          <Form.Label>User Name/Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='username...'
            value={username}
            onChange={(event) => {
              dispatch(setUsername(event.target.value));
            }}
          />
          <Form.Text className='text-muted'>{pendingPassordReset}</Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Button
          size='lg'
          onClick={() => {
            createTokenThunk(
              {
                username,
              },
              dispatch
            );
          }}
        >
          Send Reset Link
        </Button>
        {RedirectCondition('/auth/reset-password', pendingPassordReset === RequestStatus.Success)}
      </Row>
      <Row>
        <Link to='/auth/login'>Login to Your Account</Link>
      </Row>
    </Container>
  );
}

export default ForgotPassword;
