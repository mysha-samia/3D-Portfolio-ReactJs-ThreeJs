import React from 'react'
import {motion} from 'framer-motion';
import {styles} from "../styles";
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
  <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5"> 
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>
      <div className="div">
      <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm
        <span className='text-[#915eff]' > Mysha</span> 
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-70  sm:text-sm md:text-base`}>Full-stack web developer <br className="sm:block hidden"/>aspiring to build scalable, efficient software solutions.</p>
      </div>
    </div>
    <ComputersCanvas/>
{/* 
    //scroll down for mobile section */}
    <div className="absolute xs:bottom
    w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4
        border-secondary flex justify-center items-start p-2">
          {/* //creating a framer motion */}
          <motion.div className="w-3 h-3 rounded-full bg-secondary mb-1"
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:"loop"
          }}
            />
        </div>
      </a>
    </div>
    
  </section>
  )
}

export default Hero




