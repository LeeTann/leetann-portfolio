import React from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
