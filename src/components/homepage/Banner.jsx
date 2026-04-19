import React from 'react'

import bannerImg from "../../assets/images/hero.png"
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
  return <div className='min-h-[80vh] text-center space-y-8 pt-[50px] mx-auto container'>
     <h2 className='font-bold text-6xl'>We Build <br />
      <span className='text-purple-500'>Productive</span> Apps</h2>
     <p className='text-gray-600 max-w-[50%] mx-auto'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     <div className="flex justify-center gap-4">
        <button className='btn'><FaGooglePlay />Google    Play
        </button>
        <button className='btn'><FaAppStoreIos />
          App Store
        </button>
     </div>

     <img src={bannerImg} alt="" className='mx-auto' />
    </div>
}

export default Banner;