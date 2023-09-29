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

    async createArticle ( receivedArticle,  onResponse = () => console.log('Не передан колбэк для респонса'), onError = () => console.log('не передан колбэк для ошибок')) {
        console.log('Передаем ', receivedArticle, );
      const token = localStorage.getItem('token');
        fetch(this.baseUrl + this.forArticles, {
          method: "POST",
          headers: {
  
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
          },
          body: JSON.stringify({ article: receivedArticle }),
        })
          .then( res => res.json())
          .then( res => onResponse(res))
          .catch( err => onError(err))
    }
    
  }
  // const service = new ServiceApi();
  // service.createArticle({
    
  //     "title": "Зачем разработчикам React",
  //     "description": "React — самая популярная библиотека ",
  //     "body": "React — это инструмент для создания пользовательских интерфейсов. Его главная задача — обеспечение вывода на экран того, что можно видеть на веб-страницах. React значительно облегчает создание интерфейсов благодаря разбиению каждой страницы на небольшие фрагменты. Мы называем эти фрагменты компонентами",
  //     "tags": [
  //       "string"
  //     ]
    
  // }, 'sdfsfs' , (res) => console.log(res), (err) => console.log(err))
  
  
  


  export default ServiceApi;