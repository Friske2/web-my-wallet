import { createBrowserRouter } from 'react-router-dom'
import PageHome from './views/Home'
import PageWallet from './views/Wallet'
import PageLedger from './views/Ledger'
import PageTramsfer from './views/Transfer'
import PageAddWallet from './views/AddWallet'
const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />
  },
  {
    path: '/wallet/add',
    element: <PageAddWallet />
  },
  {
    path: '/wallet/:id',
    element: <PageWallet />
  },
  {
    path: '/ledger',
    element: <PageLedger />
  },
  {
    path: '/transfer',
    element: <PageTramsfer />
  },
])

export default router