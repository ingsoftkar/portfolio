import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon} from './Icon'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
  const router=useRouter()
  
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              ${router.asPath==href?'w-full':'w-0'} group-hover:w-full transition-[width] ease duration-300 dark:bg-light
             
              `}>
      </span>
    </Link>
  )
}
const CustomMobileLink = ({href, title, className="",toggle}) => {
  const router=useRouter()

  const handleClick=()=>{
    toggle()
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light mb-2`} onClick={handleClick}>
      {title}
      <span className={`inline-block h-[1px]  bg-light absolute left-0 -bottom-0.5 
              ${router.asPath==href?'w-full':'w-0'} group-hover:w-full transition-[width] ease duration-300 dark:bg-light
             
              `}>
      &nbsp;
      </span>
    </button>
  )
}


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick= ()=>setIsOpen(!isOpen)
  return (
    <header className="w-full px-32 xs:px-8 py-8 font-medium flex items-center justify-between xs:justify-start bg-white fixed top-0 z-10">

    <button 
        type="button" 
        className="flex-col items-center justify-center lg:flex hidden" 
        aria-controls="mobile-menu" 
        aria-expanded="false"
        onClick={handleClick}
        >
      <span className="sr-only">Open main menu</span>
      <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen?'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span
      >
      <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${isOpen?'opacity-0':'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
    </button>

    <div className="w-full flex justify-between items-center lg:hidden">

      
      <nav className="flex items-center justify-center">
        <CustomLink href={"/"} title={"Home"} className={"mr-4  rounded relative group "} />
        <CustomLink  href="/about" title="Skills" className="mx-4 rounded relative group "/>          
        <CustomLink href="/projects" title="Projects" className="mx-4  rounded relative group " />          
        <CustomLink href="/hire-me" title="Hire me" className="ml-4  rounded relative group " />
      </nav>

      <nav className="flex items-center justify-center flex-wrap lg:mt-2 ">
              <motion.a href="/" className="bg-light rounded-full w-6 mr-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
              <TwitterIcon />
            </motion.a>
            <motion.a href="/" className="bg-light rounded-full w-6 mx-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
              <GithubIcon />
            </motion.a>
            <motion.a href="/" className="bg-light rounded-full w-6 mx-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
              <LinkedInIcon />
            </motion.a>
            <motion.a href="/" className="bg-light rounded-full w-6 mx-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
              <PinterestIcon />
            </motion.a>
            <motion.a href="/" className="bg-light rounded-full w-6 ml-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
              <DribbbleIcon />
            </motion.a>
      </nav>

    </div>

    {
    isOpen?
    <motion.div
     className="min-w-[70vw] flex flex-col justify-between items-center fixed left-1/2 top-1/2  bg-dark/90 rounded-lg backdrop-blur-md py-32 z-30"
     animate={{scale:1, opacity:1,x:"-50%",y:"-50%"}}
     initial={{scale:0, opacity:0}}
     >
      
    <nav className="flex flex-col items-center justify-center">
      
      <CustomMobileLink toggle={handleClick}  href={"/"} title={"Home"} className={"mr-4  rounded relative group "} />

      <CustomMobileLink toggle={handleClick}   href="/about" title="Skills" className="mx-4 rounded relative group "/>
        
      <CustomMobileLink toggle={handleClick}  href="/projects" title="Projects" className="mx-4  rounded relative group " />
        
      <CustomMobileLink toggle={handleClick}  href="/hire-me" title="Hire me" className="ml-4  rounded relative group " />
   
    </nav>

    <nav className="flex items-center justify-center flex-wrap lg:mt-2 ">

      <motion.a href="/" className="bg-light rounded-full w-6 mr-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
        <TwitterIcon />
      </motion.a>
      <motion.a href="/" className="bg-light rounded-full w-6 mx-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
        <GithubIcon />
      </motion.a>
      <motion.a href="/" className="bg-light rounded-full w-6 mx-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
        <LinkedInIcon />
      </motion.a>
      <motion.a href="/" className="bg-light rounded-full w-6 mx-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
        <PinterestIcon />
      </motion.a>
      <motion.a href="/" className="bg-light rounded-full w-6 ml-3 sm:mx-1" target="_blank" whileHover={{y:-2}} whileTap={{scale:0.9}}>
        <DribbbleIcon />
      </motion.a>
      
    
      <button className="w-6 h-6 ease ml-3 flex items-center justify-center rounded-full p-1  
        bg-light  text-dark  " aria-label="theme-switcher">
        
        </button>
      </nav>
  </motion.div>
    :null
   }

<div className="absolute left-[50%] top-2 translate-x-[-50%] ">
         <Logo />
        </div>

      </header>
  )
}

export default Navbar