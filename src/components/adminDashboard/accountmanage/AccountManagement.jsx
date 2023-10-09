import React, { useState, useEffect } from 'react'

const AccountManagement = () => {
  const [selectedAccount, setSelectedAccount] = useState(null)

  const userAccounts = [
    {
      accountId: 'TS07YWDN9J364',
      firstName: 'Kalidou',
      lastName: 'Savadogo',
      email: 'savadogokalidou8@gmail.com',
      balance: 'USD10.00',
      status: 'active'
    },
    {
      accountId: 'VYZJPR3MDO363',
      firstName: 'Hdhdhd',
      lastName: 'Hdhdhd',
      email: 'wonplustoo@gmail.com',
      balance: 'USD10.00',
      status: 'active'
    },
    {
      accountId: 'ZFQLT1VAGR362',
      firstName: 'ABDULLAH',
      lastName: 'SAYEEF',
      email: 'tigova3050@klanze.com',
      balance: 'USD10.00',
      status: 'active'
    },
    {
      accountId: 'QJR27HWUTK361',
      firstName: 'Abdullah',
      lastName: 'Rana',
      email: 'mojima8353@hapincy.com',
      balance: 'USD10.00',
      status: 'active'
    },
    {
      accountId: 'KM5412X3BS360',
      firstName: 'setsgs',
      lastName: 'dfrhdfhg',
      email: 'credcrypto.operator477@simplelogin.com',
      balance: 'USD10.00',
      status: 'active'
    }
  ]

  const handleSelectAccount = account => {
    setSelectedAccount(account)
  }

  const executeAdminAction = (actionType, account) => {
    console.log(`Executing ${actionType} on account ${account.accountId}`)
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Account Management</h1>
      <p className='text-gray-400 mb-8'>
        View and manage user accounts. Monitor account balances and
        transactions. Execute administrative actions on accounts (e.g., freezing
        or unfreezing).
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>User Accounts</h2>
          <ul className='divide-y divide-gray-400'>
            {userAccounts.map(account => (
              <li
                key={account.accountId}
                onClick={() => handleSelectAccount(account)}
                className='cursor-pointer hover:bg-gray-700 p-4 rounded-md transition duration-300'
              >
                {account.accountId} - {account.firstName} {account.lastName}
              </li>
            ))}
          </ul>
        </div>

        {selectedAccount && (
          <div className='col-span-2'>
            <h2 className='text-xl font-semibold mb-4'>Selected Account</h2>
            <div className='bg-gray-700 rounded-md p-4 shadow-md'>
              <p className='mb-2'>
                <span className='font-semibold'>Account ID:</span>{' '}
                {selectedAccount.accountId}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>First Name:</span>{' '}
                {selectedAccount.firstName}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Last Name:</span>{' '}
                {selectedAccount.lastName}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Email:</span>{' '}
                {selectedAccount.email}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Balance:</span>{' '}
                {selectedAccount.balance}
              </p>
              <div className='mt-4'>
                <button
                  onClick={() => executeAdminAction('Freeze', selectedAccount)}
                  className='bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600'
                >
                  Freeze Account
                </button>
                <button
                  onClick={() =>
                    executeAdminAction('Unfreeze', selectedAccount)
                  }
                  className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'
                >
                  Unfreeze Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountManagement
