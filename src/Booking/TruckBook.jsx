import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookTruckDriver from '../components/BookTruckDriver'

function TruckBook() {
  return (
    <>
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <BookTruckDriver/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default TruckBook
