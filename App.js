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
import Contact from './pages/contact/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Services1 from './pages/services1/Services1';
import Services2 from './pages/services2/Services2';
import Services3 from './pages/services3/Services3';

function App() {
  return (
   
   <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/services1' element={<Services1/>}/>
          <Route path='/services2' element={<Services2/>}/> 
          <Route path='/services3' element={<Services3/>}/>
      </Routes>
   </Router>
   
   
  );
};
export default App;
