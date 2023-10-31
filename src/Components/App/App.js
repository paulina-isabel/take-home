import NavBar from '../NavBar/NavBar';
import './App.css';
import getArticles from '../../apiCalls'
import { useEffect } from 'react';

const App = () => {

  let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f101fd01d12c42e2877136a41b1b404c'

  useEffect(() => {
    getArticles(url)
  }, [url])

  return (
    <div className="App">
      <NavBar />
      Hewwo
    </div>
  );
}

export default App;
