import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { RedirectCondition } from '../../../components';
import { resetPasswordWithToken } from '../../../fetches';
import {
  getPassword,
  getRetypePassword,
  RequestStatus,
  setPendingPasswordReset,
  setRetypePassword,
  setPassword,
  setPasswordToken,
  getPasswordToken,
  setPasswordResetStatus,
  getPasswordResetStatus,
} from '../../../reducers';
import './reset-password.css';

const createTokenThunk = (userData, dispatch) => {
  // unset the pendingPasswordReset state
  dispatch(setPendingPasswordReset({
    status: RequestStatus.NotRequesting,
  }));

  resetPasswordWithToken(userData)
    .then((res) => {
      dispatch(setPasswordResetStatus(res));
    })
    .catch((err) => {
      dispatch(setPasswordResetStatus(err));
      console.error(err);
    });
};

export function ResetPassword() {
  const passwordResetStatus = useSelector(getPasswordResetStatus);
  const password = useSelector(getPassword);
  const passwordToken = useSelector(getPasswordToken);
  const retypePassword = useSelector(getRetypePassword);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Form.Group>
          <Form.Label>Token</Form.Label>
          <Form.Control
            type='text'
            placeholder='such secure...'
            value={passwordToken}
            onChange={(event) => {
              dispatch(setPasswordToken(event.target.value));
            }}
          />
          <Form.Text className='text-muted'>{passwordResetStatus}</Form.Text>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='such secure...'
            value={password}
            onChange={(event) => {
              dispatch(setPassword(event.target.value));
            }}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group>
          <Form.Label>Password again...</Form.Label>
          <Form.Control
            type='password'
            placeholder='such secure...'
            value={retypePassword}
            onChange={(event) => {
              dispatch(setRetypePassword(event.target.value));
            }}
          />
        </Form.Group>
      </Row>

      <Row>
        <Button
          size='lg'
          onClick={() => {
            createTokenThunk(
              {
                token: passwordToken,
                password,
              },
              dispatch
            );
          }}
        >
          Send Reset Link
        </Button>
        {RedirectCondition('/auth/login', passwordResetStatus === RequestStatus.Success)}
      </Row>
      <Row>
        <Link to='/auth/login'>Login to Your Account</Link>
      </Row>
    </Container>
  );
}

export default ResetPassword;
