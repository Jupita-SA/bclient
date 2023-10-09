import React, { useState } from 'react'

const TradingInterface = () => {
  const [selectedAsset, setSelectedAsset] = useState('')
  const [orderType, setOrderType] = useState('market')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [stopLoss, setStopLoss] = useState('')
  const [takeProfit, setTakeProfit] = useState('')

  // Order history and portfolio state
  const [orderHistory, setOrderHistory] = useState([])
  const [portfolio, setPortfolio] = useState([
    { asset: 'BTC', quantity: 5, currentValue: 30000.0 },
    { asset: 'ETH', quantity: 10, currentValue: 4000.0 }
    // Add more assets to the portfolio
  ])

  const handleSelectAsset = asset => {
    setSelectedAsset(asset)
  }

  const placeOrder = () => {
    // Validate input
    if (
      !selectedAsset ||
      !quantity ||
      isNaN(quantity) ||
      parseFloat(quantity) <= 0
    ) {
      alert('Please provide valid asset and quantity.')
      return
    }

    if (
      orderType === 'limit' &&
      (!price || isNaN(price) || parseFloat(price) <= 0)
    ) {
      alert('Please provide a valid price for the limit order.')
      return
    }

    if (orderType === 'stop') {
      if (!stopLoss || isNaN(stopLoss) || parseFloat(stopLoss) <= 0) {
        alert('Please provide a valid stop loss amount.')
        return
      }

      if (!takeProfit || isNaN(takeProfit) || parseFloat(takeProfit) <= 0) {
        alert('Please provide a valid take profit amount.')
        return
      }
    }

    // Create a new order object
    const newOrder = {
      asset: selectedAsset,
      orderType,
      quantity: parseFloat(quantity),
      price: parseFloat(price),
      stopLoss: parseFloat(stopLoss),
      takeProfit: parseFloat(takeProfit)
    }

    // Add the order to the order history
    setOrderHistory([...orderHistory, newOrder])

    // Reset form fields
    setSelectedAsset('')
    setOrderType('market')
    setQuantity('')
    setPrice('')
    setStopLoss('')
    setTakeProfit('')
  }

  return (
    <div className='container mx-auto p-6 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold mb-4'>Trading Interface</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-gray-900 rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Portfolio Overview
          </h2>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                  Asset
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                  Quantity Held
                </th>
                <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                  Current Market Value
                </th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((asset, index) => (
                <tr key={index}>
                  <td>{asset.asset}</td>
                  <td>{asset.quantity}</td>
                  <td>{asset.currentValue.toFixed(2)} USD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='bg-gray-900 rounded-lg p-6'>
          {/* Asset Selector */}
          <div className='mb-4'>
            <label htmlFor='assetSelector' className='block text-gray-400'>
              Select Asset:
            </label>
            <select
              id='assetSelector'
              name='assetSelector'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              onChange={e => handleSelectAsset(e.target.value)}
              value={selectedAsset}
              required
            >
              <option value='' disabled>
                Select an Asset
              </option>
              <option value='BTC'>Bitcoin (BTC)</option>
              <option value='ETH'>Ethereum (ETH)</option>
              {/* Add more assets here */}
            </select>
          </div>
          {/* Order Type Selector */}
          <div className='mb-4'>
            <label htmlFor='orderType' className='block text-gray-400'>
              Order Type:
            </label>
            <select
              id='orderType'
              name='orderType'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              onChange={e => setOrderType(e.target.value)}
              value={orderType}
            >
              <option value='market'>Market Order</option>
              <option value='limit'>Limit Order</option>
              <option value='stop'>Stop Order</option>
            </select>
          </div>
          {/* Quantity */}
          <div className='mb-4'>
            <label htmlFor='quantity' className='block text-gray-400'>
              Quantity:
            </label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
              required
            />
          </div>
          <button
            className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
            onClick={placeOrder}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Stop Loss and Take Profit (for Stop Orders) */}
      {orderType === 'stop' && (
        <div>
          <div className='mb-4'>
            <label htmlFor='stopLoss' className='block text-gray-400'>
              Stop Loss (USD):
            </label>
            <input
              type='number'
              id='stopLoss'
              name='stopLoss'
              className='w-full px-4 py-2 mt-2 border rounded-md'
              value={stopLoss}
              onChange={e => setStopLoss(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='takeProfit' className='block text-gray-400'>
              Take Profit (USD):
            </label>
            <input
              type='number'
              id='takeProfit'
              name='takeProfit'
              className='w-full px-4 py-2 mt-2 border rounded-md'
              value={takeProfit}
              onChange={e => setTakeProfit(e.target.value)}
              required
            />
          </div>
        </div>
      )}
      {/* Place Order Button */}

      {/* Order History */}
      <div className='mt-8 overflow-x-auto'>
        <h2 className='text-xl font-semibold mb-4 text-white'>Order History</h2>
        <table className='w-full table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                Asset
              </th>
              <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                Order Type
              </th>
              <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                Quantity
              </th>
              <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                Price
              </th>
              <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                Stop Loss
              </th>
              <th className='px-4 py-2 text-left text-xs font-semibold text-gray-400 uppercase'>
                Take Profit
              </th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, index) => (
              <tr key={index}>
                <td>{order.asset}</td>
                <td>{order.orderType}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.stopLoss}</td>
                <td>{order.takeProfit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Portfolio Overview */}
    </div>
  )
}

export default TradingInterface
