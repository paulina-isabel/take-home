import NavBar from '../NavBar/NavBar';
import './App.css';
import getArticles from '../../apiCalls'
import { useEffect } from 'react';
// import dummyArticles from '../../dummyArticles';
import AllArticles from '../AllArticles/AllArticles';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndividualArticle from '../IndividualArticle/IndividualArticle';

const App = () => {
  const [articles, setArticles] = useState([])

  // search function needs to be created in app
  // add a .filter() in this function
  // pass search function down to navbar in prop
  // search input needs to be made in navbar
  // set articles in navbar using setter from app

  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f101fd01d12c42e2877136a41b1b404c'
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getArticles(url);
        const { articles } = response;
        setArticles(articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [url])

  const handleSearch = (searchWord, existingArticles) => {
    const filteredArticles = existingArticles.filter((article) => {
      return article.title.includes(searchWord)
    });
    setArticles(filteredArticles)
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<AllArticles articles={articles} handleSearch={handleSearch}/>} />
        <Route path='/article/:title' element={<IndividualArticle articles={articles}/>}/>
      </Routes>
    </div>
  );
};

export default App;