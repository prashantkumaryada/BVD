import React from 'react'
import business from '../../public/1card.jpg'
import Bus from '../../public/bus.jpg'
import Truck from '../../public/truck.jpg'
import Van from '../../public/1van.jpg'

function Business() {
  return (
    <>
    <div className='max-w-screen-2x1 mx-10 md:px-5 px-1.5 flex flex-col md:flex-row md:mt-20'>
        <div className='ml-1 md:ml-20'>
            <p className='text-xl-20 w-full text-4x1 font-bold text-blue-500'>
                Pay Monthly
            </p>
            <h1 className='text-xl w-full text-4x1 font-bold'>
                For Business Users
            </h1>
        </div>
    </div>
    <div className='max-w-screen-2x1 mx-10 md:px-20 px-4 flex flex-col md:flex-row '>
      <div className='ml-1 md:ml-14'>
        <div className="card-action w-40 h-72 bg-base-200 shadow-xl ml-1 md:ml-30 md:mt-10">
            <figure className="px-5 pt-5">
                <img src={business} alt="car" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center pt-5">
                <h2 className="card-title">Car Driver</h2>
                <div className="card-actions">
                    <button className="btn btn-neutral cursor-pointer p-4 hover:bg-blue-500 md:mr-8"><a href='./BBook1'>Book</a></button>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className="card-actions w-40 h-72 bg-base-200 shadow-xl ml-5 md:ml-20 md:mt-10">
            <figure className="px-4 pt-4 ">
                <img src={Bus} alt="car" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title pt-5">Bus Driver</h2>
                <div className="card-actions">
                    <button className="btn btn-neutral cursor-pointer p-4 hover:bg-blue-500 md:mr-9"><a href='./BookBussDriver'>Book</a></button>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className="card-action w-40 h-72 bg-base-200 shadow-xl ml-1 md:ml-20 md:mt-10 ">
            <figure className="px-4 pt-4">
                <img src={Truck} alt="car" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Truck Driver</h2>
                <div className="card-actions">
                    <button className="btn btn-neutral cursor-pointer p-4 hover:bg-blue-500 md:mr-9"><a href='./BookTruckDriver'>Book</a></button>
                </div>
            </div>
        </div>
      </div>
      <div>
        <div className="card-action w-40 h-72 bg-base-200 shadow-xl ml-1 md:ml-20 md:mt-10 ">
            <figure className="px-4 pt-4">
                <img src={Van} alt="car" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title pt-8">Van Driver</h2>
                <div  className="card-actions">
                    <button className="btn btn-neutral md:top-5 cursor-pointer p-4 hover:bg-blue-500 md:mr-7"><a href='./BookVanDriver'>Book</a></button>
                </div>
            </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Business
