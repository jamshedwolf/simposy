import React from 'react'
import about from "../assets/images/logo.png"
import { Link, Element } from 'react-scroll';

function About() {
  return (
    <Element name="about"  className="p-10 atom">
    

    <div className='p-2'>
<div className="max-w-[1400px] mx-auto text-[18px]  text-white  gap-5 flex flex-col  items-center justify-center p-2 lg:p-20">

<p  data-aos="fade-left"  className="flex origin f gap-3 items-center text-5xl  lg:text-6xl  justify-center"><img src={about} alt="" className="lg:w-40 w-20 " /> ABOUT     </p>
<p  data-aos="fade-right"  className="text-center">$IMP (SIMP) is more than just a meme coin; it's a tribute to the captivating allure of Web3's most enchanting influencers. Inspired by the seductive power of hot babes who effortlessly attract followers with their skimpy outfits and innocent eyes, $IMP captures the spirit of simping in the digital age. Whether it's an NFT artist trying to charm a whale investor or a degen falling for a pretty face, the world of simping is both amusing and pathetic.</p>
<p  data-aos="fade-right"  className="text-center">Created by the enigmatic 🍆HexyBastard🍆, $IMP is a playful nod to the behaviors we see every day in the crypto and NFT spaces. As the mastermind behind the 9inch.io Dex, HexyBastard brings his unique vision and humor to this project, making $IMP a must-have for anyone who appreciates the lighter side of the crypto world</p>
<p  data-aos="fade-right"  className="text-center">The journey of $IMP begins on Pulsechain, where it promises to deliver not just a coin, but a community and an experience. With a roadmap filled with cheeky milestones like taking naps and waiting for Jeets to dump, $IMP is as much about the fun as it is about the gains. Our goals are clear: to build a vibrant community, launch innovative features like $IMP NFT minting, and create a space where everyone can enjoy the ride</p>
<p  data-aos="fade-right"  className="text-center">Join us in celebrating the spirit of simping, the thrill of the chase, and the joy of being part of something truly unique. Welcome to $IMP, where the memes are hot, the girls are hotter, and the community is on fire. 🍆🍆</p>
    
</div>








    </div>
    </Element>
  )
}

export default About