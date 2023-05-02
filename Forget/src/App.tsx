import { Navigation } from '@/components/Navigation'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import './index.css'

export default function App (): JSX.Element {
  return (
    <>
      <Navigation />
      <section className='mt-8 px-4'>
        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
            success: {
              duration: 1000,
              style: {
                background: '#363636',
                color: '#fff'
              }
            },
            error: {
              duration: 1000,
              style: {
                background: '#363636',
                color: '#fff'
              }
            }
          }}
        />
        <div className='container'>
          <Outlet />
        </div>
      </section>
    </>
  )
}
