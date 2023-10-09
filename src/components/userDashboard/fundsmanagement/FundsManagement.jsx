import React, { useState, useEffect } from 'react'

const FundsManagement = () => {
  // Sample user account data (replace with actual data)
  const [accountData, setAccountData] = useState({
    accountNumber: '123456789',
    balance: 10000.0
  })

  // Sample payment methods data (replace with actual data)
  const [paymentMethods, setPaymentMethods] = useState([])

  // Simulate fetching user account data from an API
  useEffect(() => {
    // Replace this with actual API calls to fetch user account data
    // For demonstration, we'll set initial data above

    // Replace this with actual API calls to fetch payment methods data
    // For demonstration, we'll set initial data here
    const methods = [
      {
        id: 1,
        name: 'Bank Transfer',
        icon: 'bank-transfer-icon.png'
      },
      {
        id: 2,
        name: 'Credit Card',
        icon: 'credit-card-icon.png'
      }
      // Add more payment methods here
    ]

    setPaymentMethods(methods)
  }, [])

  // Function to handle depositing funds
  const depositFunds = (amount, paymentMethod) => {
    // Implement the logic to deposit funds
    console.log(`Depositing ${amount} USD via ${paymentMethod}`)
  }

  // Function to handle withdrawing funds
  const withdrawFunds = amount => {
    // Implement the logic to withdraw funds
    console.log(`Withdrawing ${amount} USD`)
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Funds Management</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-gray-900 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Account Balance
          </h2>
          <p className='text-gray-400'>
            Account Number: {accountData.accountNumber}
          </p>
          <p className='text-gray-400'>
            Current Balance: {accountData.balance.toFixed(2)} USD
          </p>
        </div>
        <div className='bg-gray-900 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Funds Management
          </h2>

          {/* Deposit Funds Form */}
          <form
            onSubmit={e => {
              e.preventDefault()
              const amount = parseFloat(e.target.depositAmount.value)
              const paymentMethod = e.target.paymentMethod.value
              depositFunds(amount, paymentMethod)
              e.target.reset()
            }}
          >
            <div className='mb-4'>
              <label htmlFor='depositAmount' className='block text-gray-400'>
                Deposit Amount (USD):
              </label>
              <input
                type='number'
                id='depositAmount'
                name='depositAmount'
                className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
                required
                step='0.01'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='paymentMethod' className='block text-gray-400'>
                Payment Method:
              </label>
              <select
                id='paymentMethod'
                name='paymentMethod'
                className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
                required
              >
                {paymentMethods.map(method => (
                  <option key={method.id} value={method.name}>
                    {method.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type='submit'
              className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
            >
              Deposit Funds
            </button>
          </form>

          {/* Withdraw Funds Form */}
          <form
            onSubmit={e => {
              e.preventDefault()
              const amount = parseFloat(e.target.withdrawAmount.value)
              withdrawFunds(amount)
              e.target.reset()
            }}
          >
            <div className='mt-8 mb-4'>
              <label htmlFor='withdrawAmount' className='block text-gray-400'>
                Withdraw Amount (USD):
              </label>
              <input
                type='number'
                id='withdrawAmount'
                name='withdrawAmount'
                className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
                required
                step='0.01'
              />
            </div>
            <button
              type='submit'
              className='px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600'
            >
              Withdraw Funds
            </button>
          </form>
        </div>
      </div>

      {/* Payment Methods */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4 text-white'>
          Payment Methods
        </h2>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {paymentMethods.map(method => (
            <li
              key={method.id}
              className='bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center text-center'
            >
              {/* Replace with actual payment method icons */}
              <img
                src={`images/${method.icon}`}
                alt={method.name}
                className='w-12 h-12 mb-2'
              />
              <span className='text-white'>{method.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FundsManagement
