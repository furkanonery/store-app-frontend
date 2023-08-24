import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import { NavLink, Nav, NavItem } from 'reactstrap';

function App() {
  return (
    <Router>
      <Nav
      >
        <NavItem>
          <NavLink
            active
            href="/"
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/products">
            Products
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            disabled
            href="#"
          >
            Login
          </NavLink>
        </NavItem>
      </Nav>


      <Routes>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
}

export default App;