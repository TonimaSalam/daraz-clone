import React from 'react'
import ContainerHeader from './ContainerHeader'
import SmallCard from './SmallCard'
import {categoriesObj } from '../utilities/objects/categoriesObj'

const CategoriesContainer = () => {

  const renderCategories =()=>{
    const categories = [];
    for(let i=0; i!= categoriesObj.length; i++)categories.push( renderCard(i,categoriesObj[i]));
    return categories;
  }

  const renderCard = (i,category)=>{
    return <SmallCard key={i} category={category}></SmallCard>
  }
  return (
    <div className='bg-white'>
      <ContainerHeader containerName="Categories"></ContainerHeader>
      <div className='h-44 w-full flex'>{renderCategories()}</div>
      <div className='h-44 w-full flex'>{renderCategories()}</div>
    </div>
  )
}

export default CategoriesContainer
