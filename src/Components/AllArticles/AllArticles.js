import IndividualArticle from "../IndividualArticle/IndividualArticle";
import { useState } from 'react';
import { formatPublishedDate } from "../../utils";

const AllArticles = ({ articles, handleSearch }) => {  
  const [searchValue, setSearchValue] = useState('');

  const allArticles = articles.map((article) => {
    const reformattedDate = formatPublishedDate(article.publishedAt)
    return (
      <div className="article-container" key={article.title}>
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
        <img src={article.urlToImage} alt={article.title} className="article-img"></img>
      </div>
    );
  });

  return (
    <div className="all-articles">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button onClick={() => handleSearch(searchValue, articles)}>Search</button>
      {/* <IndividualArticle articles={articles}/> */}
      {allArticles}
    </div>
  );
};

export default AllArticles;