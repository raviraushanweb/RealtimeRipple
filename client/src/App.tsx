import React from 'react';
import VideoUpload from './views/VideoUpload';

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <nav className="p-6 bg-gray-800 sticky top-0">
        <h1 className="text-2xl font-semibold">RealtimeRipple</h1>
      </nav>
      <div className="p-6">
        <VideoUpload />
      </div>
    </div>
  );
}

export default App;
