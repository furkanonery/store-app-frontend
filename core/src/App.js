import './App.css';
import React from 'react'
import Header from './Partials/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register';
import ListProducts from './Containers/Product/ListProducts'
import Footer from './Partials/Footer';

function App() {
  return (
    <div>
      <Header /> {Header}
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />}>
          </Route>
        </Routes>
        <Routes>
          <Route path="/products" element={<ListProducts />}>
          </Route>
        </Routes>
      </Router>
      <Footer /> {Footer}

    </div>
  );
}

export default App;