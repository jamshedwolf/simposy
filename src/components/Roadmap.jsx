import React from 'react'
import logo from "../assets/images/logo.png"
import { Element } from 'react-scroll'

function Roadmap() {
    return ( <Element name='Roadmap'>
        <div className='py-10 relative '>

        <div className="absolute w-[300px] h-[300px] bg-[#f87a23] rounded-full blur-[150px] opacity-100 top-[20%] left-[15%]"></div>
<div className="absolute w-[400px] h-[400px] bg-[#00a7a7] rounded-full blur-[200px] opacity-100 top-[60%] right-[20%]"></div>
<div className="absolute w-[400px] h-[200px] bg-[#00a7a7] rounded-full blur-[200px] opacity-100 bottom-[20%] left-[20%]"></div>
<div className="absolute w-[250px] h-[250px] bg-[#ec8c00] rounded-full blur-[125px] opacity-100 bottom-[10%] left-[80%]"></div>
<div className="absolute w-[350px] h-[350px] bg-[#f87a23] rounded-full blur-[275px] opacity-100 bottom-[60%] left-[10%]"></div>
<div className="absolute w-[200px] h-[200px] bg-[#00a7a7] rounded-full blur-[100px] opacity-100 top-[10%] right-[40%]"></div>

            <div className="max-w-[1400px] relative  text-[18px] text-white mx-auto   gap-5 flex flex-col  items-center justify-center p-2 lg:p-20">
                <div className=" flex flex-col gap-5">
                    <p data-aos="fade-left" className=" text-center text-5xl lg:text-6xl origin ">ROAD<span className="erth text-[#f87a23]">MAP</span></p>
                    <p data-aos="fade-right" className="text-center ">

                        Our roadmap is a testament to our commitment to building a vibrant community centered around memes and <br />cryptocurrency. We believe in the power of laughter, creativity, and the boundless potential of blockchain <br />technology.</p>



                    <p data-aos="fade-left" className="text-center ">From our initial project launch to global expansion, each phase brings unique opportunities for growth,<br /> engagement, and innovation. We invite you to explore our roadmap, witness our progress, and join us<br /> in shaping the future of memecoin revolution.</p>
                </div>

                <div className="hidden lg:block">
                    <div data-aos="fade-left" className="w-[700px] flex items-center px-2 gap-5 lg:absolute lg:top-[500px] lg:left-[311px]  h-[200px]">
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">01</span></p>
                            <p className="text-xl text-center">Launch $SIMP Coin</p>
                        </div>
                        <div className="w-5 h-5 hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>

                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-right" className="w-[700px] flex  items-center justify-end px-2 lg:left-[388px] lg:top-[800px]  gap-5 lg:absolute   h-[200px]">
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>
                        <div className="w-5 h-5 hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">02</span></p>
                            <p className="text-xl text-center">Go to pub</p>
                        </div>


                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>


                    <div data-aos="fade-left" className="w-[700px] flex items-center px-2 gap-5 lg:absolute lg:top-[1100px] lg:left-[311px]  h-[200px]">
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">03</span></p>
                            <p className="text-xl text-center">Media Design Pack with logos and Dex screener info update</p>
                        </div>
                        <div className="w-5 h-5  hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>

                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-right" className="w-[700px] flex  items-center justify-end px-2 lg:left-[388px] lg:top-[1400px]  gap-5 lg:absolute   h-[200px]">
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>
                        <div className="w-5 h-5 hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">04</span></p>
                            <p className="text-xl text-center">Have a few benders at the pub and wait for Jeets to dump (approx. 2 weeks)</p>
                        </div>


                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-left" className="w-[700px] flex items-center px-2 gap-5 lg:absolute lg:top-[1700px] lg:left-[311px]  h-[200px]">
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">05</span></p>
                            <p className="text-xl text-center">Pump the socials with $IMPs</p>
                        </div>
                        <div className="w-5 h-5 hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>

                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-right" className="w-[700px] flex  items-center justify-end px-2 lg:left-[388px] lg:top-[2000px]  gap-5 lg:absolute   h-[200px]">
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>
                        <div className="w-5 h-5 hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">06</span></p>
                            <p className="text-xl text-center"> Goal: 1000 holders or $1m Market Cap</p>
                        </div>


                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-left" className="w-[700px] flex items-center px-2 gap-5 absolute lg:top-[2300px] lg:left-[311px]  h-[200px]">
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">07</span></p>
                            <p className="text-xl text-center">Website v2 with $IMP NFT minting and tokenomics</p>
                        </div>
                        <div className="w-5 h-5  hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-40 h-40   hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>

                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-right" className="w-[700px] flex  items-center justify-end px-2 lg:left-[388px] lg:top-[2600px]  gap-5 lg:absolute   h-[200px]">
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>
                        <div className="w-5 h-5  hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">08</span></p>
                            <p className="text-xl text-center">Create unique limited $IMP NFTs from the community</p>
                        </div>


                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                    <div data-aos="fade-left" className="w-[700px] flex items-center px-2 gap-5 lg:absolute lg:top-[2900px] lg:left-[311px]  h-[200px]">
                        <div className="w-[350px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">09</span></p>
                            <p className="text-xl text-center">Buy HexyBastard an RX8 that runs</p>
                        </div>
                        <div className="w-5 h-5  hidden lg:block bg-[#00a7a7] border-2 border-white rounded-full"></div>
                        <div className="w-40 h-40  hidden lg:block rounded-full border-2 border-white overflow-hidden"><img src={logo} alt="" className="w-full h-full" /></div>

                        {/* <div className=""><img src= alt="" className="" /></div> */}
                    </div>
                 
                    
                    </div>


   
                



                <div className=" h-[2500px]  w-[1px] mt-40 hidden lg:block  border-white border-l-4 border-dotted"></div>

                <div className="flex flex-col items-between  lg:hidden  justify-center">


                    <div data-aos="fade-left" className="w-[300px]   flex flex-col items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">01</span></p>
                            <p className="text-xl text-center">Launch $SIMP Coin</p>
                        </div>

                    </div>
                  
                    <div data-aos="fade-right" className="w-[300px] mt-[60px] flex flex-col items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">02</span></p>
                            <p className="text-xl text-center">Go to pub</p>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="w-[300px] flex  mt-[80px] flex-col items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[140px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">03</span></p>
                            <p className="text-xl text-center">Media Design Pack with logos and Dex screener info update</p>
                        </div>

                    </div>
                    <div data-aos="fade-right" className="w-[300px] flex flex-col  mt-[110px] items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[160px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">04</span></p>
                            <p className="text-xl text-center">Have a few benders at the pub and wait for Jeets to dump (approx. 2 weeks)</p>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="w-[300px] flex flex-col mt-[100px] items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">05</span></p>
                            <p className="text-xl text-center"> Pump the socials with $IMPs</p>
                        </div>

                    </div>
                    <div data-aos="fade-right" className="w-[300px] flex flex-col mt-[80px] items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">06</span></p>
                            <p className="text-xl text-center">Goal: 1000 holders or $1m Market Cap</p>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="w-[300px] flex flex-col mt-[80px] items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">07</span></p>
                            <p className="text-xl text-center">Website v2 with $IMP NFT minting and tokenomics</p>
                        </div>

                    </div>
                    <div data-aos="fade-right" className="w-[300px] flex flex-col mt-[80px] items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">08</span></p>
                            <p className="text-xl text-center">Create unique limited $IMP NFTs from the community</p>
                        </div>

                    </div>
                    <div data-aos="fade-left" className="w-[300px] flex flex-col mt-[80px] items-center justify-center px-2    h-[80px]">

                        <div className="w-[250px] flex items-center justify-center flex-col bg-[#1f1d1d] border-2 p-5 h-[120px] rounded-lg  ">
                        <p className="text-2xl text-center text-[#f87a23] erth">PHASE <span className="origin text-white text-4xl">09</span></p>
                            <p className="text-xl text-center">Buy HexyBastard an RX8 that runs</p>
                        </div>

                    </div>
                </div>




            </div>

   
            <p data-aos="fade-left" className="text-center p-10 text-white ">Remember for the $IMP nft collection you’re going to need your $IMP coins to be able to mint</p>






        </div>
        </Element>
    )
}

export default Roadmap