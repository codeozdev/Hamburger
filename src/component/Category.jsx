import React from 'react'
import { categories } from '../data/data'

function Category() {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Menu Items
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            className='flex justify-between bg-gray-100 rounded-lg p-4 items-center'
            key={index}
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt='' className='w-20' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
