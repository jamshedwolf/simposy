
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About'
import Hero from './components/Hero'

import Nav from './components/Nav'
import Roadmap from './components/Roadmap'
import Video from './components/Video'
import { useEffect } from 'react';
import Partners from './components/Partners';
import Tokenomics from './components/Tokenomics';
import Web from './components/Web';
import Profile from './components/Profile';




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Nav />
      <Hero />
      <Video />
      <About />
      <Tokenomics/>
      <Profile/>
      <Roadmap />
      <Web/>
      <Partners />




    </div>
  )
}

export default App
