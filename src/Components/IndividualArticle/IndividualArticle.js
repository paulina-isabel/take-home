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
      <p>
        Source: {selectedArticle.source.name}
      </p>
      Author: {selectedArticle.author}
      <img src={selectedArticle.urlToImage} alt={selectedArticle.title} className="article-img"></img>
      <p className='selected-article-description'>{selectedArticle.content}</p>
    </div>
  );

};

export default IndividualArticle;