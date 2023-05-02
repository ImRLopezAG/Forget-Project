import App from '@/App'
import {
  AdminHome,
  CategoryForm,
  ProductForm,
  UserForm
} from '@/components/admin/forms'
import { About, Cart, Home, Login, Men, Shop, Women } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import { categoryLoader } from './loaders/categoryLoader'

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
        path: 'home',
        element: <Home />
      },
      {
        path: 'men',
        element: <Men />
      },
      {
        path: 'women',
        element: <Women />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'admin',
        element: <AdminHome />,
        children: [
          {
            path: '/admin/category',
            element: <CategoryForm />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: '/admin/category/:id',
                id: 'category',
                loader: categoryLoader,
                element: <CategoryForm />
              }
            ]
          },
          {
            path: '/admin/product',
            element: <ProductForm />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: '/admin/product/:id',
                element: <ProductForm />
              }
            ]
          },
          {
            path: '/admin/user',
            element: <UserForm />
          }
        ]
      }
    ]
  }
])
