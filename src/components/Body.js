import React from 'react'
import Features from './Features'
import FirstPart from './FirstPart'

const Body = () => {
  return (
    <div>
        <FirstPart/>
        <div className='w-[85%] mx-auto items-center h-48 bg-red-100'></div>
        <Features/>
    </div>
  )
}

export default Body