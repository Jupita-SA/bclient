import React, { useState, useEffect } from 'react'

const AccountOverview = () => {
  // Sample user account data (replace with actual data)
  const [accountData, setAccountData] = useState({
    accountNumber: '123456789',
    accountType: 'Standard',
    balance: 10000.0,
    equity: 10500.0,
    margin: 2500.0,
    availableFunds: 7500.0,
    leverage: '1:100'
  })

  // Sample recent transactions data (replace with actual data)
  const [recentTransactions, setRecentTransactions] = useState([])

  // Simulate fetching user account data from an API
  useEffect(() => {
    // Replace this with actual API calls to fetch user account data
    // For demonstration, we'll set initial data above

    // Replace this with actual API calls to fetch recent transactions data
    // For demonstration, we'll set initial data here
    const transactions = [
      {
        id: 1,
        type: 'Deposit',
        amount: 1000.0,
        date: '2023-10-15'
      },
      {
        id: 2,
        type: 'Withdrawal',
        amount: 500.0,
        date: '2023-10-10'
      },
      {
        id: 3,
        type: 'Trade',
        instrument: 'EUR/USD',
        action: 'Buy',
        amount: 2.5,
        price: 1.15,
        date: '2023-10-05'
      }
    ]

    setRecentTransactions(transactions)
  }, [])

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Account Overview</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-gray-900 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Account Summary
          </h2>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-gray-400'>Account Number:</div>
            <div>{accountData.accountNumber}</div>
            <div className='text-gray-400'>Account Type:</div>
            <div>{accountData.accountType}</div>
            <div className='text-gray-400'>Leverage:</div>
            <div>{accountData.leverage}</div>
          </div>
        </div>
        <div className='bg-gray-900 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Account Balances
          </h2>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-gray-400'>Balance:</div>
            <div>{accountData.balance.toFixed(2)} USD</div>
            <div className='text-gray-400'>Equity:</div>
            <div>{accountData.equity.toFixed(2)} USD</div>
            <div className='text-gray-400'>Margin:</div>
            <div>{accountData.margin.toFixed(2)} USD</div>
            <div className='text-gray-400'>Available Funds:</div>
            <div>{accountData.availableFunds.toFixed(2)} USD</div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4 text-white'>
          Recent Transactions
        </h2>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Type
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Amount
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Date
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount.toFixed(2)} USD</td>
                  <td>{transaction.date}</td>
                  <td>
                    {transaction.type === 'Trade' ? (
                      <button
                        className='text-blue-500 hover:underline'
                        onClick={() => viewTradeDetails(transaction)}
                      >
                        View Trade
                      </button>
                    ) : (
                      <button
                        className='text-blue-500 hover:underline'
                        onClick={() => viewTransactionDetails(transaction)}
                      >
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AccountOverview
