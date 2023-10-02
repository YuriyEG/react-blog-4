/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';

import ServiceApi from '../../ServiceAPI/ServiceAPI';

import styles from './signIn.module.css';

const service = new ServiceApi();

const SignIn = ({ history, auth, setAuth }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    service.login(
      data.email,
      data.password,
      (res) => {
 
        localStorage.setItem('userData', JSON.stringify(data));
        localStorage.setItem('isAuth', 'true');
        setAuth('true');
        history.push(`/articles`);

      },

      (err) => console.log(err)
    );
    reset();

    // service.updateCurrentUser(
    //   {
    //     user: {
    //       bio: 'HelI work at State Farm.',
    //       image: 'https://i.ibb.co/dtP7My9/ert.jpg',
    //     },
    //   },

    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
  };


  return (
    <div className={styles.signIn}>
      <form className={styles.signIn__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.signIn__title}>Sign In</div>

        <div className={styles.signIn__label}>
          <span className={styles.signIn__desctiption}>Email address</span>
          <br />
          <input
            className={styles.signIn__input}
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value:
                  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                message: 'Please enter valid email!',
              },
              minLength: { value: 4, message: 'Минимум 4 символа' },
              maxLength: {
                value: 100,
                message: 'Максимум 100 символов',
              },
            })}
          />
          <br />
          <span className={styles.signIn__warning}>{errors?.email && <p>{errors?.email?.message}</p>}</span>
        </div>

        <div className={styles.signIn__label}>
          <span className={styles.signIn__desctiption}>Password</span>
          <br />
          <input
            className={styles.signIn__input}
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
          <span className={styles.signIn__warning}>{errors?.password && <p>{errors?.password?.message}</p>}</span>
        </div>

        <input type="submit" className={styles.signIn__submit} name="submit_btn" value="Login"/>
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

export default withRouter(SignIn);
