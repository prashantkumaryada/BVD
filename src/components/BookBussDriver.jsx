import React from 'react'
import './busdriver.css'
import { useForm } from "react-hook-form"


function BookBussDriver() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (

    
    <div className='background1'>
      <div className='md:mt-20 md:ml-28'>
        <div className='title1 text-center font-bold md:mr-10'><h>BOOK BUS DRIVER</h></div>
          <div className='wrapper1'>
            <form onSubmit={handleSubmit(onSubmit)} className='form1'>
              <div className='flex md:mt-5 md:ml-10'>
                <label1>
                  Name:
                  <input type="text" name="name"{...register("name", { required: true })}/>
                  {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                </label1>
                
                <label1 className='md:ml-10'>
                  Phone:
                  <input type="tel" name="phone"  {...register("phone", { required: true })}/>
                  {errors.phone && <span className='text-sm text-red-500'>This field is required</span>}
                </label1>
              </div>
              <div className='flex md:mt-5 md:ml-10'>
                <label1>
                  Email:
                  <input type="email" name="email"  {...register("email", { required: true })} />
                  {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                </label1>
                
                <label1 className='md:ml-10'>
                  Looking for:
                  <select name="lookingFor" required>
                    <option value="PERSONAL">Personal</option>
                    <option value="BUSINESS">Business</option>
                  </select>
                </label1>
              </div>
              <div className='flex md:mt-5 md:ml-10'>
                <label1 className=''>
                  Date:
                  <input type="date" name=""  {...register("date", { required: true })} />
                  {errors.date && <span className='text-sm text-red-500'>This field is required</span>}
                </label1>
                <label1 className='md:ml-24'>
                  Address:
                  <input type="text" name="address"  {...register("address", { required: true })} />
                  {errors.address && <span className='text-sm text-red-500'>This field is required</span>}
                </label1>      
              </div>
              <div className='send md:ml-40'><p>Send details to call back</p></div>
              <button type="submit" className='md:mt-5 md:ml-52 md:mb-5'>Submit</button>
            </form>
          </div>
      </div>
      </div>
  );
};
export default BookBussDriver
