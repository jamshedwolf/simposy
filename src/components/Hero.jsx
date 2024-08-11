import React from 'react'
import logo from "../assets/images/mainlogo.png"
import { FaChartLine } from "react-icons/fa";


function Hero() {
    return (
        <div className='flex bg-fixed   hero text-white bg-black mt-20   items-center justify-center'>
            <div className="w-full lg:py-20 p-2 h-full bg-black/80 flex justify-centeritems-center">
                <div className="max-w-[1400px]  mx-auto flex flex-col lg:flex-row gap-5 items-center justify-center">
                    <div  data-aos="fade-right"  className="lg:flex-[.5] order-2 lg:order-1 flex flex-col gap-5   p-5">
                        <h1 className="text-6xl text-[white]  origin">$IMP</h1>
                        <p className="text-[18px]">I got 99 problems but being a $IMP isn't one of them 🍆 </p>
                        <p className="text-[18px]"> In the wild world of crypto, be sharp as a Satoshi and<br/> bold as a Bitcoin bull. Ready to embrace the power of<br/>  $IMP? This is where guys do whatever a hot babe <br/> commands. Bend the knee and join the revolution with $IMP<br/> today! 💐 </p>

                        <div className="flex gap-2">
                            <button className="px-8 bg-[#ff9900] hover:bg-transparent hover:border-2 border-[#ff9900] text-white rounded-lg py-2 min-w-fit">
                                $ BUY NOW
                            </button>
                            <button className="px-8 border-2 flex gap-2 items-center  bg-transparent   border-[#ff9900] text-white rounded-lg py-2 min-w-fit">
                              <FaChartLine />  SEE CHART
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="lg:flex-[.5] lg:order-2 order-1  p-5">

                        <img src={logo} alt="" className="lg:w-[600px]" />
                    </div>


                </div>





            </div>


        </div>
    )
}

export default Hero