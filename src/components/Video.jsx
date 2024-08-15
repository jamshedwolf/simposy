import React from 'react'
import vid from "../assets/images/video.mp4"
import latina from "../assets/images/unnamed.png"

function Video() {
  return (
    <div className='py-10 relative bg-transparent'>
      
        <div className="absolute top-1/2 right-1/4 z-[-1] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 z-[-1] w-[200px] h-[200px] bg-pink-500 rounded-full blur-3xl opacity-50"></div>
    <div className="max-w-[1400px] text-[18px] text-white mx-auto   gap-5 flex flex-col  items-center justify-center p-2 lg:p-20">
    <h1 className='text-center text-[20px] flex items-center font-semibold text-[#ff9900] uppercase'> Friendly welcome from PulseLatina <img src={latina} alt="" className=" hidden md:block md:w-20 xl:w-20 " /> to all you $IMPS  
    </h1>
    <video controls  className="lg:w-[900px] w-auto rounded-[30px]" src={vid}></video>
   
        
    </div>
    
    
    
    
    
        </div>
  )
}

export default Video