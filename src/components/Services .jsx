import React from 'react'
import Night from '../../public/1.jpg'

function Services () {
  return (
  <>
  <div className='md:mt-24 md:ml-16 md:mr-16 md:mb-10 '>
    <div className="hero min-h-screen rounded-xl" style={{backgroundImage: "url(/public/1.jpg)"}}>
      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-26">
          <h1 className="mb-5 text-5xl font-bold text-orange-500">Hire Night Drivers</h1>
          <p className="mb-5 md:mb-20 font-bold">Traveling at night is not as convenient as it is in the daytime! Night 
            travels are stressful <br></br> as you have to tackle your sleepy head and navigate until your destination.
            But with Driver on hire thats <br></br> not the case anymore!
          </p>
          <button className="btn btn-warning md:ml-3 md:mb-20 cursor-pointer p-2 hover:bg-blue-500">Book Now</button>
        </div>
      </div>
    </div>
  </div>
<div>
  <h1 className='text-center font-bold text-3xl mb-5'>Driver Charges for Night</h1>
</div>
<div className='md:ml-40 flex'>
    <div>
        <h1>Local Charges for 2 hours (Service will be available for 24 hrs)</h1>
        <p>Manual /Automatic Car:-</p>
        <div className="overflow-x-auto shadow-xl bg-red-200">
          <table className="table">
            {/* head */}
            <thead>
              <tr className='font-bold text-black bg-orange-300'>
                <th>Hours</th>
                <th>Rates</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                
                <td>2 Hours</td>
                
                <td>Rs. 300/-</td>
              </tr>
              {/* row 2 */}
              <tr>
                
                <td>Per hour overtime</td>
                
                <td>Rs. 80/-</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>After 11 pm for night allowance up-to 6 AM.</td>
              
                <td>Rs. 150/-</td>
              </tr>
              <tr>
                <td>Drop location change charges.</td>
              
                <td>Rs. 80/-</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    <div className='md:ml-20 md:mt-6'>
        <p>Luxury:-</p>
      <div className="overflow-x-auto shadow-xl bg-red-200">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='font-bold text-black bg-orange-300'>
              <th>Hours</th>
            
              <th>Rates</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              
              <td>2 Hours</td>
            
              <td>Rs. 450/-</td>
            </tr>
            {/* row 2 */}
            <tr>
              
              <td>Per hour overtime</td>
              
              <td>Rs. 190/-</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>After 11 pm for night allowance up-to 6 AM.</td>
            
              <td>Rs. 180/-</td>
            </tr>
            <tr>
              <td>Drop location change charges.</td>
              
              <td>Rs. 90/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className='md:mt-16'>
    <h1 className='text-center font-bold text-2xl mb-5'>Night Car Drivers Service in Greater Noida, Noida</h1>
    <p className='text-center md:ml-32 md:mr-32'>
      Don't let the night hamper your plans or compromise your safety. Experience the convenience of 
      our Night Car Drivers Service in Mumbai, Pune, and Thane. Whether it's a late-night gateway, hire 
      night drivers for pick-ups and drops after a late event, or any other midnight travel emergencies we've got you covered.
    </p>
    <p className='text-center md:ml-32 md:mr-32 md:mt-6'>
       Our Night Car Drivers Service offers reliable, trained drivers who undergo rigorous background checks for
       safety and comfort. Operating in Greater Noida, Noida we provide 24/7 availability and punctuality for
       pick-ups and drop-offs.
    </p>
    <p className='text-center md:ml-32 md:mr-32 md:mt-6'>
      Never ever put yourself in potential risk by driving drowsy at night. Don't compromise on your safety or 
      convenience. You can trust our experienced drivers to handle all driving requirements. Allowing you to
      relax and enjoy the ride.
    </p>
  </div>
  <div>
         <div className='md:mt-16'>
            <h1 className='text-center font-bold text-2xl mb-5'>Benefits of Hiring Night Driver from Driver on Hire</h1>
            <p className='text-center md:ml-32 md:mr-32'>Nighttime transport demands extra caution and skill, which our Drivers for Night deliver like a pro! 
              We attend to your midnight journey demands with steadfast attention, owing to a team of licensed and 
              trustworthy drivers. Check out some perks of hiring Night Driver from Driver on Hire below.
            </p>
         </div>
         <div className='max-w-screen-2x1 container md:px-20 md:mt-10 px-4 flex flex-col md:flex-row'>
            <div className='md:mr-5 md:ml-10 md:mb-5 '>
            <div className="card-action w-80 bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h1 className="card-title pt-2 pl-9 text-black text-2xl">Prioritizing Safety</h1>
                    <p className='text-justify pt-2'>
                      We understand that nighttime travel can be challenging, but with our 
                      Drivers for night, safety remains the top priority. You can trust our 
                      experienced drivers to navigate through dimly-lit streets and ensure 
                      a secure journey.
                    </p>
                </div>
            </div>
         </div>
            <div className='md:mr-5'>
            <div className="card-action w-80 h-72 bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h1 className="card-title pt-2 pl-0 text-black text-2xl">24/7 Availability</h1>
                    <p className='text-justify pt-2'>
                      The night never sleeps, and neither do we. Our Driver on Hire service is available 
                      round-the-clock, so you can rely on us for those late-night pickups or early-morning 
                      drop-offs.
                    </p>
                </div>
            </div>
            </div>
            <div>
            <div className="card-action w-80 h-72 bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h1 className="card-title pt-2 pl-9 text-black text-2xl">Cost-Effective</h1>
                    <p className='text-justify pt-2'>
                      Hiring a night driver can be a cost-effective solution, offering private driving 
                      benefits without exceeding your budget. With low pricing, you can enjoy the 
                      benefits without exceeding your budget. Long-term savings include reducing 
                      accidents and fines due to tired driving.
                    </p>
                </div>
            </div>
            </div>
      </div>   
  </div>
  </>
  )
}

export default Services 
