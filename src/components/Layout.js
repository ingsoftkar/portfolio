import React from 'react'


export const globalMeta = {
	siteName: "Oscar Garcia Portfolio",
	siteUrl: "https://yoursite.com",
	siteLogo: "https://yoursite.com/images/logo.png",
	email: "email@yoursite.com",
	description: "Oscar Garcia Portfolio."
}
/**xl:p-24 lg:p-16 md:p-12 md:!pt-32 lg:!pt-28 xl:!pt-28 */

const Layout = ({children,className=""}) => {
  return (
    <div id="layout" className={`w-full h-full inline-block z-0 bg-light p-32 sm:p-8 sm:!pt-28 ${className}`}>
      {children}
      </div>
  )
}

export default Layout