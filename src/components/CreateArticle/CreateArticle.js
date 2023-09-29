/* eslint-disable */
import React, { useState } from 'react';

import DeleteButton from '../DeleteButton';
import AddTagButton from '../AddTagButton';
import SendButton from '../SendButton';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ServiseAPI from '../../ServiceAPI/ServiceAPI';

import styles from './createArticle.module.css';

const service = new ServiseAPI();

const CreateArticle = () => {

  const [tags, setTags] = useState([]);
  const [curTag, setCurTag] = useState('');

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: '',
      description: '',
      body: '',
      tags: ['default'],
    },
  });

  const onSubmit = (data) => {
      
      console.log(data);
      // service.createArticle(
      //   data,
      //   (res) => {
      //     console.log(res);
          
      //   } ,

      //   (err) => console.log(err)
      // );
      // reset();
        
  };

  const addTag = (tag) => {
    setTags([tag, ...tags]);
  }

  return (
    <div className={styles.createArticle}>
      <form className={styles.createArticle__form} onSubmit={handleSubmit(onSubmit)} >
        <div className={styles.createArticle__title}>Create new article</div>
        <div className={styles.createArticle__label}>
          <div className={styles.createArticle__description}>Title</div>

          <input className={styles.createArticle__input}
                      {...register('title', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 3, message: 'Минимум 3 символа' },
              maxLength: {
                value: 20,
                message: 'Максимум 20 символов',
              },
            })} />
        </div>
        <div className={styles.createArticle__label}>
          <div className={styles.createArticle__description}>Short description</div>

          <input className={styles.createArticle__input} 
                        {...register('description', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 4, message: 'Минимум 4 символа' },
              maxLength: {
                value: 100,
                message: 'Максимум 100 символов',
              },
            })}
          />
        </div>
        <div className={styles.createArticle__label}>
          <div className={styles.createArticle__description}>Text</div>

          <textarea className={styles.createArticle__area} width="874px" type="text" 
                        {...register('body', {
              required: 'Поле обязательно к заполнению',
              minLength: { value: 10, message: 'Минимум 10 символов' },
              maxLength: {
                value: 1000,
                message: '1000',
              },
            })}
          />
        </div>


        <div className={styles.createArticle__description}>Tags</div>
        {/* <div className={styles.createArticle__tagWrapper}>
          <input className={styles.createArticle__tagInput} />
          <DeleteButton value="Delete" />
        </div> */}
        { tags.map( (tag) => <div>
          <input className={styles.createArticle__tagInput} value={tag} />
          <DeleteButton value="Delete" />
        </div>)}
        <div className={styles.createArticle__tagWrapper}>
          <input className={styles.createArticle__tagInput} onChange={(e) => setCurTag(e.target.value)}/>
          <button className={styles.addTagButton} onClick={() => setTags(curTag)}>Add tag</button>
        </div>

        {/* <div className={styles.createArticle__tagWrapper}>
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
        </div> */}
        <button className={styles.sendButton}>Send</button>
        
      </form>
    </div>
  );
};

export default CreateArticle;
