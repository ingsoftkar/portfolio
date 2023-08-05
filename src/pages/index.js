import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import profileImage from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center font-mont text-dark w-full min-h-screen">
      <Layout classname='pt-0'>
        <div className='w-full sm:flex-col flex items-center justify-between'>
        <div className='w-1/2 sm:w-full'>
            <Image   alt=""   src={profileImage}   className='w-full h-auto'  />
           </div>

           <div className='flex w-1/2 sm:w-full flex-col items-center self-center '>
            <AnimatedText className='!text-6xl !text-left xl:!text-5xl md:!text-5xl sm:!text-3xl lg:!text-8xl lg:!text-center' text="Turning ideas into Reality with Code and Design."/>
            <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in mobile and web development.
            </p>
            <div className="mt-2 flex items-center self-start lg:self-center">
                <Link className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                   md:p-2 md:px-4 md:text-base"  href="/hire-me">
                    Hire me 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-auto ml-1 !w-6 md:!w-4">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"></path>
                    </svg>
                  </Link>
                 
            </div>
          </div>
        </div>
        </Layout>
        </main>
    </>
  )
}
