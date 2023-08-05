import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/gis-logo.png'

const MotionLink= motion(Link)
function Logo() {
  return (
    <div className="flex items-center justify-center mt-0">
    <MotionLink 
      href="/" 
      className="flex items-center justify-center rounded-full w-16 h-16 text-white dark:border-2 dark:border-solid dark:border-light font-bold" 
      whileHover={{ backgroundColor: ["#FFFFFF", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#FFFFFF"] }}
      transition={{ duration: 1}}
    >
            <Image alt="" src={logo} className='w-[75%] h-auto' />
     
    </MotionLink>
    </div>
  )
}

export default Logo