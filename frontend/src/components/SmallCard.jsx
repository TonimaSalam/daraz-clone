import React from 'react'

const SmallCard = ({category}) => {
    return (
        <div className="h-44 w-40 border-2 flex flex-col justify-center items-center hover:shadow-xl hover:border-4">
          <img className="h-20 w-20" src={category.image}></img>
          <div className="h-8 w-full content-center">
            <div className="h-full w-full text-center p-4">{category.categoryTitle}</div>
          </div>
        </div>
      );
}

export default SmallCard
