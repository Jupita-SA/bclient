import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faIdCard,
  faUsers,
  faHandshake,
  faFileAlt,
  faWallet,
  faComments,
  faSignOutAlt,
  faBars,
  faAngleUp,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons' // Import specific icons
import './style.css'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [collapsedItems, setCollapsedItems] = useState([])
  const Menus = [
    {
      title: 'Account Overview',
      icon: faTachometerAlt,
      link: '/userdashboard'
    },
    {
      title: 'KYC',
      icon: faIdCard,
      link: '/userdashboard/accountverification'
    },
    {
      title: 'Trade History',
      icon: faUsers,
      link: '/userdashboard/transactionhistory',
      gap: true
      //   subItems: [
      //     { title: 'All Users', link: '/dashboard/users/all' },
      //     { title: 'Active Users', link: '/dashboard/users/active' },
      //     { title: 'Inactive Users', link: '/dashboard/users/inactive' }
      //   ]
    },
    { title: 'Trading', icon: faHandshake, link: '/userdashboard/trading' },
    {
      title: 'Funds Management',
      icon: faWallet,
      link: '/userdashboard/managefunds'
    },
    {
      title: 'Manage Asset',
      icon: faFileAlt,
      // link: '/dashboard/asset',
      gap: true
    },
    {
      title: 'Support & Communication',
      icon: faComments,
      link: '/userdashboard/support'
    },
    { title: 'Logout', icon: faSignOutAlt }
  ]

  // Function to toggle the collapse/expand state of an item
  const toggleCollapse = index => {
    if (collapsedItems.includes(index)) {
      setCollapsedItems(collapsedItems.filter(item => item !== index))
    } else {
      setCollapsedItems([...collapsedItems, index])
    }
  }

  return (
    <div className='flex'>
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } duration-300 h-[101vh] p-5 z-index-9000 pt-8 bg-gray-900 absolute`}
      >
        <i
          className={`absolute cursor-pointer rounded-full bg-white align-center -right-3 top-9 w-7 border-2 border-dark-purple ${
            open ? 'rotate-0' : 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon className='ml-[5px]' icon={faBars} />
        </i>
        <div className='flex gap-x-4 items-center'>
          <img
            src='./src/assets/control.png'
            className={`w-7 cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <li key={index}>
              <div>
                <div
                  className={`text-gray-300 hover:text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md ${
                    menu.gap ? 'mt-9' : 'mt-2'
                  } ${index === 0 && 'bg-light-white'}`}
                >
                  <Link to={menu.link} className='flex items-center'>
                    <FontAwesomeIcon
                      icon={menu.icon} // Use the specified FontAwesome icon
                      className='w-5 duration-200'
                    />
                    <span
                      className={`${
                        !open && 'hidden'
                      } origin-left duration-200 ml-2`}
                    >
                      {menu.title}
                    </span>
                  </Link>
                  {menu.subItems && (
                    <div
                      className='ml-auto cursor-pointer'
                      onClick={() => toggleCollapse(index)}
                    >
                      <FontAwesomeIcon
                        icon={
                          collapsedItems.includes(index)
                            ? faAngleDown
                            : faAngleUp
                        }
                        className={`${
                          !open && 'hidden'
                        } origin-left duration-200`}
                      />
                    </div>
                  )}
                </div>
                {menu.subItems && !collapsedItems.includes(index) && (
                  <ul className='pl-8'>
                    {menu.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={`text-gray-300 hover:text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded-md`}
                      >
                        <Link to={subItem.link} className='flex items-center'>
                          <span>{subItem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{ overflowY: 'auto', height: 'calc(109vh - 64px)' }}
        className='bg-gray-100 w-full'
      >
        <div className='pl-[80px]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
