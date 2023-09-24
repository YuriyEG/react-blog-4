import React from 'react';

import Header from '../Header';
import Article from '../Article';
import DeleteArticle from '../DeleteArticle';
import CreateArticle from '../CreateArticle';
import EditArticle from '../EditArticle';
import List from '../List/List';
import ListAuthorised from '../ListAuthorised';
import ArticleAuthorised from '../ArticleAuthorised';
import SignIn from '../SignIn';
import EditProfile from '../EditProfile';
import SignUp from '../SignUp';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <SignUp />
      <EditProfile />
      <SignIn />

      <Article />
      <DeleteArticle />
      <CreateArticle />
      <EditArticle />
      <List />
      <ListAuthorised />
      <ArticleAuthorised />
    </div>
  );
};

export default App;
