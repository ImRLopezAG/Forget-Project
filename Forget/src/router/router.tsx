import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import ErrorPage from './ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>
      },
      {
        path: '/about',
        element: <h1>About</h1>
      },
      {
        path: '/women',
        element: <h1>Women</h1>
      }
    ]
  }
])
