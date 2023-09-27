/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

import Header from '../Header';
import CreateArticle from '../CreateArticle';
import EditArticle from '../EditArticle';
import List from '../List';
import SignIn from '../SignIn';
import EditProfile from '../EditProfile';
import SignUp from '../SignUp';

import styles from './App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Route path="/"  render={ () => <h1>Welcome!</h1>} exact />
        <Route path="/articles" exact component={List} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        {/* <List articles={[1, 3, 5, 6, 6, 3]} />
        <EditArticle />
        <CreateArticle />
        <SignUp />
        <EditProfile />
        <SignIn /> */}
      </div>
    </Router>
  );
};

export default App;
