import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPages from './pages/Mainpages';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundColor:"rgb(51, 49, 49)"}}>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPages />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
