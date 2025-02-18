import React from 'react'
// import Sign from '../../public/sin.jpg'
function Quality() {
  return (
    <>
        <div className=' max-w-screen-2x1 container mx-10 md:px-5 px-1.5 flex flex-col md:flex-row md:mt-20'>
            <div className='ml-1 md:ml-20'>
                <p className='text-xl-20 w-full text-4x1 font-bold text-blue-500'>
                    Quality & Trust
                </p>
                <h1 className='text-xl w-full text-4x1 font-bold'>
                    Why Hire Team Drivars?
                </h1>
            </div>
         </div>
         <div className='max-w-screen-2x1 container md:px-20 md:mt-12 px-4 flex flex-col md:flex-row'>
            <div className='md:mr-5 md:ml-10 md:mb-5 '>
            <div className="card-action w-80 bg-base-200 shadow-xl image-full text-center cursor-pointer p-2 hover:bg-blue-200">
                {/* <figure><img src={Sign} alt="Sign" /></figure> */}
                <div className="card-body ">
                    <h1 className="card-title pt-5 pl-10 text-black">Hassle Free Booking</h1>
                    <p>Book driver online in noida to anywhere in India</p>
                    {/* <div className="card-actions justify-end"></div> */}
                </div>
            </div>
         </div>
            <div className='md:mr-5 '>
            <div className="card-action w-80 bg-base-200 shadow-xl image-full text-center cursor-pointer p-2 hover:bg-blue-200">
                {/* <figure><img src={Sign} alt="Sign" /></figure> */}
                <div className="card-body ">
                    <h1 className="card-title pt-5 pl-10 text-black">Transparent Pricing</h1>
                    <p>No hidden charges, enjoy the most affordable rates</p>
                  {/* <div className="card-actions justify-end"></div> */}
                </div>
            </div>
            </div>
            <div>
            <div className="card-action w-80 bg-base-200 shadow-xl image-full text-center cursor-pointer p-2 hover:bg-blue-200">
                {/* <figure><img src={Sign} alt="Sign" /></figure> */}
                <div className="card-body ">
                    <h1 className="card-title pt-5 pl-10 text-black">Safe & Reliable Team</h1>
                    <p>Book driver online in noida to anywhere in India</p>
                  {/* <div className="card-actions"></div> */}
                </div>
            </div>
            </div>
        </div>   
    </>
  )
}

export default Quality
