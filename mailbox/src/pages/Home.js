import React from 'react';
import { useSelector } from 'react-redux';

// import classes from './Home.module.css'
import Sidebar from '../components/Sidebar';
import Compose from '../components/Compose';
import Sent from '../components/Sent';
import Received from '../components/Received';

const Home = () => {
  const state = useSelector(state => state.show);

  return (
    <React.Fragment>
      <Sidebar />
      {state.compose && <Compose />}
      {state.sent && <Sent />}
      {state.received && <Received />}
    </React.Fragment>
  );
};

export default Home;