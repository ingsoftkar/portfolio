import React from 'react'
import Layout,{globalMeta} from '../components/Layout'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Image from 'next/image'

import profileImage from '../../public/images/profile/developer-pic-2.jpg'
import Skills from '../components/Skills'
import Link from 'next/link'
/*import Skills from './skills'
import Experience from '../components/Experience'*/

const about = () => {
  return (
    <>
      <Head>
        <title>{`${globalMeta.siteName} About me`}</title>
        <meta name="description" content={globalMeta.description} />       
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-20 xs:pt-16">
      <AnimatedText text="Pasion fuels skills!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl'/>
      <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">

            {/*<div className="col-span-8 xl:col-span-4 md:col-span-8 flex flex-col items-start justify-start md:order-2">
                 <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About me</h2> 
                  <p className="font-medium ">Hi, I am  <strong>Oscar</strong>, a web, mobile and UI/UX developer and designer with over 5 years of experience creating beautiful, functional, and user-centered digital solutions.
                </p> 
                <p className="my-4 font-medium"> I enjoy designing and programming solutions using the actual technologies and accurate methodologies. I guarantee quality and timely solutions to your company or entrepreneurship.
                </p>
                <p className="font-medium">Whether I&#x27;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills to your next project.
                </p> 
            </div>
             <div className="relative col-span-3 xl:col-span-4 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark">
                </div>
                <Image alt="" src={profileImage}  className='h-auto w-full rounded-2xl' priority placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />                    
            </div> */}
            <div className="col-span-8  xl:col-span-8 md:col-span-8  xl:flex-row flex flex-row items-center justify-around xl:text-center md:order-3">
             
                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold xl:text-6xl md:text-5xl sm:text-4xl"> 20+</span>
                      <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-6xl text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                </div>
                <div id="skills" className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block text-7xl font-bold xl:text-6xl md:text-5xl sm:text-4xl">5+</span>
                      <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-6xl text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2>
                </div>

            </div>
      
          </div>{/* grid */}
          <Skills />
          <div className="mt-4 flex items-center justify-center">
                <Link className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                   md:p-2 md:px-4 md:text-base"  href="/projects">
                    check out my projects
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-auto ml-1 !w-6 md:!w-4">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"></path>
                    </svg>
                  </Link>
                 
            </div>
        </Layout>
      </main>
    </>
  )
}

export default about