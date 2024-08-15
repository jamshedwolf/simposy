
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About'
import Hero from './components/Hero'

import Nav from './components/Nav'
import Roadmap from './components/Roadmap'
import Video from './components/Video'
import { useEffect, useState } from 'react';
import Partners from './components/Partners';
import Tokenomics from './components/Tokenomics';
import Web from './components/Web';
import Profile from './components/Profile';
import Loader from './components/Loader';
import simp from "./assets/images/mainlogo.png"




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
    setTimeout(() => {
      setLoader(false)
    }, 3000);


  }, []);

  const [loader, setLoader] = useState(true);

  return (



    <>


      {loader ? (<div className='w-[100vw] lg:flex   text-white bg-black  h-[100vh] text-5xl font-bold absolute top-0  right-0 hidden items-center justify-center'>



        <img   data-aos="fade-down"src={simp} alt="" className="w-[400px]" />
        <p  data-aos="fade-down" className="text-[400px] font-bold origin text-[#ff9900]">$IMP</p>
      </div>) 
      :
       (<div className='overflow-x-hidden relative'>

        <Nav />
        <Hero />
        <Video />
        <About />
        <Tokenomics />
        <Profile />
        <Roadmap />
        <Web />
        <Partners />




      </div>)}








    </>
  )
}

export default App
