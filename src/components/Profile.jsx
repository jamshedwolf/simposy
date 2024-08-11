import React from 'react'
import pro from "../assets/images/pro.png"
import twtr from '../assets/images/twiter.webp';
function Profile() {
  return (
    <div className='flex items-center flex-col gap-5 py-20 text-white justify-center'>
<p className="text-2xl ">This is HexyBastard Lord $IMP and founder (center) with his ladies of PulseChain</p>

<img src={pro} alt="" className="w-[600px]" />
<a href="https://x.com/hexybastard"  target="blank" className=""><img src={twtr} alt="" className="w-8 h-8 rounded-full transition-all hover:scale-150 duration-300" /></a>



    </div>
  )
}

export default Profile