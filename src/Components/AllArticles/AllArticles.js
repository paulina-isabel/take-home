const AllArticles = ({ articles }) => {
  const allArticles = articles.map((article) => {
    return (
      <div className="article-container">
        <div className="title-author">
          <h1>
            {article.title}
          </h1>
          {article.author}
        </div>
        <img src={article.urlToImage} alt={article.title} className="article-img"></img>
      </div>
    )
  })
  
  return (
    <div>
      {allArticles}
    </div>
  )
}

export default AllArticles;