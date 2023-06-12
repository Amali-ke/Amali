import React from 'react';
import Home from './pages/Home'
import Getinvolved from './pages/Getinvolved';
import Community from './pages/Community';
import About from './pages/Aboutamali';
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={< Home/>} />
      <Route path='/involved' element={< Getinvolved />} />
      <Route path='/community' element={< Community />} />
      <Route path='/about' element={< About/>} />
      <Route path='/team' element={< Team/>} />

    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
