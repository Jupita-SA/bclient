import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const FinancialManagement = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [activeTab, setActiveTab] = useState('transactions')

 const financialTransactions = [
  {
    id: 1,
    date: '27.09.2023 09:19:23',
    amount: 'USD10.00',
    method: 'USDT',
    status: 'Pending'
  },
  {
    id: 2,
    date: '26.09.2023 19:56:24',
    amount: 'USD50.00',
    method: 'USDT',
    status: 'Pending'
  },
  {
    id: 3,
    date: '12.09.2023 22:56:31',
    amount: 'USD10.00',
    method: 'USDT',
    status: 'Cancelled'
  },
  {
    id: 4,
    date: '09.09.2023 10:42:30',
    amount: 'USD5,000.00',
    method: 'BTC',
    status: 'Cancelled'
  }
  // Add more financial transactions here
]

// Sample deposit data
const deposits = [
  {
    id: 1,
    date: '28.09.2023 14:30:15',
    amount: 'USD100.00',
    method: 'USDT',
    status: 'Completed'
  }
  // Add more deposit entries here
]

// Sample withdrawal data
const withdrawals = [
  {
    id: 1,
    date: '27.09.2023 10:45:22',
    amount: 'USD50.00',
    method: 'USDT',
    status: 'Completed'
  }
  // Add more withdrawal entries here
]
const settlementsAndPayouts = [
  {
    id: 1,
    date: '01.10.2023 08:15:00',
    description: 'Payout to User ABC123',
    amount: 'USD200.00',
    status: 'Pending'
  }
  // Add more settlements and payouts entries here
]


  const handleSelectTransaction = transaction => {
    setSelectedTransaction(transaction)
  }

  const generateReport = () => {
    // Implement report generation logic here
    console.log('Generating financial report...')
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Financial Management</h1>
      <p className='text-gray-400 mb-8'>
        Manage financial transactions, deposits, and withdrawals. View
        transaction history and generate reports. Settlements and payouts
        management.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Financial Transactions List */}
        <div className='overflow-y-scroll h-[250px]'>
          <h2 className='text-xl font-semibold mb-4'>Financial Transactions</h2>
          <ul className='divide-y divide-gray-200'>
            {financialTransactions.map(transaction => (
              <li
                key={transaction.id}
                onClick={() => handleSelectTransaction(transaction)}
                className='cursor-pointer hover:bg-gray-700 p-4 rounded-md transition'
              >
                <div className='flex justify-between'>
                  <div>
                    <p className='font-semibold'>Date: {transaction.date}</p>
                    <p className='text-gray-500'>
                      Amount: {transaction.amount}
                    </p>
                    <p className='text-gray-500'>
                      Method: {transaction.method}
                    </p>
                  </div>
                  <div>
                    <span
                      className={`px-2 py-1 rounded-full ${
                        transaction.status === 'Pending'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Transaction Details */}
        {selectedTransaction && (
          <div className='col-span-2'>
            <h2 className='text-xl font-semibold mb-4'>Selected Transaction</h2>
            <div className='bg-gray-700 rounded-md p-4 shadow-md'>
              <p className='mb-2'>
                <span className='font-semibold'>Date:</span>{' '}
                {selectedTransaction.date}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Amount:</span>{' '}
                {selectedTransaction.amount}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Method:</span>{' '}
                {selectedTransaction.method}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Status:</span>{' '}
                {selectedTransaction.status}
              </p>
              <div className='mt-4'>
                <button
                  onClick={generateReport}
                  className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Deposits and Withdrawals Tabs */}
        <div>
          <div className='flex space-x-4 mb-4'>
            <button
              onClick={() => setActiveTab('deposits')}
              className={`${
                activeTab === 'deposits'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              } px-4 py-2 rounded-md`}
            >
              Deposits
            </button>
            <button
              onClick={() => setActiveTab('withdrawals')}
              className={`${
                activeTab === 'withdrawals'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              } px-4 py-2 rounded-md`}
            >
              Withdrawals
            </button>
            <button
              onClick={() => setActiveTab('settlements')}
              className={`${
                activeTab === 'settlements'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              } px-4 py-2 rounded-md`}
            >
              Settlements
            </button>
          </div>

          {/* Deposits or Withdrawals Table */}
          {activeTab === 'deposits' && (
            <div className='overflow-x-scroll w-[max-width]'>
              <h2 className='text-xl font-semibold mb-4'>Deposits</h2>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {deposits.map(deposit => (
                    <tr key={deposit.id}>
                      <td>{deposit.date}</td>
                      <td>{deposit.amount}</td>
                      <td>{deposit.method}</td>
                      <td>{deposit.status}</td>
                      <td>
                        <button
                          className='text-green-500 ml-3 hover:underline tooltip'
                          data-tooltip='Edit User'
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'withdrawals' && (
            <div className='overflow-x-scroll w-[max-width]'>
              <h2 className='text-xl font-semibold mb-4'>Withdrawals</h2>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawals.map(withdrawal => (
                    <tr key={withdrawal.id}>
                      <td>{withdrawal.date}</td>
                      <td>{withdrawal.amount}</td>
                      <td>{withdrawal.method}</td>
                      <td>{withdrawal.status}</td>
                      <td>
                        <button
                          className='text-green-500 ml-3 hover:underline tooltip'
                          data-tooltip='Edit User'
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'settlements' && (
            <div>
              <h2 className='text-xl font-semibold mb-4'>
                Settlements and Payouts
              </h2>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {settlementsAndPayouts.map(item => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.description}</td>
                      <td>{item.amount}</td>
                      <td>{item.status}</td>
                      <td>
                        <button
                          className='text-green-500 ml-3 hover:underline tooltip'
                          data-tooltip='Edit User'
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FinancialManagement
