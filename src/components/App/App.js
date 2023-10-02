/* eslint-disable */

import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Navigate } from "react-router-dom";
import { Switch, Redirect } from 'react-router-dom';

import Header from '../Header';
import CreateArticle from '../CreateArticle';
import EditArticle from '../EditArticle';
import List from '../List';
import SignIn from '../SignIn';
import EditProfile from '../EditProfile';
import SignUp from '../SignUp';
import Article from '../Article';



import styles from './App.module.css';
import ServiceApi from '../../ServiceAPI/ServiceAPI';
const service = new ServiceApi();

const App = () => {

 const [auth, setAuth ] = useState(localStorage.getItem('isAuth'));
 const [curUser, setCurUser] = useState({});
 console.log('authorization is: ', localStorage.getItem('isAuth'), auth);

 useEffect( () => {
  service.getCurrentUser((res) => {
    setCurUser(res);
  }, (err) => console.log(err));
 }, [])
  
 

  return (
    <Router>
      <div className={styles.app}>
        <Header path="/" exact auth={auth} setAuth={setAuth} />
        <Switch>

     
        <Route path="/"  component={List} exact />
        <Route path="/articles" component={List} exact />
        <Route path="/articles/:id" render={
           ({ match, location, history }) => {
            console.log(match);
            const { id } = match.params;
            return <Article itemId={id} />
           }} exact />
        <Route path="/sign-up" component={SignUp} exact/>
        <Route path="/sign-in" render={ () => {
          return <SignIn auth={auth} setAuth={setAuth} />
        }}  exact/>
        <Route path="/profile" component={EditProfile} exact/>
        <Route path="/new-article" exact 
          render={ () => {
            return <CreateArticle auth={auth}/>
          }}
        />
        <Route path="/articles/:slug/edit" render={

          ({match, location, history }) => {
            if (auth === 'false') {
              history.push('/sign-in');
            }
            console.log(match);
            const { slug } = match.params;
            return <EditArticle slug={slug} exact />
          }
        }/>
        <Route render={ () => <h1 style={{ marginTop: '50px', marginLeft: '40%'}}>Page not found!</h1>}/>
                </Switch>
   


      
      </div>
    </Router>
  );
};

export default App;
