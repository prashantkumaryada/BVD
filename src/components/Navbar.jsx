import React from 'react'
import Login from './Login'
// import React, { useEffect, useState } from 'react'

function Navbar() {
    const navItems = (
        <>
        <li>
            <a className='cursor-pointer p-2 hover:bg-blue-500 md:mr-5' href='/'>Home</a>
        </li>
        <li>
          <details>
            <summary className='cursor-pointer p-2 hover:bg-blue-500 md:mr-5'>
               Services
            </summary>
            <ul className='w-48 bg-base-300'>
              <li><a className='cursor-pointer hover:bg-blue-500'href='/Services'>Night Drivers</a></li>
              <li><a className='cursor-pointer hover:bg-blue-500' href='/PServices2'>Parmanent Drivers</a></li>
              <li><a className='cursor-pointer hover:bg-blue-500' href='/PServices3'>OutStation Drivers</a></li>
            </ul>
          </details>
        </li>
        <li>
            <a className='cursor-pointer p-2 hover:bg-blue-500'>About Us</a>
        </li>
        </>
    )
  return (
    <>
        <div 
          className='max-w-screen-2x1 mx-10 md:px-5 px-1.5 fixed top-0 left-0 right-0 z-50'>
            <div className="navbar bg-base-100 shadow-1">
                <div className="navbar-start">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                         viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" 
                         strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </div>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {navItems}
                      </ul>
                    </div>
                      <a className="text-2xl font-bold cursor-pointer">BVD</a>
                </div>
                    <div className="navbar-end space-x-4 font-bold">
                      <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                            {navItems} 
                         </ul>
                      </div>
                      <div className="">
                        <a className="btn bg-black text-white font-bold cursor-pointer hover:bg-blue-500"
                        onClick={() => document.getElementById("my_modal_3").showModal()}>Login</a>
                        <Login/>
                      </div> 
                    </div>
            </div>
        </div> 
      
    </>
  )
}

export default Navbar
