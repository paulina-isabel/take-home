import { useState } from 'react';
import { formatPublishedDate } from "../../utils";
import { Link } from 'react-router-dom';

const AllArticles = ({ articles, handleSearch }) => {  
  const [searchValue, setSearchValue] = useState('');

  const allArticles = articles.map((article) => {
    const reformattedDate = formatPublishedDate(article.publishedAt)
    return (
      <Link to={`/article/${article.title}`} key={article.title}>
        <div className="article-container" >
            <div className="title-author">
              <h2>
                {article.title}
              </h2>
              {reformattedDate}
              <p>
                Source: {article.source.name}
              </p>
              Author: {article.author}
            </div>
            <img src={article.urlToImage} alt={article.title} className="article-img" />
        </div>
      </Link>
    );
  });

  return (
    <div className="all-articles">
      <form>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className='searchbar'
          />
        <button onClick={() => handleSearch(searchValue, articles)}>Search</button>
      </form>
      {allArticles}
    </div>
  );
};

export default AllArticles;