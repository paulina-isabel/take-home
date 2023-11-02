import NavBar from '../NavBar/NavBar';
import './App.css';
// import getArticles from '../../apiCalls'
// import { useEffect } from 'react';
import articles from '../../dummyArticles'
import AllArticles from '../AllArticles/AllArticles'
import { useState } from 'react'

const App = () => {

  const [items, setItems] = useState([])

  // search function needs to be created in app
  // search needs to be made in navbar
  // set articles in 

  console.log(articles)
  // let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f101fd01d12c42e2877136a41b1b404c'

  // useEffect(() => {
  //   getArticles(url)
  // }, [url])

  return (
    <div className="App">
      <NavBar />
      <AllArticles articles={articles}/>
    </div>
  );
}

export default App;