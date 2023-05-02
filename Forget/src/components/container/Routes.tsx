import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Routes: React.FC = () => {
  const [isItemsVisible, setIsItemsVisible] = useState(false)
  const screenSm = window.innerWidth <= 420

  return (
    <ul className='flex flex-col sm:flex-row gap-4 '>
      <li className='ml-4 sm:ml-0'>
        <NavLink
          to='/home'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-house-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>Home</span>
        </NavLink>
      </li>
      <li className='ml-4 sm:ml-0'>
        <NavLink
          to='/about'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-grid-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>About</span>
        </NavLink>
      </li>
      {screenSm && (
        <>
          <li className='ml-4 sm:ml-0'>
            <button
              className='text-md font-medium text-white hover:text-primary-500'
              type='button'
              onClick={() => setIsItemsVisible(!isItemsVisible)}
            >
              <i className='bi bi-bag-fill text-white hidden max-[420px]:inline-block' />
              <span className='ml-2'>Items</span>
            </button>
          </li>
          {isItemsVisible && <Items />}
        </>
      )}

      {!screenSm && <Items />}
      <li className='ml-4 sm:ml-0'>
        <NavLink
          to='/cart'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-cart-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>Cart</span>
        </NavLink>
      </li>
    </ul>
  )
}

const Items = (): JSX.Element => {
  return (
    <>
      <li className='ml-4 sm:ml-0'>
        <NavLink
          to='/men'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <span className='ml-6'>Men</span>
        </NavLink>
      </li>
      <li className='ml-4 sm:ml-0'>
        <NavLink
          to='/women'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <span className='ml-6'>Women</span>
        </NavLink>
      </li>
    </>
  )
}
