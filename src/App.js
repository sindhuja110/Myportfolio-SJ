import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainPages from './pages/Mainpages';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import UpArrowButton from './components/Uparrow';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} />
      <MainPages isDarkMode ={isDarkMode} /><br /><br />
      <About isDarkMode ={isDarkMode}/><br /><br />
      <Education isDarkMode ={isDarkMode}/><br /><br />
      <Skills isDarkMode ={isDarkMode}/><br /><br />
      <Contact isDarkMode ={isDarkMode}/>
      <UpArrowButton />
    </div>
  );
}

export default App;
