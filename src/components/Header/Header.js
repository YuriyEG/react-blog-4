/* eslint-disable */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from './header.module.css';

const Header = ( { auth, setAuth, history, curUser }) => {
    let classImage = { backgroundColor: 'black'};
  if (curUser.user) {
    const image = curUser.user.image;
    classImage = {backgroundImage: `url(${image})`};
  }
  
  const logOut = () => {
    console.log('click');
    // console.log(isAuth);
    // setIsAuth('false');
    localStorage.setItem('isAuth', 'false');
    setAuth('false');
    
  };

  const logIn = () => {
    setAuth('true');
  };

  window.addEventListener('storage', () => console.log(localStorage.getItem('isAuth')))


  return (
    <div className={styles.header}>
      <Link className={styles.header__title} style={{ color: 'rgba(0, 0, 0, 0.85)', textDecoration: 'none' }} to="/">
        Realworld Blog
      </Link>
      {auth === 'true' ? (
        <Link className={styles.createArticleButton} to="/new-article">
          Create article
        </Link>
      ) : null}
      {auth === 'false' ? (
        <div className={styles.signInButton}>
          <Link style={{ textDecoration: 'none' }} to="/sign-in">
            Sign In
          </Link>
        </div>
      ) : null}
      {auth === 'true' ? (
        <Link className={styles.header__profileBox} to="/profile">
          <div className={styles.header__name}>John Doe</div>
          <div className={styles.header__logo} style={classImage}></div>
        </Link>
      ) : null}

      {auth === 'false' ? (
        <div className={styles.signUpButton}>
          <Link style={{ textDecoration: 'none', color: 'rgba(82, 196, 26, 1)' }} to="/sign-up">
            Sign Up
          </Link>
        </div>
      ) : (
        <div className={styles.signUpButton} onClick={logOut}>
          <Link style={{ textDecoration: 'none', color: 'rgba(82, 196, 26, 1)' }} to="/sign-in">
            Log Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default withRouter(Header);
