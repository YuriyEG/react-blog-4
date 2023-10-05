/* eslint-disable */

import React, { useEffect, useState } from 'react';

import format from 'date-fns/format';
import { ar } from 'date-fns/locale';

import styles from './article.module.css';
import { withRouter } from 'react-router-dom';
import ServiceApi from '../../ServiceAPI/ServiceAPI';
const service = new ServiceApi();

const Article = ({itemId, history, auth, curUser }) => {

  
  const [article, setArticle] = useState({});
  const [cur_user, setCur_user] = useState('');
  const [deleteOk, setDeleteOk] = useState(false);

  useEffect( () => {
      service.getArticle(itemId, (res) => setArticle(res.article), (err) => console.log(err));
  }, []);

  useEffect( () => {
    console.log(article);
  }, [article]);

  useEffect( () => {
    if (curUser.user) {
      setCur_user(curUser.user.username);
    }
  }, [curUser])

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
    setDeleteOk(true);
    console.log('click');
    console.log(deleteOk)
    
  }

  const editHandler = () => {
   
    history.push(`/articles/${itemId}/edit`);
  }

  const confirmationHandler = () => {
    console.log('itemid: ', itemId);
    service.deleteArticle(itemId, (res) => {
      
      console.log('result',res);
      
    } , (err) => console.log('error:', err));
    setTimeout(() => {
      history.push('/articles');
    }, 400);
    setDeleteOk(false);
    
  }

  const cancelHandler = () => {
    setDeleteOk(false);
  }

  const addToFavorites = () => {
    service.toFavorites(itemId, (res) => console.log('result',res), (err) => console.log('error:', err));
  }
    
  console.table('curUser:', cur_user );
  console.table('author', author);
  
  
  return (
    <div className={styles.article}>
      <div className={styles.article__headWrapper}>
            <div className={styles.article__left}>
        <div className={styles.article__title}>
          <span className={styles.article__titleBox}>{article.title}</span>

          <div className={article.favoritesCount ?  styles.article__liked :  styles.article__like} onClick={addToFavorites}></div>
          <div className={styles.article__count}>{article.favoritesCount}</div>
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
        { (auth === 'true') && (cur_user === author) ? (
        <div className={styles.article__buttonWrapper}>

          <div className={styles.article__dialog} style={deleteOk ? {display: 'block' }: { display: 'none'}}> 
            <div className={styles.article__dialogInside}>
              <div className={styles.article__dialogAngle}>
              </div>
              <div className={styles.article__circle}></div>
              <div className={styles.article__question}>Are you sure to delete this article?</div>
              <div className={styles.article__buttons}>
                <button className={styles.article__buttonNo} onClick={cancelHandler}>No</button>
                <button className={styles.article__buttonYes} onClick={confirmationHandler}>Yes</button>
              </div>
            </div>
          </div>
          <div className={styles.article__deleteButton} onClick={deleteHandler}>Delete</div>
          <div className={styles.article__editButton} onClick={editHandler}>Edit</div>
        </div>
        ) : null }

      </div>
      
      </div>
      <div className={styles.article__body}>
        {article.body}
      </div>
      
    </div>
  );
};

export default withRouter(Article);
