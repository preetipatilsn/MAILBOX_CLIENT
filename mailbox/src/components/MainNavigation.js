import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <div className={classes.mainNav}>
      <nav>
        <ul>
          <li>
            <NavLink to='/login' className={({isActive}) => isActive ? classes.active : ''}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;