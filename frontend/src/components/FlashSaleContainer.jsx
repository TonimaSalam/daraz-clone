import React from 'react'
import ContainerHeader from './ContainerHeader'
import ContainerCountDown from './ContainerCountDown'
import SaleProducts from './SaleProducts'

const FlashSaleContainer = () => {
  return (
    <div className='h-96 bg-white flex flex-col gap-1'>
      <ContainerHeader containerName="FlashSale"></ContainerHeader>
      <ContainerCountDown></ContainerCountDown>
      <SaleProducts></SaleProducts>
    </div>
  )
}

export default FlashSaleContainer
