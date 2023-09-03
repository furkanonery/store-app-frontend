import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useState, useEffect } from 'react';
import api from '../Api/api';
import Button from 'react-bootstrap/esm/Button';

function Header() {

  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const user = localStorage.getItem('user')

  function removeToken() {
    localStorage.removeItem('authToken');
    setToken(null);
  }

  useEffect(() => {
    api.get('/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Store App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                categories.map(category => (

                  <NavDropdown.Item href={"/products"}>{category.name.toUpperCase()}</NavDropdown.Item>
                ))
              }
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            {
              token ?
                (
                  <Button onClick={removeToken}>Logout({user})</Button>

                ) : (
                  <><Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link></>
                )
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;