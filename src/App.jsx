import React from 'react'
import Home from './Home/Home'
// import Services from './components/Services '
import { Route, Routes } from "react-router-dom"
import Services1 from './Services1/Services1'
import Services2 from './Services1/Services2'
import Services3 from './Services1/Services3'
import Book1 from './Booking/Book1'
// import Book1 from './Booking/BusBook'
import BusBook from './Booking/BusBook'
import TruckBook from './Booking/TruckBook'
import VanBook from './Booking/VanBook'
import Signup from './components/Signup'

function App() {
  return (
    <>
    {/* <Home/>
    {/*<Services/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Services' element={<Services1 />} />
      <Route path='/PServices2' element={<Services2/>}/>
      <Route path='/PServices3' element={<Services3/>}></Route>
      {/* <Route path='/BBook1' element={<Book1/>}/> */}
      <Route path='/BBook1' element={<Book1/>}/>
      <Route path='/BookBussDriver' element={<BusBook/>}/>
      <Route path='/BookTruckDriver' element={<TruckBook/>}/>
      <Route path='/BookVanDriver' element={<VanBook/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </>
  ) 
}

export default App
