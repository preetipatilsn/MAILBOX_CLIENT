import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import { replaceMail } from './store/mail-actions';

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const firstTime = useSelector((state) => state.mail.firstTime);
  const dispatch = useDispatch();

  if (isLoggedIn && firstTime) {
    let email = JSON.parse(localStorage.getItem('idToken')).email;
    email = email.replace('@', '').replace('.', '');
    dispatch(replaceMail(email));
  }

  return (
    <Layout>
    <Routes>
       <Route
          path='/'
          exact
          element={
            isLoggedIn ? <Navigate to='/home' /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/home'
          element={isLoggedIn ? <Home /> : <Navigate to='/login' />}
        />
        <Route path='/login' element={<Login />} />
    </Routes>
  </Layout>
  );
}

export default App;
