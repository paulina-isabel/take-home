import NavBar from '../NavBar/NavBar';
import './App.css';
// import getArticles from '../../apiCalls'
// import { useEffect } from 'react';
import articles from '../../dummyArticles'
import AllArticles from '../AllArticles/AllArticles'

const App = () => {

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