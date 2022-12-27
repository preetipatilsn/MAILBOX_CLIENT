import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Sidebar.module.css';
import { showActions } from '../store/show-slice';

const Sidebar = () => {
  const state = useSelector(state => state.show);
  const dispatch = useDispatch();

  const composeHandler = () => {
    dispatch(showActions.compose());
  }

  const sentHandler = () => {
    dispatch(showActions.sent());
  }

  const receivedHandler = () => {
    dispatch(showActions.received());
  }

  return (
    <div className={classes.sidebar}>
      <button className={classes.compose} onClick={composeHandler}>Compose</button>
      <li onClick={sentHandler} className={state.sent ? classes.sent : ''}>Sent</li>
      <li onClick={receivedHandler} className={state.received ? classes.received : ''}>Received</li>
    </div>
  );
};

export default Sidebar;