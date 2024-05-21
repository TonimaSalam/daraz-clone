import React from 'react'
import { customerCare, daraz, darazInternational, exclusiveDealsAndOffers } from '../utilities/objects/footerObj'
import FooterNav from './FooterNav'

const FooterFirst = () => {
  return (
    <div className='flex flex-row gap-20'>
      <FooterNav navTitle="Customer Care" navContents={customerCare}></FooterNav>
      <FooterNav navTitle="Daraz" navContents={daraz}></FooterNav>
      <FooterNav navTitle="Daraz International" navContents={darazInternational}></FooterNav>
      <FooterNav navTitle="Exclusive Deals and Offers!" navContents={exclusiveDealsAndOffers}></FooterNav>
    </div>
  )
}

export default FooterFirst
