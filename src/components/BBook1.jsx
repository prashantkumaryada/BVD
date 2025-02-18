import React, { useState } from 'react';
import './form.css';

const DriverBookingForm = () => {
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicletype, setVehicletype] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  // const [dropoffLocation, setDropoffLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to book driver here
    console.log('Booking submitted:', { name, phone, vehicletype, pickupLocation, date, time });
  };
  
  return (
    
  <>
   
    <div className='background'>  
      <div className="wrapper">
        <h2 className="title">Driver Booking Form</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className='flex md:ml-5'>
          <div className="form-group">
            <label>
              Name:-
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="form-control"
              />
            </label>
          </div>
          
          <div className="form-group md:ml-10">
            <label className='md:ml-5'>
              Phone:-
              <input
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="form-control"
              />
            </label>
          </div>
          </div>
          <div className='flex'>
          <div className='dropdwon'>
          <div className="sm:col-span-3">
                <label htmlFor="Vehicle" className="block text-sm font-medium leading-6 text-gray-900 md:ml-10">
                  Vehicle Type:-
                </label>
                <div className="mt-2 bg-base-300 md:ml-10">
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={vehicletype}
                    onChange={(event) => setVehicletype(event.target.value)}
                    autoComplete="vehical-name"
                    className="item"
                  >
                    <option>Toyota</option>
                    <option>Honda</option>
                    <option>Kia</option>
                    <option>BMW</option>
                    <option>Hyundai</option>
                    <option>Suziki</option>
                  </select>
                </div>
              </div>
              </div>
          <div className="form-group md:ml-32">
            <label className='md:mt-3 md:ml-5'>
              Address:-
              <input
                type="text"
                value={pickupLocation}
                onChange={(event) => setPickupLocation(event.target.value)}
                className="form-control"
              />
            </label>
          </div>
          </div>
          <div className='flex'>
            <div className="form-group md:mr-24 md:ml-10">
              <label>
                Date:-
                <input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Time:-
                <input
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="form-control"
                />
              </label>
            </div>
          </div>  
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
    {/* <div>
      <h1></h1>
    </div> */}

    </>

  );
};

export default DriverBookingForm;