import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BBook1 from '../components/BBook1'

function Book1() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        <BBook1/>
    </div>
    <Footer/>
    </>
  )
}

export default Book1
