import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the News Channel</h1>
      <nav>
        <Link to="/articles">Articles</Link>
        <Link to="/videos">Videos</Link>
      </nav>
    </div>
  );
};

export default Home;
