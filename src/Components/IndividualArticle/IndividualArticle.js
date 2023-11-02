const IndividualArticle = ({ articles }) => {

  const formatPublishedDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  }

  
  const allArticles = articles.map((article) => {
    const reformattedDate = formatPublishedDate(article.publishedAt)
    return (
      <div className="article-container">
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
    )
  });
  
  return (
    <div>
      {allArticles}
    </div>
  );
};

export default IndividualArticle;