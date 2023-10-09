import React from 'react'
import Sidebar from '../../sidebar/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBalanceScale,
  faMoneyBillAlt,
  faMoneyCheckAlt,
  faDollarSign,
  faHandHoldingUsd,
  faExchangeAlt,
  faMoneyCheck,
  faUsers,
  faTicketAlt,
  faEdit,
  faBan,
  faTrash,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

const RecentRegistrations = () => {
  const registrations = [
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

  return (
    <div className='container mx-auto px-10 overflow-x-auto'>
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>
        Recent Registrations
      </h2>
      <table className='min-w-full bg-gray-800 divide-y divide-gray-200 bg-gray-900 rounded-lg shadow-md'>
        <thead className='bg-gray-400'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              Account ID
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              First Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              Last Name
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              Email
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              Balance
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              Status
            </th>
            <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
              Action
            </th>
          </tr>
        </thead>
        <tbody className='bg-gray-900 divide-y text-gray-200 divide-gray-200 rounded-lg shadow-lg'>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td className='px-6 py-4 whitespace-nowrap'>
                {registration.accountId}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {registration.firstName}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {registration.lastName}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {registration.email}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {registration.balance}
              </td>
              <td className='px-6 py-4 whitespace-nowrap'>
                {registration.status}
              </td>
              <td className='px-6 py-4 whitespace-nowrap space-x-2'>
                <button
                  className='text-green-500 hover:underline tooltip'
                  data-tooltip='Edit User'
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className='text-gray-500 hover:underline tooltip'
                  data-tooltip='Suspend User'
                >
                  <FontAwesomeIcon icon={faBan} />
                </button>
                <button
                  className='text-red-500 hover:underline tooltip'
                  data-tooltip='Delete User'
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  className='text-blue-500 hover:underline tooltip'
                  data-tooltip='Send Message'
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const RecentDeposits = () => {
  const deposits = [
    {
      date: '27.09.2023 09:19:23',
      amount: 'USD10.00',
      method: 'USDT',
      status: 'pending'
    },
    {
      date: '26.09.2023 19:56:24',
      amount: 'USD50.00',
      method: 'USDT',
      status: 'pending'
    },
    {
      date: '12.09.2023 22:56:31',
      amount: 'USD10.00',
      method: 'USDT',
      status: 'cancelled'
    },
    {
      date: '09.09.2023 10:42:30',
      amount: 'USD5,000.00',
      method: 'BTC',
      status: 'cancelled'
    }
  ]

  return (
    <div className='container mx-auto p-10 overflow-x-auto'>
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>
        Recent Deposits
      </h2>
      <div className='rounded-lg shadow-md overflow-x-auto'>
        <table className='min-w-full bg-gray-800 divide-y divide-gray-200 bg-gray-900 rounded-lg'>
          <thead className='bg-gray-400'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                #
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                Date
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                Amount
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                Method
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-gray-900 divide-y text-gray-200 divide-gray-200 rounded-lg'>
            {deposits.map((deposit, index) => (
              <tr key={index}>
                <td className='px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{deposit.date}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {deposit.amount}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {deposit.method}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {deposit.status}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <button className='text-green-500 hover:underline'>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className='text-gray-500 hover:underline ml-2'>
                    <FontAwesomeIcon icon={faBan} />
                  </button>
                  <button className='text-red-500 hover:underline ml-2'>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className='text-blue-500 hover:underline ml-2'>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const statistics = [
  {
    title: 'Cumulative Users Balance',
    icon: faBalanceScale,
    value: '100,000 BTC',
    colorClass: 'text-blue-500' // Define a color class for this icon
  },
  {
    title: 'Total Deposits',
    icon: faMoneyBillAlt,
    value: '50,000 BTC',
    colorClass: 'text-red-500'
  },
  {
    title: 'Total Withdrawals',
    icon: faMoneyCheckAlt,
    value: '30,000 BTC',
    colorClass: 'text-yellow-500'
  },
  {
    title: 'Total Earnings',
    icon: faDollarSign,
    value: '20,000 BTC',
    colorClass: 'text-green-500'
  },
  {
    title: 'Total Investments',
    icon: faHandHoldingUsd,
    value: '80,000 BTC',
    colorClass: 'text-purple-500'
  },
  {
    title: 'Pending Transfers',
    icon: faExchangeAlt,
    value: '5,000 BTC',
    colorClass: 'text-indigo-500'
  },
  {
    title: 'Total Loans',
    icon: faMoneyCheck,
    value: '10,000 BTC',
    colorClass: 'text-pink-500'
  },
  {
    title: 'Users',
    icon: faUsers,
    value: '5,000',
    colorClass: 'text-teal-500'
  },
  {
    title: 'Tickets',
    icon: faTicketAlt,
    value: '200',
    colorClass: 'text-orange-500'
  }
]

const AdminHome = () => {
  return (
    <div className='bg-gray-800'>
      <div className='flex-grow p-5'>
        <h2 className='text-2xl text-gray-300 font-semibold mb-4'>
          Admin Dashboard
        </h2>
        <div className='container rounded-lg md:p-[100px] bg-gray-900'>
          <div className='grid grid-cols-1 bg-gray-800 rounded-lg p-[30px] gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {statistics.map((statistic, index) => (
              <div
                key={index}
                className='p-4 bg-gray-900 rounded-lg shadow-md text-white'
              >
                <p className='text-sm text-right text-gray-300 font-semibold mb-2'>
                  {statistic.title}
                </p>
                <div className='flex gap-2'>
                  <i>
                    <FontAwesomeIcon
                      icon={statistic.icon}
                      className={`${statistic.colorClass} text-2xl mb-2`}
                    />
                  </i>
                  <p className='bg-gray-400 rounded-md p-2 w-full text-right align-center'>
                    {statistic.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RecentRegistrations />
      <RecentDeposits />
    </div>
  )
}

export default AdminHome
