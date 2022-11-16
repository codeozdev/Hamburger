import React, { useState } from 'react'
import { data } from '../data/data'

function Foot() {
  const [foods, setFoods] = useState(data)

  //Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  //Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      })
    )
  }

  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-4'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type left */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-evenly items-center flex-wrap'>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('burger')}
            >
              Burgers
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('pizza')}
            >
              Pizza
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('salad')}
            >
              Salads
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('chicken')}
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price right */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-evenly max-w-[390px] w-full'>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$')}
            >
              $
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$')}
            >
              $$
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$$')}
            >
              $$$
            </button>
            <button
              className='mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$$$')}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt=''
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-sm md:text-base'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white rounded-lg p-1'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Foot
