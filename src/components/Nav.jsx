import React, { useState } from 'react';
import logo from '../assets/images/mainlogo.png';
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import discord from '../assets/images/discord.svg';
import tele from '../assets/images/tele.svg';
import twtr from '../assets/images/twiter.webp';
import { Link, Element } from 'react-scroll';
import { FaWallet } from "react-icons/fa6";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" px-0 fixed nav z-50   lg:bg-transparent top-0 left-0 right-0">
      {/* Large screen */}
      <div className="items-center justify-evenly max-w-[1400px] mx-auto hidden lg:flex">
        <div className="flex-[.3] flex items-center justify-center text-center">
          <a href="#" className="">  <img src={logo} alt="" className="w-[100px] transition-all duration-300 hover:scale-110 " /></a>
        </div>
        <div className="flex-[.7] origin text-[#ff9700] flex items-center justify-center gap-5">
          <div className="flex items-center text-[18px] justify-evenly gap-3">
            <p className="cursor-pointer">Home</p>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="relative group btn cursor-pointer transition-all duration-300"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ec8c00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="Tokenomics"
              smooth={true}
              duration={1000}
              className="relative group btn cursor-pointer transition-all duration-300"
            >
              Tokenomics
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ec8c00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="Roadmap"
              smooth={true}
              duration={1000}
              className="relative group btn cursor-pointer transition-all duration-300"
            >
              Roadmap
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ec8c00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="Buy"
              smooth={true}
              duration={1000}
              className="relative group btn cursor-pointer transition-all duration-300"
            >
              How To Buy
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ec8c00] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="Contact"
              smooth={true}
              duration={1000}
              className="relative group btn cursor-pointer transition-all duration-300"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ec8c00] transition-all duration-300 group-hover:w-full"></span>
            </Link>



          </div>

          <div className="flex text-black items-center justify-center gap-4">
            <a href="" target='blank'>
              <img src={discord} alt="Discord" className="w-8 transition-all duration-300 hover:scale-110" />
            </a>
            <a href=" https://t.me/PLS_SIMP_HUB" target='blank'>
              <img src={tele} alt="Telegram" className="w-8 transition-all duration-300 hover:scale-110" />
            </a>
            <a href="https://x.com/pls_simp" target='blank'  >
              <img src={twtr} alt="Twitter" className="w-8 h-8  transition-all duration-300 hover:scale-110 rounded-full" />
            </a>
          </div>


          <button className="px-5 gap-2 flex items-center transition-all duration-300  bg-[#ff9900] hover:bg-transparent hover:border-2 border-[#ff9900] text-white rounded-lg py-1 min-w-fit">
            <FaWallet /> Connect Wallet
          </button>
          <a href="https://jamsheeds-organization.gitbook.io/untitled/" className="">
            <button className="px-8 border-2 flex gap-2 items-center bg-transparent border-[#ff9900] text-white rounded-lg py-[2px] min-w-fit transition-all duration-300">
              WhitePaper
            </button>
          </a>
        </div>
      </div>

      {/* Mobile screen */}
      <div className="lg:hidden z-50  flex justify-between items-center px-5">
        <img src={logo} alt="Logo" className="w-[100px]" />
        <button onClick={toggleMenu} className="text-[#ff9700]">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden p-2 origin bg-black z-50  flex flex-col items-center mt-5 text-[#ff9700] space-y-4">
          <p className="cursor-pointer">Home</p>
          <Link onClick={toggleMenu} to="about" smooth={true} duration={1000} className="btn cursor-pointer">
            About
          </Link>
          <Link onClick={toggleMenu} to="Tokenomics" smooth={true} duration={1000} className="btn cursor-pointer">
            Tokenomics
          </Link>
          <Link onClick={toggleMenu} to="Roadmap" smooth={true} duration={1000} className="btn cursor-pointer">
            Roadmap
          </Link>
          <Link onClick={toggleMenu} to=" How To Buy" smooth={true} duration={1000} className="btn cursor-pointer">
            How To Buy
          </Link>
          <Link onClick={toggleMenu} to="Contact" smooth={true} duration={1000} className="btn cursor-pointer">
            Contact
          </Link>

          <div className="flex text-black items-center justify-center gap-4">
            <a href="#" aria-label="Discord" target='blank'>
              <img src={discord} alt="Discord" className="w-8" />
            </a>
            <a href="https://t.me/PLS_SIMP_HUB" target='blank' aria-label="Telegram">
              <img src={tele} alt="Telegram" className="w-8" />
            </a>
            <a href="https://x.com/pls_simp" target='blank'  >
              <img src={twtr} alt="Twitter" className="w-8 h-8  transition-all duration-300 hover:scale-110 rounded-full" />
            </a>
          </div>


          <div className="flex gap-2">
            <button className="px-5 flex gap-2 items-center bg-[#ff9900] hover:bg-transparent hover:border-2 border-[#ff9900] text-white rounded-lg py-2">
              <FaWallet /> Connect Wallet
            </button>

            <a href="https://jamsheeds-organization.gitbook.io/untitled/" className="">
              <button className="px-5 border-2 flex gap-2 items-center bg-transparent border-[#ff9900] text-white rounded-lg py-2 min-w-fit transition-all duration-300">
                WhitePaper
              </button>
            </a>

          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
