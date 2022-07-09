import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'react-router-dom/Link';

function MainNav() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Smuggler&#39;s Companion App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/login' className='nav-link'>Login</Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <Link to='/'>test</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNav;
export {
  MainNav,
};
