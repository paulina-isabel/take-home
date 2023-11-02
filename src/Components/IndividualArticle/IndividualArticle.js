import { formatPublishedDate } from "../../utils";

const IndividualArticle = ({ articles }) => {
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
    <div>
      {allArticles}
    </div>
  );
};

export default IndividualArticle;