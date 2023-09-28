/* eslint-disable */


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Check from '../Check';

import styles from './signUp.module.css';

const SignUp = () => {
  const  {
    register,
    formState: {
      errors,
    },
    handleSubmit,

  } = useForm();
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [passwordUnMatch, setPasswordUnMatch] = useState(false);
  const [wrongUserName, setWrongUserName] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);


  const onSubmit = (data) => {
      console.log(JSON.stringify(data))
  }
  return (
    <div className={styles.signUp}>
      <form className={styles.signUp__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.signUp__title}>Create new account</div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Username</span>
          <br />
          <input
          className={styles.signUp__input}
          {...register('username')}

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
        <input type="submit" className={styles.signUp__submit}value="Create" />
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
