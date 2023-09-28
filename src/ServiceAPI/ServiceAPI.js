/* eslint-disable */
class ServiceApi {

    constructor() {
      this.baseUrl = 'https://blog.kata.academy/api/';
      this.forUsers = 'users/'
      this.forArticles = 'articles/';
    }

     createUser (obj, onResponse = this.defaultResponce, onError = this.defaultError ) {
        let obj = {
          user: {
            username: username,
            email: email,
            password: password
          }
        }
  
        fetch(this.baseUrl + this.forUsers,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  }
  )
    .then( res => res.json())
    .then( res => onResponse(res))
    .catch( err => onError(err))
  
    }
  
   getArticles (onResponse, onError, limit = 5, offset = 0 ) {
  
      fetch(this.baseUrl + this.forArticles + `?limit=${limit}&&offset=${offset}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        }
      })
        .then( res => res.json())
        .then( res => onResponse(res))
        .then( err => onError(err))
  
    }
    
  }
  
  
  
  let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M…jg1fQ.JKGQtlidCcXFe06ChHGUGXQeJdG4PkTs7rmaX0qthnU';

  export default ServiceApi;