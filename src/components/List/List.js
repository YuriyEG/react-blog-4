/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';

import ArticleItem from '../ArticleItem';

import styles from './list.module.css';

const List = () => {
  const [articles, setArticles] = useState([1, 3, 4]);

  useEffect(() => {
    fetch('https://blog.kata.academy/api/articles')
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.articles);
        console.log(res);
      });
  }, []);
  
  return (
    <div className={styles.list}>
      {articles.map((article) => (
        <ArticleItem article={article} key={Math.random()*Date.now()}/>
      ))}
      <div className={styles.list__pagination}>
        <Pagination />
      </div>
    </div>
  );
};

export default List;
