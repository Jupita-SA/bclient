import React, { useState } from 'react'

export const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const handleSignUp = async () => {
    try {
      // Destructure user data
      const { firstName, lastName, email, password } = user

      // Create a request body with user data
      const requestBody = {
        firstName,
        lastName,
        email,
        password
      }

      // Send a POST request to the backend API
      const response = await fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      // Check the response status
      if (response.status === 201) {
        // User registered successfully
        console.log('User registered successfully')
        window.location.replace('/signin')
      } else {
        // Registration failed
        const data = await response.json()
        console.error('Error Signing up user:', data.message)
        // You can show an error message to the user
      }
    } catch (error) {
      // Handle registration error
      console.error('Error Signing up user:', error)
      // You can show an error message to the user
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    // Update the user state based on the input field's "name" attribute
    setUser({ ...user, [name]: value })
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
        <div className='mb-4'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={user.firstName}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={user.lastName}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div className='mb-4'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={user.email}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <div className='mb-4'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded p-2'
          />
        </div>
        <button
          onClick={handleSignUp}
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300'
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
