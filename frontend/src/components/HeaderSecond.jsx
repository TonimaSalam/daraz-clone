import React from 'react'
import searchIcon from '../assets/icons/search-icon.svg'
import profileIcon from '../assets/icons/profile-icon.png'

const HeaderSecond = () => {
  return (
    <div className='flex flex-row mt-1 mb-1 h-12 items-center'>
      <div className='p-2 cursor-pointer text-white text-4xl'>Daraz</div>
      <div className='p-2 ml-4 mr-4 h-10 w-2/3 bg-slate-200 rounded-xl flex flex-row relative'>
        <div className='text-gray-400'>Search in Daraz</div>
        <img src={searchIcon} className=' absolute right-2 h-6 w-12 bg-orange-200 rounded-md'></img>
      </div>
      <div className='p-2 cursor-pointer flex flex-row hover:bg-orange-700 rounded-xl '>
      <img src={profileIcon} className='h-4 w-4 mt-1 mr-2'></img>
      <div className='text-white '>login</div>
      </div>
      <div className='p-2 text-white'>|</div>
      <div className='p-2 cursor-pointer text-white hover:bg-orange-700 rounded-xl'>signup</div>
      <div className='p-2 cursor-pointer text-white hover:bg-orange-700 rounded-xl'>EN v</div>
      <div className='p-2 cursor-pointer text-white hover:bg-orange-700 rounded-xl'>cart</div>
    </div>
  )
}

export default HeaderSecond
