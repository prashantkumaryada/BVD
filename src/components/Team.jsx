import React from 'react'
import Driver from '../../public/driver.jpg'
import Captain from '../../public/captain.jpg'
function Team() {
  return (
    <>
    <div>
        <h1 className=' text-2xl w-full text-center md:mt-16 font-bold text-blue-500'>
            Meet Our Awesome Team
        </h1>
        <h1 className='text-center text-xl mb-10'>
        We are available in <span className='font-bold'>2 Categories</span> to serve you in better and professional way.
        </h1>
    </div>
    <div className='max-w-screen-2x1 mx-10 md:px-5 px-1.5 flex flex-col md:flex-row'>
        <div className='md:ml-20 md:mt-20'>
            <h1 className=' text-2xl w-full md:mb-5 '>Hire Driver For Heavy Vehicles<br></br> School Bus and Truck in Noida</h1>
            <p>
            Drivers are available to drive heavy vehicles like school buses and trucks. 
            They are available on monthly basis. They are trained and verified
            professional and can be tracked any time on the rides.
            </p>
            <div className='space-y-6 md:space-y-14 space-x-12 md:space-x-4 md:mt-8'>
              <button className="btn cursor-pointer p-2 hover:bg-blue-500">Book Now</button>
            </div>
        </div>
        <div className='w-full md:w-100 mt-10  ml-1 md:ml-20'>
            <img src={Driver} alt=''/>
        </div>
    </div>
    <div className='max-w-screen-2x1 mx-10 md:px-5 px-1.5 flex flex-col md:flex-row'>
        <div className='w-full md:w-100 mt-10  ml-1 md:ml-20'>
            <img src={Captain} alt=''/>
        </div>
        <div className='md:ml-20 md:mt-20'>
            <h1 className=' text-2xl w-full md:mb-5 '>Hire Captain on Ride Basis in Noida</h1>
            <p>
            Captain is a car driver. Which is available to drive cars for personal or 
            businesses 24/7. You can book a captain for outstation or incity rides. Its 
            easy to book a captain just select your locations, time and vehicle.
            </p>
            <div className='space-y-6 md:space-y-14 space-x-12 md:space-x-4 md:mt-8'>
              <button className="btn cursor-pointer p-2 hover:bg-blue-500">Book Now</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default Team
