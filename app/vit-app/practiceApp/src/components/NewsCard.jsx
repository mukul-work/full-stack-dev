import '../styles/NewsCard.css';

export default function NewsCard({ article }) {
  return (
    <div className="news-card">
      <div className="heading">
        <h2>
          News Title: <span>{article.title || "No title available"}</span>
        </h2>
        <h2>
          Author: <span>{article.author || "Unknown"}</span>
        </h2>
      </div>

      <div className="content">
        <p>{article.description || "No description available."}</p>
      </div>
    </div>
  );
}