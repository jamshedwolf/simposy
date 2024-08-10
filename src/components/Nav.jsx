import React, { useState } from 'react';
import logo from '../assets/images/mainlogo.png';
import { FaDiscord, FaBars, FaTimes } from 'react-icons/fa';
import discord from '../assets/images/discord.svg';
import tele from '../assets/images/tele.svg';
import twtr from '../assets/images/twtr.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" px-0 fixed nav z-50 bg-black top-0 left-0 right-0">
      {/* Large screen */}
      <div className="items-center justify-evenly max-w-[1400px] mx-auto hidden lg:flex">
        <div className="flex-[.3] flex items-center justify-center text-center">
          <img src={logo} alt="" className="w-[150px]" />
        </div>
        <div className="flex-[.7] text-[#ff9700] flex items-center justify-center gap-5">
          <div className="flex items-center text-[18px] justify-evenly gap-3">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Tokenomics</p>
            <p className="cursor-pointer">Roadmap</p>
            <p className="cursor-pointer">How To Buy</p>
            <p className="cursor-pointer">Contact</p>
          </div>

          <div className="flex text-black items-center justify-center gap-4">
            <a href="" target='blank'>
              <img src={discord}    alt="Discord" className="w-8" />
            </a>
            <a href=""   target='blank'>
              <img src={tele} alt="Telegram" className="w-8" />
            </a>
            <a href=""  target='blank'  >
              <img src={twtr} alt="Twitter" className="w-8" />
            </a>
          </div>


          <button className="px-3 bg-[#ff9900] hover:bg-transparent hover:border-2 border-[#ff9900] text-white rounded-full py-1 min-w-fit">
            Connect Wallet
          </button>
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
        <div className="lg:hidden p-2  bg-black z-50  flex flex-col items-center mt-5 text-[#ff9700] space-y-4">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Tokenomics</p>
          <p className="cursor-pointer">Roadmap</p>
          <p className="cursor-pointer">How To Buy</p>
          <p className="cursor-pointer">Contact</p>

          <div className="flex text-black items-center justify-center gap-4">
            <a href="#" aria-label="Discord" target='blank'>
              <img src={discord} alt="Discord" className="w-8" />
            </a>
            <a href="#"   target='blank' aria-label="Telegram">
              <img src={tele} alt="Telegram" className="w-8" />
            </a>
            <a href="#"  target='blank'  aria-label="Twitter">
              <img src={twtr} alt="Twitter" className="w-8" />
            </a>
          </div>


          <button className="px-5 bg-[#ff9900] hover:bg-transparent hover:border-2 border-[#ff9900] text-white rounded-full py-2">
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
