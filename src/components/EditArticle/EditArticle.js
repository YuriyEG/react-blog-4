/* eslint-disable */
import React from 'react';

import DeleteButton from '../DeleteButton';
import AddTagButton from '../AddTagButton';
import SendButton from '../SendButton';

import styles from './editArticle.module.css';

const EditArticle = () => {
  return (
    <div className={styles.editArticle}>
      <form className={styles.editArticle__form}>
        <div className={styles.editArticle__title}>Edit article</div>
        <div className={styles.editArticle__label}>
          <div className={styles.editArticle__description}>Title</div>

          <input type="text" className={styles.editArticle__input} />
        </div>
        <div className={styles.editArticle__label}>
          <div className={styles.editArticle__description}>Short description</div>

          <input className={styles.editArticle__input} />
        </div>
        <div className={styles.editArticle__label}>
          <div className={styles.editArticle__description}>Text</div>

          <textarea className={styles.editArticle__area} width="874px" type="text" />
        </div>

        <div className={styles.editArticle__description}>Tags</div>
        <div className={styles.editArticle__tagWrapper}>
          <input className={styles.editArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <div className={styles.editArticle__tagWrapper}>
          <input className={styles.editArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <div className={styles.editArticle__tagWrapper}>
          <input className={styles.editArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <div className={styles.editArticle__tagWrapper}>
          <input className={styles.editArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <SendButton />
        
      </form>
    </div>
  );
};

export default EditArticle;
