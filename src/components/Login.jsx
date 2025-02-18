import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className='bg-base-300'>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} >
          <form method="dialog" >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          
          <h3 className="font-bold text-lg">Login</h3>
          {/* Email */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input type="email" placeholder='Enter your Email'
              className='w-80 px-3 py-1 boarder rounded-md outline-none'
              {...register("email", { required: true })}/>
              {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
          </div>
          {/* Password */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br/>
            <input type="text" placeholder='Enter your Password'
              className='w-80 px-3 py-1 boarder rounded-md outline-none'
              {...register("password", { required: true })}/>
              {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
          </div>
           {/* Button */}
          <div className='flex justify-around mt-4'>
            <button className='btn bg-black text-white rounded-md px-3 py-1 cursor-pointer hover:bg-blue-500'>Login</button>
            <p className='md:mt-3'>Note Registered??? 
              <Link 
                to='/Signup' 
                className='underline text-blue-400 cursor-pointer'>
                Sign-Up
              </Link>{' '}
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
