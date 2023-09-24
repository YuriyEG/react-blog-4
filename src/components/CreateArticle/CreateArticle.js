/* eslint-disable */
import React from 'react';

import DeleteButton from '../DeleteButton';
import AddTagButton from '../AddTagButton';
import SendButton from '../SendButton';

import styles from './createArticle.module.css';

const CreateArticle = () => {
  return (
    <div className={styles.createArticle}>
      <form className={styles.createArticle__form}>
        <div className={styles.createArticle__title}>Create new article</div>
        <div className={styles.createArticle__label}>
          <div className={styles.createArticle__description}>Title</div>

          <input type="text" className={styles.createArticle__input} />
        </div>
        <div className={styles.createArticle__label}>
          <div className={styles.createArticle__description}>Short description</div>

          <input className={styles.createArticle__input} />
        </div>
        <div className={styles.createArticle__label}>
          <div className={styles.createArticle__description}>Text</div>

          <textarea className={styles.createArticle__area} width="874px" type="text" />
        </div>

        <div className={styles.createArticle__description}>Tags</div>
        <div className={styles.createArticle__tagWrapper}>
          <input className={styles.createArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <div className={styles.createArticle__tagWrapper}>
          <input className={styles.createArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <div className={styles.createArticle__tagWrapper}>
          <input className={styles.createArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <div className={styles.createArticle__tagWrapper}>
          <input className={styles.createArticle__tagInput} />
          <DeleteButton value="Delete" />
          <AddTagButton />
        </div>
        <SendButton />
        
      </form>
    </div>
  );
};

export default CreateArticle;
