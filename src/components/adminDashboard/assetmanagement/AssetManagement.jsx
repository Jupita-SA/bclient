import React, { useState } from 'react'

const AssetManagement = () => {
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: 'Bitcoin (BTC)',
      price: '60,000 USD',
      marketCap: '1.2 Trillion USD'
    },
    {
      id: 2,
      name: 'Ethereum (ETH)',
      price: '4,000 USD',
      marketCap: '450 Billion USD'
    }
    // Add more asset data here
  ])

  const handleSelectAsset = asset => {
    setSelectedAsset(asset)
  }

  const addAsset = () => {
    // Implement logic to add a new asset
    console.log('Adding a new asset...')
  }

  const removeAsset = assetId => {
    // Implement logic to remove an asset
    console.log(`Removing asset with ID ${assetId}...`)
  }

  return (
    <div className='container mx-auto p-8 bg-gray-800 text-white min-h-screen'>
      <h1 className='text-3xl font-semibold text-gray-300 mb-6'>
        Asset Management
      </h1>
      <p className='text-gray-400 mb-8'>
        Explore the world of assets including cryptocurrencies, stocks, and
        commodities. Stay updated with asset details, prices, and market data.
        Add or remove trading pairs or assets.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Asset List */}
        <div className='col-span-2'>
          <h2 className='text-xl font-semibold mb-4 text-gray-300'>
            Available Assets
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase'>
                    Asset Name
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase'>
                    Price (USD)
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase'>
                    Market Cap (USD)
                  </th>
                  <th className='px-4 py-2 text-left text-xs font-semibold text-gray-300 uppercase'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {assets.map(asset => (
                  <tr key={asset.id}>
                    <td
                      onClick={() => handleSelectAsset(asset)}
                      className='cursor-pointer hover:underline text-blue-500'
                    >
                      {asset.name}
                    </td>
                    <td className='text-white'>{asset.price}</td>
                    <td className='text-white'>{asset.marketCap}</td>
                    <td>
                      <button
                        onClick={() => removeAsset(asset.id)}
                        className='text-red-500 hover:underline'
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

    
      </div>
      {/* Add Asset Form */}
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-4 text-gray-300'>
          Add a New Asset
        </h2>
        <form onSubmit={addAsset} className='max-w-md'>
          <div className='mb-4'>
            <label htmlFor='assetName' className='block text-gray-300'>
              Asset Name:
            </label>
            <input
              type='text'
              id='assetName'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='assetPrice' className='block text-gray-300'>
              Price (USD):
            </label>
            <input
              type='text'
              id='assetPrice'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='assetMarketCap' className='block text-gray-300'>
              Market Cap (USD):
            </label>
            <input
              type='text'
              id='assetMarketCap'
              className='w-full px-4 py-2 mt-2 border rounded-md bg-gray-700 text-white'
              required
            />
          </div>
          <button
            type='submit'
            className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
          >
            Add Asset
          </button>
        </form>
      </div>
    </div>
  )
}

export default AssetManagement
