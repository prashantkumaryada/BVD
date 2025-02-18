import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookVanDriver from '../components/BookVanDriver'

function VanBook() {
  return (
    <>
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <BookVanDriver/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default VanBook
