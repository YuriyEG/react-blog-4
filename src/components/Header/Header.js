import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.header__title} style={{ color: 'rgba(0, 0, 0, 0.85)', textDecoration: 'none' }} to="/">
        Realworld Blog
      </Link>
      <Link className={styles.createArticleButton} to="/new-article">
        Create article
      </Link>
      <div className={styles.signInButton}>
        <Link style={{ textDecoration: 'none' }} to="/sign-in">
          Sign In
        </Link>
      </div>
      <Link className={styles.header__profileBox} to="/profile">
        <div className={styles.header__name}>John Doe</div>
        <div className={styles.header__logo}></div>
      </Link>
      <div className={styles.signUpButton}>
        <Link style={{ textDecoration: 'none', color: 'rgba(82, 196, 26, 1)' }} to="/sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
