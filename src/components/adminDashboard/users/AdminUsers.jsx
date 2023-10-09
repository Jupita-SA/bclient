import React, { useState } from 'react'

const AdminUsers = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'user123',
      email: 'user123@example.com',
      status: 'active'
    },
    {
      id: 2,
      username: 'john_doe',
      email: 'john.doe@example.com',
      status: 'inactive'
    }
    // Add more user data here
  ])

  const [selectedUser, setSelectedUser] = useState(null)
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    status: 'active' // Default status
  })

  const handleSelectUser = user => {
    setSelectedUser(user)
  }

  const handleEditUser = user => {
    // Implement logic to edit user
    console.log('Editing user:', user)
  }

  const handleDisableUser = user => {
    // Implement logic to disable user
    console.log('Disabling user:', user)
  }

  const handleAddUser = () => {
    // Implement logic to add a new user
    console.log('Adding user:', newUser)
    // Add the new user to the users list
    setUsers([...users, newUser])
    // Clear the form fields
    setNewUser({
      username: '',
      email: '',
      status: 'active'
    })
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white'>
      <h1 className='text-3xl font-semibold mb-4'>User Management</h1>
      <p className='text-gray-400 mb-8'>
        User list with search and filter options. User profile details and
        activity logs. Ability to view, edit, disable, and add user accounts.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* User List */}
        <div className='col-span-2 overflow-y-scroll h-[300px]'>
          <h2 className='text-xl font-semibold mb-4'>User List</h2>
          {/* <input
            type='text'
            placeholder='Search users...'
            className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
          /> */}
          <ul className='mt-4 divide-y divide-gray-600'>
            {users.map(user => (
              <li
                key={user.id}
                onClick={() => handleSelectUser(user)}
                className={`cursor-pointer p-4 rounded-md transition duration-300 ${
                  selectedUser === user ? 'bg-gray-600' : 'hover:bg-gray-700'
                }`}
              >
                {user.username} - {user.email} ({user.status})
              </li>
            ))}
          </ul>
        </div>

        {/* Selected User Details */}
        {selectedUser && (
          <div className='col-span-1'>
            <h2 className='text-xl font-semibold mb-4'>User Details</h2>
            <div className='bg-gray-700 rounded-md p-4 shadow-md'>
              <p className='mb-2'>
                <span className='font-semibold'>Username:</span>{' '}
                {selectedUser.username}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Email:</span>{' '}
                {selectedUser.email}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Status:</span>{' '}
                {selectedUser.status}
              </p>
              <div className='mt-4'>
                <button
                  onClick={() => handleEditUser(selectedUser)}
                  className='bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600'
                >
                  Edit User
                </button>
                <button
                  onClick={() => handleDisableUser(selectedUser)}
                  className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                >
                  Disable User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add User Form */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Add a New User</h2>
        <form onSubmit={handleAddUser} className='max-w-md'>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-gray-400'>
              Username:
            </label>
            <input
              type='text'
              id='username'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              required
              value={newUser.username}
              onChange={e =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-400'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              required
              value={newUser.email}
              onChange={e => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='status' className='block text-gray-400'>
              Status:
            </label>
            <select
              id='status'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              value={newUser.status}
              onChange={e => setNewUser({ ...newUser, status: e.target.value })}
            >
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
            </select>
          </div>
          <button
            type='submit'
            className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminUsers
