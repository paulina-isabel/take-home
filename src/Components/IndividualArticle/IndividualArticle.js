import { useParams } from 'react-router-dom';
import { formatPublishedDate } from "../../utils";

const IndividualArticle = ({ articles }) => {
  const { title } = useParams();

  const selectedArticle = articles.find((article) => article.title === title);

  if (!selectedArticle) {
    return <div>Article not found</div>;
  }

  return (
    <div className='selected-article'>
      <h2>{selectedArticle.title}</h2>
      <p>
        {formatPublishedDate(selectedArticle.publishedAt)}
      </p>
      <img src={selectedArticle.urlToImage} alt={selectedArticle.title} className="article-img" />
      <p className='selected-article-description'>
        {selectedArticle.content}
      </p>
      <p>
        Source: {selectedArticle.source.name}
      </p>
      Author: {selectedArticle.author}
    </div>
  );

};

export default IndividualArticle;