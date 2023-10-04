/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './default.jpg';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import styles from './header.module.css';

const Header = ( { auth, setAuth, history, curUser }) => {

  const [userName, setUserName ] = useState('no Name');
  const [imageUrl, setImageUrl] = useState('https://i.ibb.co/n7qPrMB/Lost-via-domus-soundtrack.jpg');
  console.log(curUser);

  const logOut = () => {
    localStorage.setItem('isAuth', 'false');
    setAuth('false');
  };

  // const logIn = () => {
  //   setAuth('true');
  // };


  useEffect( () => {
    if (curUser.user) {
      setUserName(curUser.user.username);
      setImageUrl(curUser.user.image);
    }
  }, [curUser])

  
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
          <div className={styles.header__name} >{userName}</div>
          <div className={styles.header__logo}  style={{ backgroundImage: `url(${imageUrl})`, 
          backgroundSize: '100%'}}></div>
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
