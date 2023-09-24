import React from 'react';

import styles from './signIn.module.css';

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <form className={styles.signIn__form} name="feedback" method="POST" action="/feedback.php">
        <div className={styles.signIn__title}>Sign In</div>

        <div className={styles.signIn__label}>
          <span className={styles.signIn__email}>Email address</span>
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
          <span className={styles.signIn__email}>Password</span>
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
          <a href="#" className={styles.signIn__questionBlue}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
