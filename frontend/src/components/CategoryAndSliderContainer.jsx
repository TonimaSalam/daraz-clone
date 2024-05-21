import React from 'react'
import Slider from './Slider'
import CategoryNav from './CategoryNav'

const CategoryAndSliderContainer = () => {
  return (
    <div className='h-96 flex flex-row'>
      <CategoryNav></CategoryNav>
      <Slider></Slider>
    </div>
  )
}

export default CategoryAndSliderContainer
