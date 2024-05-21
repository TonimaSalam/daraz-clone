import React from 'react'

const NavMenu = ({src,menuText}) => {
  return (
    <div className='w-full flex flex-row cursor-pointer hover:bg-slate-100 hover:text-orange-500'>
      <img src={src} className='h-5 w-4 p-1 ml-2 mr-1 rounded-md bg-slate-200'></img>
      <div className='pl-1 pr-1'>{menuText}</div>
    </div>
  )
}

export default NavMenu
