import React, { useState } from 'react'

export const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleSignIn = async () => {
    try {
      // Destructure user data
      const { email, password } = user

      // Create a request body with user data
      const requestBody = {
        email,
        password
      }

      // Send a POST request to the backend API for login
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })

      // Check the response status
      if (response.status === 200) {
        // User logged in successfully
        const data = await response.json()
        console.log('User logged in successfully')
        window.location.replace('/dashboard')
        console.log('JWT Token:', data.token)
        // You can store the JWT token in local storage or a cookie for future requests
      } else {
        // Login failed
        const data = await response.json()
        console.error('Error logging in user:', data.message)
        // You can show an error message to the user
      }
    } catch (error) {
      // Handle login error
      console.error('Error logging in user:', error)
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
        <h2 className='text-2xl font-semibold mb-4'>Sign In</h2>
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
          onClick={handleSignIn}
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300'
        >
          Sign In
        </button>
      </div>
    </div>
  )
}
