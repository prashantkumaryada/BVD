import React from 'react'
import Navbar from '../components/Navbar'
import BookBussDriver from '../components/BookBussDriver'
import Footer from '../components/Footer'

function BusBook() {
  return (
    <>
    <div>
        <Navbar/>
        <div>
            <BookBussDriver/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default BusBook
