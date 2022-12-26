import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </Layout>
  );
}

export default App;
