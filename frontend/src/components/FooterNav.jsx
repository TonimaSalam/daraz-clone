import React from 'react'

const FooterNav = ({navTitle, navContents}) => {
  return (
    <div className='w-72'>
      <div className='text-orange-600 text-xl w-full'>{navTitle}</div>
      {navContents.map((navContent,i)=>{
        return <div className='w-full'>{navContent}</div>
      })}
    </div>
  )
}

export default FooterNav
