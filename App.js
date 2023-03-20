import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.js';
import Gallery from './pages/gallery/gallery';
import Services from './pages/services/services';
import Signin from './pages/signin/Signin';


function App() {
  return (
   
   <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/signin' element={<Signin/>}/>
      </Routes>
   </Router>
   
   
  );
};
export default App;
