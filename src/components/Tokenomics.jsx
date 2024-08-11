import React from 'react'
import { useState } from 'react';
import { Element } from 'react-scroll'
import { MdFileCopy } from "react-icons/md";
import voin from "../assets/images/coin.png"

function Tokenomics() {
    const [copied, setCopied] = useState(false);
    const walletAddress = "0xdaca90aB4F1e776915B48cDfc70a043EdE0Dca83";

    const handleCopy = () => {
        navigator.clipboard.writeText(walletAddress).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        }).catch((err) => {
            console.error('Failed to copy: ', err);
        });
    };
    return (
        <Element name='Tokenomics'>
            <div className="pt-20 text-white flex flex-col p-4 gap-5 lg:h-screen">
                <div className='text-white uppercase origin text-5xl lg:text-6xl text-center '>Toke<span className="uppercase text-[#f87a23] erth">nomics</span></div>
                <div className="flex items-center flex-col lg:flex-row justify-center h-full gap-10">
                    <div data-aos="fade-right" className="border lg:w-[390px]    h-[550px] bg-[#131210] rounded-[20px] py-20 flex items-center justify-center flex-col gap-2 p-2  lg:p-5">
                        <p className="text-3xl  origin text-[#ff9700]">Token Info</p>
                        <div className="flex flex-col  items-center justify-center text-[18px] gap-4 ">
                            <p className="">Token Type: Pulsechain</p>
                            <p className="">Token Name: $IMP (SIMP)</p>
                            <p className="">Total Supply: 1,000,000,000</p>
                            <p className="">$IMP</p>
                            <div className="flex items-center border rounded-full active:bg-[#f87a23]  overflow-hidden justify-center">
                                <input
                                    type="text"
                                    value={walletAddress}
                                    readOnly
                                    className="px-2 py-1   border rounded-l-lg w-[300px] bg-gray-100 text-gray-800"
                                />
                                < MdFileCopy size={35}
                                    onClick={handleCopy}
                                    className="p-2  duration-200"
                                />


                            </div>
                            <a href="https://scan.9inch.io/#/address/0xdaca90aB4F1e776915B48cDfc70a043EdE0Dca83" target='blank' className="mt-5">
                                <button className="px-3 rounded-full py-1 bg-[#df752a] hover:bg-[#ff9041]">
                                    VIEW ON Pulsechain Scan
                                </button>
                            </a>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="border lg:w-[390px] h-[550px] py-10 flex flex-col bg-[#131210]  items-center gap-7  justify-center rounded-[20px] p-5">
                        <p className="text-3xl  origin text-[#ff9700] text-center">Token <span className="origin text-white">Distribution</span></p>

                        <div className="flex  text gap-5">
                            <div className="">-3% Liquidity</div>
                            <div className="">12% Locked</div>


                        </div>
                        <div className="w-[200px] h-[200px] border rounded-full flex items-center justify-center gre mx-auto">
                            <div className="flex items-center justify-center p-2  rounded-full bg-[#464037]"><img src={voin} alt="" className="w-[100px]" /></div>

                        </div>
                        <div className="">50% Presale</div>
                        <p className="text-2xl  origin text-[#ff9700] text-center">Token Taxes-5/5</p>

                        <div className="">5% CEX and Marketting</div>


                    </div>

                </div>



            </div>

        </Element>
    )
}

export default Tokenomics