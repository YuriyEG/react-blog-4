import React from 'react';
import { Link } from 'react-router-dom';

import styles from './signIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <form className={styles.signIn__form}>
        <div className={styles.signIn__title}>Sign In</div>

        <div className={styles.signIn__label}>
          <span className={styles.signIn__desctiption}>Email address</span>
          <br />
          <input
            type="email"
            className={styles.signIn__input}
            placeholder="Email address"
            name="email"
            required="required"
          />
          <br />
        </div>

        <div className={styles.signIn__label}>
          <span className={styles.signIn__desctiption}>Password</span>
          <br />
          <input
            type="password"
            className={styles.signIn__input}
            placeholder="Password"
            name="password"
            required="required"
          />
          <br />
        </div>

        <input type="submit" className={styles.signIn__submit} name="submit_btn" value="Login" />
        <div className={styles.signIn__question}>
          Don&#8217;t have an account?{' '}
          <Link to="/sign-up" className={styles.signIn__questionBlue}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
