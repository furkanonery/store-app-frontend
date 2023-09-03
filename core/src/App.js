import './App.css';
import React from 'react'
import Header from './Partials/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register';
import ListProducts from './Containers/Product/ListProducts'
import Footer from './Partials/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ListProducts />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;