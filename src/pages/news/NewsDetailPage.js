import { useParams } from 'react-router-dom';

const NewsDetailPage = () => {
  const { id } = useParams();
  
  // Завантажте дані новини за id
  const article = getArticleById(id);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <img src={article.image} alt={article.title} />
    </div>
  );
};
