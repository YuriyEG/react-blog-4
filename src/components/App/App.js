/* eslint-disable */

import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Navigate } from "react-router-dom";

import Header from '../Header';
import CreateArticle from '../CreateArticle';
import EditArticle from '../EditArticle';
import List from '../List';
import SignIn from '../SignIn';
import EditProfile from '../EditProfile';
import SignUp from '../SignUp';
import Article from '../Article';


import styles from './App.module.css';



const App = () => {

 const [authentificated, setAuthentificated ] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false)); 
  

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Route path="/"  component={List} exact/>
        <Route path="/articles" component={List}/>
        <Route path="/articles/:id" render={
           ({ match, location, history }) => {
            console.log(match);
            const { id } = match.params;
            return <Article itemId={'redux-okdq9t'} />
           }}/>
        <Route path="/sign-up" component={SignUp} exact/>
        <Route path="/sign-in" component={SignIn} exact/>
        <Route path="/profile" component={EditProfile} exact/>
        <Route path="/new-article" component={CreateArticle} exact />
        {/* <Route path="/articles/{slug}/edit" component={EditArticle} exact /> */}


      
      </div>
    </Router>
  );
};

export default App;
