import Head from 'next/head'
import React from 'react'
import Layout,{globalMeta} from '../components/Layout'
import AnimatedText from '../components/AnimatedText'

import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { GithubIcon } from '../components/Icon'
import featured1 from '../../public/images/projects/1-featured.png'
import normal1 from '../../public/images/projects/1-normal.jpg'
import normal2 from '../../public/images/projects/2-normal.jpg'
import featured2 from '../../public/images/projects/2-featured.png'
//import normal2 from '../../public/images/projects/pac.png'

const FramerImage=motion(Image)

const FeaturedProject = ({type,title,summary,img,link,github}) => {
  /*  border  */
  return (
<article className="relative flex w-full items-center justify-between border border-solid border-dark  bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4 border-br-2xl rounded-3xl">
   
<div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]">
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
          <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
          </Link>
          <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
          <Link 
            href={link} 
            target="_blank" 
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base ">Visit project </Link>
          </div>
      </div> 
    </article>
  )
}

const NormalProject = ({type,title,img,link,github}) => {
  return (
<article className="relative flex flex-col w-full items-center justify-between rounded-2xl
  border border-solid border-dark bg-light p-6 shadow-2xl  dark:border-light dark:bg-dark xs:p-4">
    
<div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-br-3xl rounded-[2rem] bg-dark md:-right-2 md:w-[101%] xs:h-[102%] 
 xs:rounded-[1.5rem] xs:w-full">
                </div>
      <Link href={link} target="_blank"  className="w-full cursor-pointer overflow-hidden">
        <FramerImage
           src={img} 
           alt={title} 
           className='w-full h-auto' 
           whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          
          />
      </Link>

      <div className="flex w-full flex-col items-start justify-between mt-4">
        
          <span className="text-xl font-medium text-primary dark:text-primaryDark md:text-base lg:text-lg">
            {type}
          </span>
          <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
           
          <h2 className="my-2 w-full text-left font-bold text-3xl lg:text-2xl">{title}</h2>
          </Link>
         
          <div className="w-full mt-2 flex items-center justify-between">
             <Link href={link} target="_blank" className="text-lg font-semibold dark:bg-light dark:text-dark md:text-base">
              Visit 
              </Link>
              <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
              
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
    {/*  */}
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-24 xs:pt-16">
          <AnimatedText 
              className='mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl lg:!text-7xl'
              text="Knowledge trumps imagination!"               
            />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xs:gap-7 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                 < FeaturedProject 
                    title="Real Estate Home Panel Owners Clients"
                    summary="feature-rich Dashboard Apps responsive, user friendly, with multiple charts. 
It shows detail regarding all the requirements. You can easily adjust to your business, ecommerce, maintenance, real time monitoring, real estate, etc."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={featured1}
                 />
                </div>
                 <div className="col-span-6 sm:col-span-12">
                 < NormalProject 
                    title="Full Responsive Websites"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={normal1}
                 />
                </div>
                <div className="col-span-6 sm:col-span-12">
                 < NormalProject 
                    title="Crypto Screener Application"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={normal2}
                 />
                </div>
                <div className="col-span-12">
                  <FeaturedProject 
                    title="Airbnb-like Home Dashboard Owners Clients"
                    summary="APP (Android/ios) similar to airbnb/booking that can give a solution for local booking accommodations, simple but functional. App administrator profile owner and guest
                    
                    ."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={featured2}
                  />
                </div>
               {/*  <div className="col-span-12">
                  <FeaturedProject 
                    title="Educational and psychopedagogical evaluation web"
                    summary="It helps to observe, know, prevent and enhance the learning and development of children from 8 to 12 years old."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={featured2}
                  />
                </div> */}
               <div className="col-span-6 sm:col-span-12">
                 < NormalProject 
                    title="Full Responsive Websites"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={normal1}
                 />
                </div>
                <div className="col-span-6 sm:col-span-12">
                 < NormalProject 
                    title="Crypto Screener Application"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                    link="/"
                    github="/"
                    type="Featured Project"
                    img={normal2}
                 />
                </div>

          </div>
      </Layout>
   </main>
   </>
  )
}

export default projects