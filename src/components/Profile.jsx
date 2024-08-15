import React from 'react'
import pro from "../assets/images/1.jpg"
import twtr from '../assets/images/twiter.webp';
function Profile() {
  return (
    <div className='flex items-center flex-col p-2 gap-5 relative py-20 text-white justify-center'>
        <div className="absolute top-0 left-1/4  z-[-1] w-[300px] h-[300px] bg-orange-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 z-[-1] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 z-[-1] w-[200px] h-[200px] bg-pink-500 rounded-full blur-3xl opacity-50"></div>
<p className="text-2xl text-center ">This is HexyBastard Lord $IMP and founder (center) with his ladies of PulseChain</p>

<img src={pro} alt="" className="w-[600px] rounded-[20px]" />
<a href="https://x.com/hexybastard"  target="blank" className=""><img src={twtr} alt="" className="w-8 h-8 rounded-full transition-all hover:scale-150 duration-300" /></a>



    </div>
  )
}

export default Profile