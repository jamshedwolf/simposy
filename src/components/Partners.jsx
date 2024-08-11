import React from 'react'
import pulse from "../assets/images/pulse.png"
import coin from "../assets/images/coin.png"
import inch from "../assets/images/9inch.webp"
import last from "../assets/images/last.webp"
import logo from '../assets/images/mainlogo.png';

import discord from '../assets/images/discord.svg';
import tele from '../assets/images/tele.svg';
import twtr from '../assets/images/twtr.svg';

function Partners() {
    return (
        <div className='flex  flex-col  gap-5 '>
            <div className="max-w-[1400px] mx-auto">
                <div className="flex py-10 lg:py-20 items-center justify-center gap-10 flex-col ">
                    <p className="  lg:text-6xl  text-5xl text-[#f87a23] origin "><span className="origin text-white">PART</span>NERS</p>
                    <div className="flex items-center justify-center gap-5 flex-col lg:flex-row">
                        <a href="https://pulsechain.com" target='_blank' >
                            <img src={pulse} alt="PulseChain" className="border-2 p-2 rounded-lg w-[200px] h-[80px] transition-all duration-200 hover:scale-110" />
                        </a>
                        <a href="https://coinhub.gg" target='_blank'>
                            <img src={coin} alt="CoinHub" className="border-2 p-2 rounded-lg w-[200px] h-[80px] transition-all duration-200 hover:scale-110" />
                        </a>
                        <a href="https://www.9inch.io/" target='_blank'>
                            <img src={inch} alt="9Inch" className="border-2 p-2 rounded-lg w-[200px] h-[80px] transition-all duration-200 hover:scale-110" />
                        </a>
                        <a href="https://internetmoney.io" target='_blank'>
                            <img src={last} alt="Internet Money" className="border-2 p-2 rounded-lg w-[200px] h-[80px] transition-all duration-200 hover:scale-110" />
                        </a>
                    </div>
                </div>

               
            </div>
<div className="bg-[#282828] flex flex-col h-[70vh] lg:h-auto p-3 gap-2">
            <div className="flex  flex-col md:flex-row p-5 px-5 rounded-lg gap-10 bg-[#282828] w-full items-center justify-center lg:justify-between   lg:mt-20">
                    <div className=" flex text-center">
                        <img src={logo} alt="Main Logo" className="w-[150px]" />
                    </div>
                    <div className=" text-[#ff9700] flex items-center justify-center gap-5 mt-5">
                        <div className="flex text-black items-center justify-center gap-4">
                            <a href="#" target='_blank'>
                                <img src={discord} alt="Discord" className="w-8" />
                            </a>
                            <a href="#" target='_blank'>
                                <img src={tele} alt="Telegram" className="w-8" />
                            </a>
                            <a href="#" target='_blank'>
                                <img src={twtr} alt="Twitter" className="w-8" />
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-center lg:text-xl  text-white">
                SIMP isn't just a cryptocurrency, it's a community. Our dedicated members work together to shape the future of the project. Join us!</p>
                <p className="text-center text-sm p-5 text-white">© 2023 by SIMP. All rights reserved!
               </p>
                </div>

                
       
        </div>
    )
}

export default Partners;
