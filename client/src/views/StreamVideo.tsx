import React, { useEffect, useState } from 'react';

const VideoPlayer = () => {
  const [filename, setFilename] = useState(localStorage.getItem('convertedFilename') || ''); // replace with the actual filename you got from the API

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/streamer/stream/${filename}`, {
      method: 'GET',
      headers: {
        'Range': 'bytes=0-16000', // replace with the actual range you want
      },
    });
  }, [filename]);

  return (
    <div>
      <video controls src={`${process.env.REACT_APP_HOST}/streamer/stream/${filename}`} />
    </div>
  );
};

export default VideoPlayer;
