import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <>
    <div>
            <div className="model-box">
                <h2>Signup Page</h2>
                <form id="signupForm">
                <div class="form-group" className='flex md:mt-5 md:mr-60'>
                    <label for="username">Username</label>
                    <input className='w-80 px-3 py-1 boarder rounded-md outline-1 ml-5' 
                      type="text" id="username" name="username" required/>
                    <p class="error-message" id="usernameError"></p>
                </div>
                <div class="form-group" className='flex md:mt-5 md:mr-5'>
                    <label for="email">Email</label>
                    <input className='w-80 px-3 py-1 boarder rounded-md outline-1 ml-5'
                      type="email" id="email" name="email" required/>
                    <p class="error-message" id="emailError"></p>
                </div>
                <div class="form-group" className='flex md:mt-5 md:mr-5'>
                    <label for="password">Password</label>
                    <input className='w-80 px-3 py-1 boarder rounded-md outline-double ml-5'
                      type="password" id="password" name="password" required/>
                    <p class="error-message" id="passwordError"></p>
                </div>
                <div class="form-group" className='flex md:mr-10'>
                    <label for="confirmPassword">Confirm Password</label>
                    <input className='w-80 px-3 py-1 boarder rounded-md outline-double ml-5'
                      type="password" id="confirmPassword" name="confirmPassword" required/>
                    <p class="error-message" id="confirmPasswordError"></p>
                </div>
                <button type="submit">Signup</button>
                </form>
            </div>
     </div>
    </>
  )
}

