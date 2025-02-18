import React from 'react'
import banner from '../../public/1cars.jpg'
function Banner() {
  return (
    <>
      <div className='flex max-w-screen-2x1 mx-10 md:px-5 px-1.5 flex-col md:flex-row'>
        <div className='w-full md:w-1/2 mt-10 md:mt-32 ml-1'>
          <div className='space-y-6 md:ml-20'>
            <h1 className='text-xl w-full text-4x1 font-bold text-blue-500'>
              HIRE DRIVERS IN DELHI-NCR
            </h1>
            <h2 className='font-bold text-4xl'>
              Greater Noida to Noida
            </h2>
            <p>
              Let us DriveU to your favourite people
            </p>
          </div>
          <div className='flex'>
              <div className='md:mr-20 md:mt-16 md:ml-20'><button className='btn btn-active btn-neutral btn-wide cursor-pointer p-4 hover:bg-blue-500'><a href='/BBook1'>Book Driver</a></button></div>
              {/* <div className='md:mt-16'><button className="btn cursor-pointer p-4 hover:bg-blue-500">Dwonload App</button></div> */}
          </div>
        </div>
        <div className='w-full md:w-1/2 mt-10 md:mt-28 ml-1 md:ml-20'>
            <img src={banner} alt=''/>
        </div>
      </div>
    </>
  )
}

export default Banner
