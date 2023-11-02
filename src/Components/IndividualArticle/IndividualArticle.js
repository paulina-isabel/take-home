import { useParams } from 'react-router-dom';

const IndividualArticle = ({ articles }) => {
  const { title } = useParams();

  const selectedArticle = articles.find((article) => article.title == title);

  if (!selectedArticle) {
    return <div>Article not found</div>;
  }

  return (
    <div className='selected-article'>
      <h2>{selectedArticle.title}</h2>
      <p>{selectedArticle.description}</p>
      <img src={selectedArticle.urlToImage} alt={selectedArticle.title} className="article-img"></img>
    </div>
  );

};

export default IndividualArticle;