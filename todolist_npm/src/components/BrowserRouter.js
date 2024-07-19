import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoSearch from './components/TodoSearch'; // Impor TodoSearch

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<TodoInput />} />
          <Route path="/search" element={<TodoSearch />} /> 
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h1>This is home page</h1>;
};

export default App;
