import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Link from 'react-router-dom/Link';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { MainNav } from '../../components';

export function Home() {
  return (
    <div className='App'>
      <MainNav />
      <Container fluid>
        <div className='flex home-text'>
          <div className='flex-grow'>
            <p>Welcome to the site, please login or create an account</p>
            <Container>
              <Row>
                <Link to='/auth/create'>
                  <Button size='lg' variant='primary' className='signup-btn'>Sign Up!</Button>
                </Link>
                <Link to='/auth/login'>
                  <Button size='lg' variant='secondary'>Login</Button>
                </Link>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
