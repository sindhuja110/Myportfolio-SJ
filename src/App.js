import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPages from './pages/Mainpages';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App" style={{backgroundColor:"rgb(51, 49, 49)"}}>
           <Header />
          
          <MainPages /><br/><br/>
          <About  /><br/><br/>
          <Education/><br/><br/>
          <Skills /><br/><br/>
          <Contact />
       
    </div>
  );
}

export default App;
