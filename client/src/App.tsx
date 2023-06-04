import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VideoUpload from './views/VideoUpload';
import StreamVideo from './views/StreamVideo';

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <nav className="p-6 bg-gray-800 sticky top-0">
        <h1 className="text-2xl font-semibold">RealtimeRipple</h1>
      </nav>
     <Routes>
        <Route path="/" element={<VideoUpload />} />
        <Route path="/stream" element={<StreamVideo />} />
      </Routes>
    </div>
  );
}

export default App;
