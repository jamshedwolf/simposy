import React from 'react'
import video from "../assets/images/file.mp4"
import LOGO from "../assets/images/LOGO.webp"
import { Element } from 'react-scroll'

function Web() {
    return (
        <Element name='Buy'>
            
        <div className='flex p-2  max-w-[1400px] flex-col gap-5 mx-auto lg:h-screen items-center justify-center'>
        <p data-aos="fade-down" className=" text-center text-5xl  lg:text-6xl  text-white font-bold origin   ">Buy From 9inch</p>
            <div className=" mx-auto  relative  w-full h-full  flex flex-col  gap-10 videoo items-center justify-center ">
                <video src={video} autoPlay
                    loop
                    muted

                    className=' absolute w-full h-full z-[-1] top-0 left-0'></video>

                <img src={LOGO} alt="" className=" z-10" />
                <div className="flex flex-col gap-2"><p data-aos="fade-left" className=" text-center text-5xl lg:text-6xl  text-white font-bold    ">The Rock Hard DEX</p>
                    <p data-aos="fade-right" className=" text-center text-xl lg:text-2xl  text-[#d4aae8]     ">Staking and yield-farming for PulseChain & Ethereum</p></div>
                <div className="flex gap-5 z-40 ">
                    <a href="https://app.9inch.io/?chain=pulsechain&outputCurrency=0xdaca90aB4F1e776915B48cDfc70a043EdE0Dca83&inputCurrency=0xefD766cCb38EaF1dfd701853BFCe31359239F305" target='_blank' className=""> <button className="px-4 p-1 bg-[#3f9e6d] hover:bg-[#58ca3c] rounded-lg z-10 text-white text-[20px] font-bold">Enter DEX</button></a>
                </div>




            </div>



        </div>
        </Element>
    )
}

export default Web