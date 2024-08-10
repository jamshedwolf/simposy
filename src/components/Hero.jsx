import React from 'react'
import logo from "../assets/images/mainlogo.png"

function Hero() {
    return (
        <div className='flex  h-screen hero text-white bg-black mt-20   items-center justify-center'>
            <div className="w-full p-2 h-full bg-black/80 flex justify-centeritems-center">
                <div className="max-w-[1400px]  mx-auto flex flex-col lg:flex-row gap-5 items-center justify-center">
                    <div  data-aos="fade-right"  className="lg:flex-[.5] flex flex-col gap-5   p-5">
                        <h1 className="text-6xl text-[white] font-bold ">$IMP</h1>
                        <p className="text-[18px]">I got 99 problems but being a $IMP isn't one of them 🍆 </p>

                        <div className="flex gap-2">
                            <button className="px-3 bg-[#ff9900] hover:bg-transparent hover:border-2 border-[#ff9900] text-white rounded-full py-1 min-w-fit">
                                $ BUY NOW
                            </button>
                            <button className="px-3 border-2  bg-transparent   border-[#ff9900] text-white rounded-full py-1 min-w-fit">
                                SEE CHART
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="lg:flex-[.5]  p-5">

                        <img src={logo} alt="" className="lg:w-[600px]" />
                    </div>


                </div>





            </div>


        </div>
    )
}

export default Hero