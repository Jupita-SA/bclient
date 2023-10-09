import React, { useState, useEffect } from 'react'

const TradingManagement = () => {
  const [tradingParams, setTradingParams] = useState({
    maxOrderSize: 1000,
    maxDailyWithdrawal: 5000,
    tradingFee: 0.2
  })

  const handleChange = e => {
    const { name, value } = e.target
    setTradingParams({
      ...tradingParams,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Implement logic to update trading parameters and limits
    console.log('Trading parameters updated:', tradingParams)
  }

  return (
    <div className='container mx-auto p-6 bg-gray-900 rounded-md text-white'>
      <div className='max-w-md'>
        <h2 className='text-xl font-semibold mb-4'>
          Adjust Trading Parameters
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='maxOrderSize' className='block text-gray-400'>
              Max Order Size:
            </label>
            <input
              type='number'
              id='maxOrderSize'
              name='maxOrderSize'
              className='w-full px-4 py-2 mt-2 border text-gray-800 rounded-md'
              value={tradingParams.maxOrderSize}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='maxDailyWithdrawal' className='block text-gray-400'>
              Max Daily Withdrawal:
            </label>
            <input
              type='number'
              id='maxDailyWithdrawal'
              name='maxDailyWithdrawal'
              className='w-full px-4 py-2 mt-2 border text-gray-800 rounded-md'
              value={tradingParams.maxDailyWithdrawal}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='tradingFee' className='block text-gray-400'>
              Trading Fee (%):
            </label>
            <input
              type='number'
              id='tradingFee'
              name='tradingFee'
              className='w-full px-4 py-2 mt-2 border text-gray-800 rounded-md'
              value={tradingParams.tradingFee}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Update Parameters
          </button>
        </form>
      </div>
    </div>
  )
}

const Trading = () => {
  const [liveTrades, setLiveTrades] = useState([])
  const [tradeHistory, setTradeHistory] = useState([])
  const [orders, setOrders] = useState([])
  const [selectedTrade, setSelectedTrade] = useState(null)

  // Simulated data for live trades, trade history, and orders
  const sampleLiveTrades = [
    { id: 1, pair: 'BTC/USD', price: '60,000 USD', volume: '0.5 BTC' },
    { id: 2, pair: 'ETH/USD', price: '4,000 USD', volume: '2 ETH' }
  ]

  const sampleTradeHistory = [
    {
      id: 1,
      pair: 'BTC/USD',
      price: '61,000 USD',
      volume: '0.5 BTC',
      status: 'Filled'
    },
    {
      id: 2,
      pair: 'ETH/USD',
      price: '3,900 USD',
      volume: '2 ETH',
      status: 'Filled'
    },
    {
      id: 3,
      pair: 'BTC/USD',
      price: '62,000 USD',
      volume: '0.3 BTC',
      status: 'Filled'
    }
  ]

  const sampleOrders = [
    {
      id: 1,
      pair: 'BTC/USD',
      price: '59,000 USD',
      volume: '0.7 BTC',
      status: 'Pending'
    },
    {
      id: 2,
      pair: 'ETH/USD',
      price: '3,800 USD',
      volume: '1 ETH',
      status: 'Pending'
    }
  ]

  useEffect(() => {
    // Set initial data
    setLiveTrades(sampleLiveTrades)
    setTradeHistory(sampleTradeHistory)
    setOrders(sampleOrders)
  }, [])

  const handleSelectTrade = trade => {
    setSelectedTrade(trade)
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Trading</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Live Trades */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Live Trades</h2>
          <ul className='divide-y divide-gray-600'>
            {liveTrades.map(trade => (
              <li
                key={trade.id}
                onClick={() => handleSelectTrade(trade)}
                className='cursor-pointer hover:bg-gray-600 p-4 rounded-md transition duration-300'
              >
                Pair: {trade.pair}
                <br />
                Price: {trade.price}
                <br />
                Volume: {trade.volume}
              </li>
            ))}
          </ul>
        </div>

        {/* Selected Trade Details */}
        {selectedTrade && (
          <div className='col-span-2'>
            <h2 className='text-xl font-semibold mb-4'>Selected Trade</h2>
            <div className='bg-gray-700 rounded-md p-4 shadow-md'>
              <p className='mb-2'>Trade ID: {selectedTrade.id}</p>
              <p className='mb-2'>Pair: {selectedTrade.pair}</p>
              <p className='mb-2'>Price: {selectedTrade.price}</p>
              <p className='mb-2'>Volume: {selectedTrade.volume}</p>
            </div>
          </div>
        )}
      </div>
      {/* Trade History */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Trade History</h2>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Pair
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Price (USD)
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Volume
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tradeHistory.map(trade => (
                <tr key={trade.id} className='hover:bg-gray-600'>
                  <td className='px-4 py-2'>{trade.pair}</td>
                  <td className='px-4 py-2'>{trade.price}</td>
                  <td className='px-4 py-2'>{trade.volume}</td>
                  <td className='px-4 py-2'>{trade.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Orders */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Orders</h2>
        <div className='overflow-x-auto'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Pair
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Price (USD)
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Volume
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className='hover:bg-gray-600'>
                  <td className='px-4 py-2'>{order.pair}</td>
                  <td className='px-4 py-2'>{order.price}</td>
                  <td className='px-4 py-2'>{order.volume}</td>
                  <td className='px-4 py-2'>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-8'>
        <TradingManagement />
      </div>
    </div>
  )
}

export default Trading
