import React from 'react';

import styles from './editProfile.module.css';

const EditProfile = () => {
  return (
    <div className={styles.editProfile}>
      <form className={styles.editProfile__form} name="feedback" method="POST" action="/feedback.php">
        <div className={styles.editProfile__title}>Edit Profile</div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>Username</span>
          <br />
          <input
            type="text"
            className={styles.editProfile__input}
            placeholder="User name"
            name="username"
            required="required"
          />
          <br />
        </div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>Email address</span>
          <br />
          <input
            type="text"
            className={styles.editProfile__input}
            placeholder="Email address"
            name="email_address"
            required="required"
          />
          <br />
        </div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>New password</span>
          <br />
          <input
            type="password"
            className={styles.editProfile__input}
            placeholder="New password"
            name="new_password"
            required="required"
          />
          <br />
        </div>

        <div className={styles.editProfile__label}>
          <span className={styles.editProfile__email}>Avatar img (url)</span>
          <br />
          <input
            type="text"
            className={styles.editProfile__input}
            placeholder="Avatar image"
            name="password"
            required="required"
          />
          <br />
        </div>

        <input type="submit" className={styles.editProfile__submit} name="submit_btn" value="Login" />
      </form>
    </div>
  );
};

export default EditProfile;
