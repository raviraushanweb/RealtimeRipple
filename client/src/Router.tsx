// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoUpload from './views/VideoUpload';
import StreamVideo from './views/StreamVideo';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/stream" element={<StreamVideo />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
