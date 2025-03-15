import React from 'react';
import './App.css'
import Pets from './Pets'
import { Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
import PetDetails from './components/PetDetails';

const App = () =>  {
  return <div> 
        <Navbar />
        <div className='cotainer'>
          <Routes>
            <Route path='/' element={<Pets />} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/pets' element={<Pets />} />
            <Route path='/pet/:id' element={<PetDetails />} />
          </Routes>
          </div>
    </div>
}

export default App;
