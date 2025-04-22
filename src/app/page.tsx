import React from 'react'
import Header from './components/common/Header'
import Hero from './components/Hero'
import Pizzeria from './components/Pizzeria'
import Footer from './components/Footer'
const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pizzeria />
      <Footer/>
    </div>
  )
}

export default page