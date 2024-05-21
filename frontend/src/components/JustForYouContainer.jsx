import React from 'react'
import ContainerHeader from './ContainerHeader'
import SaleProducts from './SaleProducts'

const JustForYouContainer = () => {
  return (
    <div className='flex flex-col justify items-center'>
      <ContainerHeader containerName="Just For You"></ContainerHeader>
      <SaleProducts></SaleProducts>
      <SaleProducts></SaleProducts>
      <div className="h-12 w-96 p-2 m-6 text-center border-2 text-xl border-orange-500 text-orange-500">
        LOAD MORE
      </div>
    </div>
  )
}

export default JustForYouContainer
