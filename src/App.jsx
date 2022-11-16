import React from 'react'
import Category from './component/Category'
import Foot from './component/Foot'
import HeadlineCards from './component/HeadlineCards'
import Hero from './component/Hero'
import Navbar from './component/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foot />
      <Category />
    </div>
  )
}

export default App
