import React, { useState } from 'react';

import Check from '../Check';

import styles from './signUp.module.css';

const SignUp = () => {
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [passwordUnMatch, setPasswordUnMatch] = useState(false);
  const [wrongUserName, setWrongUserName] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  return (
    <div className={styles.signUp}>
      <form className={styles.signUp__form} name="feedback">
        <div className={styles.signUp__title}>Create new account</div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Username</span>
          <br />
          <input
            type="text"
            className={styles.signUp__input}
            placeholder="Username"
            name="username"
            required="required"
          />
          <br />
          {wrongUserName ? (
            <div>
              {' '}
              <span className={styles.signUp__warning}>Wrong username.</span>
              <br />
            </div>
          ) : null}
        </div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Email address</span>
          <br />
          <input
            type="email"
            className={styles.signUp__input}
            placeholder="Email address"
            name="email"
            required="required"
          />
          <br />
          {wrongEmail ? (
            <div>
              {' '}
              <span className={styles.signUp__warning}>Wrong Email</span>
              <br />
            </div>
          ) : null}
        </div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Password</span>
          <br />
          <input
            type="password"
            className={styles.signUp__input}
            placeholder="Password"
            name="password"
            required="required"
          />
          <br />
          {passwordWarning ? (
            <div>
              {' '}
              <span className={styles.signUp__warning}>Your password needs to be at least 6 characters.</span>
              <br />
            </div>
          ) : null}
        </div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Repeat password</span>
          <br />

          <input
            type="password"
            className={styles.signUp__input}
            placeholder="Password"
            name="password2"
            required="required"
          />
          <br />
          {passwordUnMatch ? (
            <div>
              {' '}
              <span className={styles.signUp__warning}>Passwords must match</span>
              <br />
            </div>
          ) : null}
        </div>
        <Check descript={'I agree to the processing of my personal information'} />
        <input type="submit" className={styles.signUp__submit} name="submit_btn" value="Create" />
        <div className={styles.signUp__question}>
          Already have an account?{' '}
          <a href="#" className={styles.signUp__questionBlue}>
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
