import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/videos/')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the videos!', error);
      });
  }, []);

  return (
    <div>
      <h2>Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <a href={video.url} target="_blank" rel="noopener noreferrer">{video.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
