import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PostFullView from './components/PostFullView/PostFullView';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PostFullView />} path="/full-view" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
