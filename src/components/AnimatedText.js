import React from 'react'

const AnimatedText = ({text,className=""}) => {
  return (
    <div className="flex w-full mx-auto py-2 items-center justify-center text-center overflow-hidden sm:py-0" >
    <h1 className={`inline-block w-full text-dark font-bold text-8xl capitalize ${className}`} >
      {text}
      </h1>
    </div>
  )
}

export default AnimatedText