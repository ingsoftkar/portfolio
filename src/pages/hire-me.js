import Head from 'next/head'
import React from 'react'
import Layout,{globalMeta} from '../components/Layout'
import AnimatedText from '../components/AnimatedText'

import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { AssistIcon,GithubIcon, GmailIcon, WhatsappIcon, SkypeIcon } from '../components/Icon'
import project1 from '../../public/images/projects/agency-website-cover-image.jpg'

const FramerImage=motion(Image)

const FeaturedProject = ({title,img,link}) => {
  
  return (
    
<article className="relative flex w-full items-center justify-between border border-solid border-dark  bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4 border-br-2xl rounded-3xl">
   
<div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%]
 xs:w-full xs:rounded-[1.5rem]">
                </div>
      <Link href={link} target="_blank"  className="w-1/2 lg:w-full cursor-pointer overflow-hidden">
        <FramerImage 
          src={img}
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          alt={title} 
          className='w-full h-auto'
          priority 
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
          />
      </Link>

      <div className="flex w-1/2 lg:w-full flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
         
          <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">{title}</h2>
          </Link>
          <div className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm grid grid-cols-[max-content_max-content] gap-5">
            <div className='w-6'><WhatsappIcon /></div> <div>+56936156199</div> 
            <div className='w-6'><GmailIcon   /></div>  <div>ingsoftkar@gmail.com</div> 	
            <div className='w-6'><SkypeIcon   /></div><div>ingsoftkar@hotmail.com</div>
            <div className='w-6'><AssistIcon  /></div><div>America / Europe timezone</div>
          </div>
         
      </div> 
    </article>
  )
}



const projects = () => {
  return (
    <>
    <Head>
      <title>{`${globalMeta.siteName} Projects`}</title>
      <meta name="description" content={globalMeta.description} />       
    </Head>
    <main className="flex w-full flex-col items-center justify-center">
      
      <Layout className="pt-20 xs:pt-16">
          <AnimatedText 
              text="Let's work that project out!"               
              className='inline-block text-dark dark:text-light sm:!text-6xl xs:!text-4xl lg:!text-7xl font-bold capitalize  mb-16  sm:mb-8'
            />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xs:gap-7 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                 < FeaturedProject 
                    title="You may contact me for consulting or hiring"
                   
                    link="/"                    
                    type="Hire me"
                    img={project1}
                 />
                </div>
               
               
               

          </div>
      </Layout>
   </main>
   </>
  )
}

export default projects