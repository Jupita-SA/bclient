import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/signup/SignUp'
import { SignIn } from './pages/signin/SignIn'
import AdminHome from './components/adminDashboard/home/AdminHome'
import AdminUsers from './components/adminDashboard/users/AdminUsers'
import { DasboardHome } from './components/adminDashboard/DasboardHome'
import AccountManagement from './components/adminDashboard/accountmanage/AccountManagement'
import FinancialManagement from './components/adminDashboard/financialmanagement/FinancialManagement'
import AssetManagement from './components/adminDashboard/assetmanagement/AssetManagement'
import Trading from './components/adminDashboard/trading/Trading'
import { DasboardUser } from './components/userDashboard/DasboardUser'
import AccountOverview from './components/userDashboard/accountinfo/AccountOverview'
import FundsManagement from './components/userDashboard/fundsmanagement/FundsManagement'
import TradingInterface from './components/userDashboard/tradinginterface/TradingInterface'
import TransactionHistory from './components/userDashboard/transhistory/TransactionHistory'
import SupportAndHelp from './components/userDashboard/supporthelp/SupportAndHelp '
import AccountVerification from './components/userDashboard/KYC/AccountVerification'

function App () {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/signin' element={<SignIn />} />
            <Route path='/dashboard/*' element={<DasboardHome />}>
              <Route index element={<AdminHome />} />
              <Route path='users' element={<AdminUsers />} />
              <Route path='account' element={<AccountManagement />} />
              <Route path='finance' element={<FinancialManagement />} />
              <Route path='asset' element={<AssetManagement />} />
              <Route path='trading' element={<Trading />} />
            </Route>
            <Route path='/userdashboard/*' element={<DasboardUser />}>
              <Route index element={<AccountOverview />} />
              <Route path='managefunds' element={<FundsManagement />} />
              <Route path='trading' element={<TradingInterface />} />
              <Route
                path='transactionhistory'
                element={<TransactionHistory />}
              />
              <Route path='support' element={<SupportAndHelp />} />
              <Route path='accountverification' element={<AccountVerification />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
