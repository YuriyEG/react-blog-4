/* eslint-disable */

import React, { useEffect, useState } from 'react';

import format from 'date-fns/format';
import { ar } from 'date-fns/locale';

import styles from './article.module.css';
import ServiceApi from '../../ServiceAPI/ServiceAPI';
const service = new ServiceApi();

const Article = ({itemId}) => {

 
  const [article, setArticle] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect( () => {
      service.getArticle(itemId, (res) => setArticle(res.article), (err) => console.log(err));
  }, []);

  useEffect( () => {
    console.log(article);
  }, [article]);

  let imageUrl;
  let author = 'no author';
  let date = 'no date';
  if (article.updatedAt) {
    const x = new Date(article.updatedAt);
    date = format(x, 'MMMMMM dd, yyyy');
  }

  if (article.author) {
    author = article.author.username;
  }

  if (article.author) {
    imageUrl = article.author.image;
  }
  
  
 

  const Tag = ({ value }) => {
    return <div className={styles.article__tag}>{value}</div>;
  }

  const deleteHandler = () => {
    console.log('itemid: ', itemId);
    service.deleteArticle(itemId, (res) => console.log('result',res), (err) => console.log('error:', err));
   
    
  }
    
  return (
    <div className={styles.article}>
      <div className={styles.article__headWrapper}>
            <div className={styles.article__left}>
        <div className={styles.article__title}>
          <span className={styles.article__titleBox}>{article.title}</span>

          <div className={styles.article__like}></div>
          <div className={styles.article__count}>4</div>
        </div>
        <div className={styles.article__tags}>
          {article.tagList?.map((value) => (
            <Tag value={value} key={Math.random()} />
          ))}
        </div>
        <div className={styles.article__description}>
          { article.description }
        </div>
      </div>
      <div className={styles.article__right}>
        <div className={styles.article__profileCard}>
          <div className={styles.article__info}>
            <div className={styles.article__name}>{author}</div>
            <div className={styles.article__date}>{date}</div>
          </div>
          <div className={styles.article__cardIcon} style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: '50% 50%', backgroundSize: '105%', backgroundRepeat: 'no-repeat'}}></div>
        </div>
        <div className={styles.article__buttonWrapper}>
          <div className={styles.article__deleteButton} onClick={deleteHandler}>Delete</div>
          <div className={styles.article__editButton}>Edit</div>
        </div>
      </div>
      
      </div>
      <div className={styles.article__body}>
        {article.body}
      </div>
      
    </div>
  );
};

export default Article;
