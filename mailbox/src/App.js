import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path='/login' element={<Login />} />
    </Routes>
  </Layout>
  );
}

export default App;
