import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card 1 */}
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>

      {/* Card 2 */}
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>

      {/* Card 3 */}
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            We Deliver Desserts Too
          </p>
          <p className='px-2'>Tasty Treats</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
    </div>
  )
}

export default HeadlineCards
