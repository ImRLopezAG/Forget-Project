import { NavLink } from 'react-router-dom'
import { Routes } from './container/Routes'
import { useState } from 'react'

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className='fixed top-0 z-50 w-full'>
        <div className='flex items-center justify-between'>
          <NavLink to='/' className='text-2xl font-bold text-white'>
            <span className='ml-2' onClick={toggleMenu}>Forget</span>
          </NavLink>
          <button className='sm:hidden' onClick={toggleMenu} type='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
            <span className='sr-only'>Open main menu</span>
          </button>
          <div className='hidden sm:block'>
            <Routes />
          </div>
          <div className='hidden sm:block' />
        </div>
      </nav>
      <aside
        id='slider'
        className={`fixed sm:hidden top-0 right-0 z-40 w-28 h-screen pt-8 transition-transform bg-side ${isMenuOpen ? '' : 'hidden'}`}
      >
        <div className='h-full pt-4 overflow-y-auto'>
          <Routes />
        </div>
      </aside>
    </>
  )
}
