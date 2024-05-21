import React from 'react'

const ContainerHeader = ({containerName}) => {
  return (
    <div className='h-1/12 pb-2 w-full text-2xl bg-gray-100 text-gray-600'>
      {containerName}
    </div>
  )
}

export default ContainerHeader
