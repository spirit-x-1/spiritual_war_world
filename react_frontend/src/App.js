import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/api/articles/')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);

  return (
    <div>
      {/* Banner with space for logo */}
      <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
        <img src="your_logo_url_here" alt="Logo" style={{ width: '200px', height: 'auto' }} />
      </div>
      
      {/* Main content */}
      <div>
        <h1>Articles</h1>
        <ul>
          {articles.map(article => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
