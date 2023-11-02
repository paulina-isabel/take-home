import IndividualArticle from "../IndividualArticle/IndividualArticle";

const AllArticles = ({ articles }) => {  
  return (
    <div className="all-articles">
      <IndividualArticle articles={articles}/>
    </div>
  )
};

export default AllArticles;