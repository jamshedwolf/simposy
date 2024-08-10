
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About'
import Hero from './components/Hero'

import Nav from './components/Nav'
import Roadmap from './components/Roadmap'
import Video from './components/Video'
import { useEffect } from 'react';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Video />
      <About />
      <Roadmap />



    </>
  )
}

export default App
