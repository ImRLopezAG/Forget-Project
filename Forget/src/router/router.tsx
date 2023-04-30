import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { About, Cart, Home, Login, Men, Shop, Women } from '@/components'

import ErrorPage from './ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/women',
        element: <Women />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  }
])
