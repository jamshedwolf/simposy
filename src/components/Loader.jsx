import { useState,useEffect } from "react"
import React  from 'react'
import simp from "../assets/images/mainlogo.png"



function Loader() {

const [loader,setLoader]=useState(false);

 


  return (
    <div  className='w-[100vw] lg:flex border  text-white bg-black loader h-[100vh] text-5xl font-bold absolute top-0  right-0 hidden items-center justify-center'>



<img src={simp} alt="" className="w-[400px] " />
<p className="text-[400px] font-bold origin text-[#ff9900]">$IMP</p>
    </div>
  )
}

export default Loader