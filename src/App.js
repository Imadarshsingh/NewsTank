import React from 'react';
import Navbar from './components/Navbar';
import Newscontent from './components/Newscontent';
import { useState } from 'react';
import Footer from './components/Footer';
import './App.css'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  const [category, setcategory] = useState(["technology"]);
  return (
    <Routes>
      <Route path='/' element={<>
        <Navbar setcategory={setcategory} />
        <Newscontent category={category} />
        <Footer /></>} />
    </Routes>
  );
}
export default App;