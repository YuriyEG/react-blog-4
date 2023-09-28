/* eslint-disable */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Check from '../Check';

import styles from './signUp.module.css';
import ServiseAPI from '../../ServiceAPI/ServiceAPI';
const service = new ServiseAPI();

const SignUp = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: '',
      username: '',
      password: '',
      password2: '',
    }
  });
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [passwordUnMatch, setPasswordUnMatch] = useState(false);
  const [wrongUserName, setWrongUserName] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    service.createUser(JSON.stringify(data), (res) => console.log(res), (err) => console.log(err));
    reset();
  };
  return (
    <div className={styles.signUp}>
      <form className={styles.signUp__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.signUp__title}>Create new account</div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Username</span>
          <br />
          <input
            className={styles.signUp__input}
            {...register('username', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 3, message: 'Минимум 3 символа' },
              maxLength: {
                value: 20,
                message: 'Максимум 20 символов',
              },
            })}
          />
          <br />
          <span className={styles.signUp__warning}>{errors?.username && <p>{errors?.username?.message}</p>}</span>
        </div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Email address</span>
          <br />
          <input
            className={styles.signUp__input}
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                message: 'Please enter valid email!'
              },
              minLength: { value: 4, message: 'Минимум 4 символа' },
              maxLength: {
                value: 50,
                message: 'Максимум 50 символов',
              },
            })}
          />
          <br />
   
              <span className={styles.signUp__warning}>{errors?.email && <p>{errors?.email?.message}</p>}</span>
              <br />

        </div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Password</span>
          <br />
          <input
            className={styles.signUp__input}
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 6, message: 'Минимум 6 символов' },
              maxLength: {
                value: 40,
                message: 'Максимум 40 символов',
              },
            })}
      
          />
          <br />
              <span className={styles.signUp__warning}>{errors?.password && <p>{errors?.password?.message}</p>}</span>
      
              <br />
  
        </div>

        <div className={styles.signUp__label}>
          <span className={styles.signUp__description}>Repeat password</span>
          <br />

          <input
            className={styles.signUp__input}
            {...register('password2', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 6, message: 'Минимум 6 символов' },
              maxLength: {
                value: 40,
                message: 'Максимум 40 символов',
              },
            })}
          />
          <br />

              <span className={styles.signUp__warning}>{errors?.password2 && <p>{errors?.password2?.message}</p>}</span>
              <br />

        </div>
        <Check descript={'I agree to the processing of my personal information'} />
        <input type="submit" className={styles.signUp__submit} disabled={!isValid} />
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
