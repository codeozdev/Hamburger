import React, { useState } from 'react'
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='max-w-[1640px] mx-auto p-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <div onClick={handleClick} className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best<span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full text-[14px] p-1'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className='flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          type='text'
          placeholder='Search food'
          className='bg-transparent p-2 w-full focus:outline-none'
        />
      </div>

      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full '>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'
            : 'fixed left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          onClick={handleClick}
          className='absolute right-4 top-4 cursor-pointer'
          size={30}
        />
        <h2 className='text-2xl p-4'>
          Best<span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex text-xl p-4 items-center'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='flex text-xl p-4 items-center'>
              <MdFavorite size={25} className='mr-4' />
              Favories
            </li>
            <li className='flex text-xl p-4 items-center'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='flex text-xl p-4 items-center'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
            <li className='flex text-xl p-4 items-center'>
              <AiFillTag size={25} className='mr-4' />
              Promotions
            </li>
            <li className='flex text-xl p-4 items-center'>
              <BsFillCartFill size={25} className='mr-4' />
              Best Ones
            </li>
            <li className='flex text-xl p-4 items-center'>
              <FaUserFriends size={25} className='mr-4' />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
