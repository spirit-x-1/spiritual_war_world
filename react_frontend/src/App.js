import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticleList from './components/ArticleList';
import VideoList from './components/VideoList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/videos" element={<VideoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
