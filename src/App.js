import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Actualities from './pages/Actualities';
import ContactUs from './pages/ContactUs';
import Realization from './pages/Realization';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/actualities" element={<Actualities />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/realization' element={<Realization />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;