import React from 'react';

import SignUpButton from '../SignUpButton';
import SignInButton from '../signInButton';

import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__title}>Realworld Blog</div>

      <SignInButton />
      <SignUpButton />
    </div>
  );
};

export default Header;
