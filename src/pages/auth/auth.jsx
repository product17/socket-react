import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';
import Row from 'react-bootstrap/Row';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { MainNav } from '../../components';
import { Login } from './login';
import { Create } from './create';
import { ForgotPassword } from './forgot-password';
import ResetPassword from './reset-password/reset-password';

export function Auth() {
  const match = useRouteMatch();

  return (
    <div className='login'>
      <MainNav />
      <Container fluid>
        <div className='flex'>
          <div className='flex-grow'>
            <p className='header-text'>Auth Pages</p>
            <Switch>
              <Route path={`${match.path}/login`}>
                <Login />
              </Route>
              <Route path={`${match.path}/create`}>
                <Create />
              </Route>
              <Route path={`${match.path}/forgot-password`}>
                <ForgotPassword />
              </Route>
              <Route path={`${match.path}/reset-password`}>
                <ResetPassword />
              </Route>
              <Route path='/'>
                <Row>
                  <Link to='/auth/create'>
                    <Button size='lg' variant='primary' className='signup-btn'>Sign Up!</Button>
                  </Link>
                  <Link to='/auth/login'>
                    <Button size='lg' variant='secondary'>Login</Button>
                  </Link>
                </Row>
                <Row>
                  <Link to={`${match.path}/forgot-password`}>Forgot Password</Link>
                </Row>
              </Route>
            </Switch>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Auth;
