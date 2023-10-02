import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import ServiceApi from '../../ServiceAPI/ServiceAPI';

import styles from './editProfile.module.css';

const service = new ServiceApi();

const EditProfile = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: JSON.parse(localStorage.getItem('userData')).user.email,
      username: JSON.parse(localStorage.getItem('userData')).user.username,
      password: '',
      image: JSON.parse(localStorage.getItem('userData')).user.image,
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
          <input className={styles.editProfile__input} {...register('username')} />
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
          <input className={styles.editProfile__input} {...register('image')} />
          <br />
        </div>

        <input type="submit" className={styles.editProfile__submit} name="submit_btn" value="Login" />
      </form>
    </div>
  );
};

export default EditProfile;
