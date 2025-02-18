import React from 'react'

function PServices2() {
  return (
    <>
    <div>  
    <div className='md:mt-24 md:ml-16 md:mr-16 md:mb-10 '>
    <div className="hero min-h-screen rounded-xl" style={{backgroundImage: "url(/public/1.jpg)"}}>
      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-26">
          <h1 className="mb-5 text-5xl font-bold text-orange-500">Hire Permanent Drivers</h1>
          <p className="mb-5 md:mb-20 font-bold">
          Finding reliable permanent drivers can be a daunting task, but Driver on Hire makes it effortless for you. <br></br> 
          Our team of professionals and skilled drivers are available at your service.
           Whether you require <br></br> drivers for personal commutes, corporate transportation, <br></br> or 
           any other occasion, we have you covered.
          </p>
          <button className="btn btn-warning md:ml-3 md:mb-20 cursor-pointer p-2 hover:bg-blue-500">Book Now</button>
        </div>
      </div>
    </div>
  </div>
<div>
  <h1 className='text-center font-bold text-3xl mb-5'>Driver Charges for Permanent Basis</h1>
</div>
{/* <div className='md:ml-40 flex'> */}
    <div className='md:ml-32 md:mr-32'>
        {/* <h1>Local Charges for 2 hours (Service will be available for 24 hrs)</h1>
        <p>Manual /Automatic Car:-</p> */}
        <div className="overflow-x-auto shadow-xl bg-red-200">
          <table className="table">
            {/* head */}
            <thead>
              <tr className='font-bold text-black bg-orange-300'>
                <th>Charges</th>
                <th>Rates</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>6 months membership with unlimited replacement guarantee.</td>
                <td>Rs. 5000/- +GST</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>1 year membership with unlimited replacement guarantee.</td>
                <td>Rs. 7000/- +GST</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  {/* </div> */}
  <div className='md:mt-16'>
    <h1 className='text-center font-bold text-2xl mb-5'>Permanent Car Drivers Service in Greater Noida, Noida</h1>
    <p className='text-center md:ml-32 md:mr-32'>
      Our permanent car drivers are dedicated to providing consistent, dependable service, punctuality, and 
      professionalism. They undergo an extensive screening process to ensure a clean driving record and a 
      proven track record of professionalism. They are familiar with local routes and traffic patterns, ensuring 
      a smooth and efficient journey in cities like Greater Noida, Noida.
    </p>
    <p className='text-center md:ml-32 md:mr-32 md:mt-6'>
      Our personalized service for hiring driver for permanent basis caters to your unique needs, offering 
      flexibility for daily commutes, special occasions, or outstation trips. We believe in cost-effective 
      hiring, with competitive pricing and efficient service, adding value to your travel experience.
    </p>
    <p className='text-center md:ml-32 md:mr-32 md:mt-6'>
      Don't let transportation worries hold you back. Take advantage of our dedicated and convenient permanent 
      driver service from Driver on Hire. Experience the freedom from stress and the luxury of having a 
      dedicated chauffeur at your service whenever you need it. Whether it's for daily commuting, special 
      occasions, or outstation trips, our professional drivers are ready to cater to your unique needs.
    </p>
  </div>
  <div>
         <div className='md:mt-16'>
            <h1 className='text-center font-bold text-2xl mb-5'>Benefits of Hiring Parmanent Driver from Driver on Hire</h1>
            <p className='text-center md:ml-32 md:mr-32'>
              When it comes to transportation solutions, having a reliable and skilled driver is crucial. Whether you need 
              regular commuting assistance or dedicated permanent chauffeurs for special occasions. Having a dedicated 
              driver for a permanent basis offers numerous advantages, such as freeing you from daily commuting stress, 
              allowing you to focus on important tasks, and providing added security during travels.
            </p>
         </div>
         <div className='max-w-screen-2x1 container md:px-20 md:mt-10 px-4 flex flex-col md:flex-row'>
            <div className='md:mr-5 md:ml-10 md:mb-5 '>
            <div className="card-action w-80 h-80 bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h1 className="card-title pt-2 pl-2 text-black text-2xl">Skilled Professional</h1>
                    <p className='text-justify pt-2'>
                      Our permanent chauffeurs are experienced experts who are proficient in operating 
                      various vehicles and navigating diversified routes. Their knowledge provides a 
                      secure and enjoyable journey, however long the distance.
                    </p>
                </div>
            </div>
         </div>
            <div className='md:mr-5'>
            <div className="card-action w-80 h-80 bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h1 className="card-title pt-2 pl-0 text-black text-2xl">Familiarity with Your Preferences</h1>
                    <p className='text-justify pt-2'>
                      Over time, our permanent drivers become familiar with your preferences and requirements. 
                      This allows them to anticipate your needs, making each ride a personalized experience 
                      tailored to your comfort and convenience
                    </p>
                </div>
            </div>
            </div>
            <div>
            <div className="card-action w-80 h-80 bg-base-200 shadow-xl">
                <div className="card-body ">
                    <h1 className="card-title pt-2 pl-9 text-black text-2xl">Fixed price range</h1>
                    <p className='text-justify pt-2'>
                      Hiring permanent drivers can result in considerable time and cost savings over time. 
                      You no longer have to waste time looking for drivers or negotiating fares. 
                      Furthermore, because of our reasonable pricing, having a dedicated driver is an affordable luxury.
                    </p>
                </div>
            </div>
            </div>
      </div>   
  </div>
    </div>

    </>
  )
}

export default PServices2
