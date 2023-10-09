import React, { useState } from 'react'

const TransactionHistory = () => {
  // Sample transaction data (replace with actual data)
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'Deposit',
      amount: 500.0,
      date: '2023-10-01'
    },
    {
      id: 2,
      type: 'Withdrawal',
      amount: 200.0,
      date: '2023-09-28'
    },
    {
      id: 3,
      type: 'Trade',
      amount: -300.0,
      date: '2023-09-25'
    }
    // Add more transactions here
  ])

  const [selectedTransaction, setSelectedTransaction] = useState(null)

  const handleSelectTransaction = transaction => {
    setSelectedTransaction(transaction)
  }
  const [showStatement, setShowStatement] = useState(false)

  // Function to generate and display the account statement
  const generateAccountStatement = () => {
    // Implement logic to generate the account statement here
    // You can fetch the required data and format it into a statement

    // For demonstration purposes, let's assume the statement data
    const statementData = {
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      transactionHistory: [
        {
          date: '2023-01-05',
          description: 'Deposit',
          amount: 1000.0
        },
        {
          date: '2023-02-10',
          description: 'Withdrawal',
          amount: -500.0
        }
        // Add more transaction entries here
      ],
      accountBalances: [
        {
          date: '2023-01-01',
          balance: 0.0
        },
        {
          date: '2023-12-31',
          balance: 750.0
        }
      ],
      tradingActivity: [
        {
          date: '2023-03-15',
          description: 'Buy BTC',
          quantity: 2,
          price: 50000.0,
          total: -100000.0
        },
        {
          date: '2023-04-20',
          description: 'Sell BTC',
          quantity: 1,
          price: 55000.0,
          total: 55000.0
        }
        // Add more trading activity entries here
      ]
    }

    // Display the account statement
    setShowStatement(statementData)
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Transaction History</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
        {/* Transaction List */}
        <div className='bg-gray-900 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Recent Transactions
          </h2>
          <ul className='divide-y divide-gray-700'>
            {transactions.map(transaction => (
              <li
                key={transaction.id}
                onClick={() => handleSelectTransaction(transaction)}
                className='cursor-pointer hover:bg-gray-700 p-4 rounded-md transition duration-300'
              >
                <div className='flex justify-between'>
                  <div className='font-semibold'>{transaction.type}</div>
                  <div>{transaction.date}</div>
                </div>
                <div className='mt-2 text-gray-400'>
                  Amount: {transaction.amount.toFixed(2)} USD
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Transaction Details */}
        {selectedTransaction && (
          <div className='bg-gray-900 rounded-lg p-6'>
            <h2 className='text-xl font-semibold mb-4 text-white'>
              Transaction Details
            </h2>
            <div className='mb-2'>
              <span className='font-semibold'>Type:</span>{' '}
              {selectedTransaction.type}
            </div>
            <div className='mb-2'>
              <span className='font-semibold'>Amount:</span>{' '}
              {selectedTransaction.amount.toFixed(2)} USD
            </div>
            <div className='mb-2'>
              <span className='font-semibold'>Date:</span>{' '}
              {selectedTransaction.date}
            </div>
            {/* Add more transaction details here */}
            <div className='mt-4'>
              <button
                onClick={() => setSelectedTransaction(null)}
                className='px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-600'
              >
                Back to Transactions
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Generate Account Statement Button */}
      <button
        className='px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600'
        onClick={generateAccountStatement}
      >
        Generate Account Statement
      </button>

      {/* Display Account Statement */}
      {showStatement && (
        <div className='mt-4'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Account Statement
          </h2>
          <p className='text-gray-400'>
            Statement Period: {showStatement.startDate} to{' '}
            {showStatement.endDate}
          </p>

          {/* Transaction History */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2 text-white'>
              Transaction History
            </h3>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Date
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Description
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Amount (USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {showStatement.transactionHistory.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Account Balances */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2 text-white'>
              Account Balances
            </h3>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Date
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Balance (USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {showStatement.accountBalances.map((balance, index) => (
                  <tr key={index}>
                    <td>{balance.date}</td>
                    <td>{balance.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trading Activity */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold mb-2 text-white'>
              Trading Activity
            </h3>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Date
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Description
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Quantity
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Price (USD)
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600'>
                    Total (USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                {showStatement.tradingActivity.map((trade, index) => (
                  <tr key={index}>
                    <td>{trade.date}</td>
                    <td>{trade.description}</td>
                    <td>{trade.quantity}</td>
                    <td>{trade.price}</td>
                    <td>{trade.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default TransactionHistory
