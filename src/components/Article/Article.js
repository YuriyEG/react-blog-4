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
          { article.body }
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
      </div>
      </div>
      
    </div>
  );
};

export default Article;
