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
            <div className="pt-20 text-white relative flex flex-col p-4 gap-5 ">
            <div className="absolute top-0 left-1/4  z-[-1] w-[300px] h-[300px] bg-orange-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-[120px] z-[-1] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 z-[-1] w-[200px] h-[200px] bg-pink-500 rounded-full blur-3xl opacity-50"></div>
                <div className='text-white uppercase origin text-5xl lg:text-6xl text-center '>Toke<span className="uppercase text-[#f87a23] erth">nomics</span></div>

                <div className="text-center">The SIMP token ($IMP) is the native cryptocurrency of our community.<br/>
“0% of tokens were given to founders, 100% was on offer with <a href="www.coinhub.gg" target='blank' className="cursor-pointer text-[#ff9700]">coinhub.gg</a> fair launch <br/>platform meaning all tokens belong to the community with founders needing to buy from the launch pool on CoinHub.


<p className="orign mt-4">With our special $IMP NFT collections on our road map you will need to be holding $IMP coins to be able to mint. <br/>Depending on the grade of the NFT will determine the amount of $IMP required to be held for mintability!<br/> Checkout the white paper for the hidden easter egg (it's not really hidden but read it)</p>
</div>
                <div className="flex items-center flex-col lg:flex-row justify-center h-full gap-10">
                    <div data-aos="fade-right" className="border w-[350px] lg:w-[420px] h-[650px]    rounded-[20px] py-20 flex items-center justify-center flex-col gap-2 p-2  lg:p-5">
                        <p className="text-3xl  origin text-[#ff9700]">Token Info</p>
                        <div className="flex flex-col  items-center justify-center text-[18px] gap-4 ">
                            <p className="">Token Type: Pulsechain</p>
                            <p className="">Token Name: $IMP (SIMP)</p>
                            <p className="">Total Supply: 1,000,000,000</p>
                            <p className="">$IMP</p>
                            <div className="flex items-center border rounded-lg active:bg-[#f87a23]  overflow-hidden justify-center">
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
                                <button className="px-3 rounded-lg py-1 bg-[#df752a] hover:bg-[#ff9041]">
                                    VIEW ON Pulsechain Scan
                                </button>
                            </a>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="border w-[350px] lg:w-[420px] h-[650px] py-10 flex flex-col bg-transparent  items-center gap-7  justify-center rounded-[20px] p-5">
                        <p className="text-3xl  origin text-[#ff9700] text-center">Token <span className="origin text-white">Distribution</span></p>
                            
                        <p className="text-center">$IMP was fairly launched on coinhub where everyone, even the founders purchased their allocations, nothing was given for free.</p>
                       
                        <div className="w-[200px] h-[200px] border rounded-full flex items-center justify-center gre mx-auto">
                            <div className="flex items-center justify-center p-2  rounded-full bg-[#464037]"><img src={voin} alt="" className="w-[100px]" /></div>

                        </div>
                       
                        <p className="  origin text-[#ff9700] text-center">CoinHub prevents rugs by making sure that all created tokens are safe. Each coin on CoinHub is a fair-launch with no presale and no team allocation.</p>

                     


                    </div>

                </div>



            </div>

        </Element>
    )
}

export default Tokenomics