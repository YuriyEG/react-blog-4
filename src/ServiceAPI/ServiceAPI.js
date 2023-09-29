/* eslint-disable */
class ServiceApi {

    constructor() {
      this.baseUrl = 'https://blog.kata.academy/api/';
      this.forUsers = 'users/'
      this.forArticles = 'articles/';
    }

     createUser (obj, onResponse = this.defaultResponce, onError = this.defaultError ) {
  
        fetch(this.baseUrl + this.forUsers,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ user: obj })
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

    createArticle ( receivedArticle, apiKey,  onResponse = () => console.log('Не передан колбэк для респонса'), onError = () => console.log('не передан колбэк для ошибок')) {

        fetch(this.baseUrl + this.forArticles, {
          method: "POST",
          headers: {
  
            "Content-Type": "application/json",
            // "Authorization": `Token ` + JSON.stringify(apiKey),
          },
          body: JSON.stringify({ article: receivedArticle }),
        })
          .then( res => res.json())
          .then( res => onResponse(res))
          .catch( err => onError(err))
    }
    
  }
  let key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M…jg1fQ.JKGQtlidCcXFe06ChHGUGXQeJdG4PkTs7rmaX0qthnU';
  const service = new ServiceApi();
  service.createArticle({
    
      "title": "Зачем разработчикам React",
      "description": "React — самая популярная библиотека ",
      "body": "React — это инструмент для создания пользовательских интерфейсов. Его главная задача — обеспечение вывода на экран того, что можно видеть на веб-страницах. React значительно облегчает создание интерфейсов благодаря разбиению каждой страницы на небольшие фрагменты. Мы называем эти фрагменты компонентами",
      "tags": [
        "string"
      ]
    
  }, key, (res) => console.log(res), (err) => console.log(err))
  
  
  


  export default ServiceApi;