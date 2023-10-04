/* eslint-disable */

import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import ServiceApi from '../../ServiceAPI/ServiceAPI';

import styles from './editProfile.module.css';

const service = new ServiceApi();

const EditProfile = ({ curUser }) => {

  
  useEffect(() => {
    if (curUser.user) {
      const { user } = curUser;
      document.getElementById('username').placeholder = user.username;
      document.getElementById('email').placeholder = user.email;
      document.getElementById('image').placeholder = user.image;
    }
  }, [curUser]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      username: '',
      password: '',
      image: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    service.updateCurrentUser(
      { user: data },
      (res) => console.log('otve!!', res),
      (err) => console.log(err)
    );
    reset();
  };

  return (
    <div className={styles.editProfile}>
      <form className={styles.editProfile__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.editProfile__title}>Edit Profile</div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>Username</span>
          <br />
          <input id="username" className={styles.editProfile__input} {...register('username')} />
          <br />
        </div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>Email address</span>
          <br />
          <input
            id="email"
            className={styles.editProfile__input}
            {...register('email', {
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
          <span className={styles.editProfile__warning}>{errors?.email && <p>{errors?.email?.message}</p>}</span>
        </div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>New password</span>
          <br />
          <input
            className={styles.editProfile__input}
            {...register('password', {
              minLength: { value: 6, message: 'Минимум 6 символов' },
              maxLength: {
                value: 40,
                message: 'Максимум 40 символов',
              },
            })}
          />
          <br />

          <span className={styles.editProfile__warning}>{errors?.password && <p>{errors?.password?.message}</p>}</span>
        </div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>Avatar img (url)</span>
          <br />
          <input id="image" className={styles.editProfile__input} {...register('image')} />
          <br />
        </div>

        <input
          type="submit"
          className={styles.editProfile__submit}
          name="submit_btn"
          value="Login"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default EditProfile;
