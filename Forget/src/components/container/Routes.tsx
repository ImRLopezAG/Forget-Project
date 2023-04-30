import { NavLink } from 'react-router-dom'

export const Routes: React.FC = () => {
  return (
    <ul className='flex flex-col sm:flex-row items-start content-start gap-4 text-start'>
      <li className='max-[420px]:ml-44'>
        <NavLink
          to='/home'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-house-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>Home</span>
        </NavLink>
      </li>
      <li className='max-[420px]:ml-44'>
        <NavLink
          to='/about'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-grid-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>About</span>
        </NavLink>
      </li>
      {/* <li className='max-[420px]:ml-44'>
        <NavLink
          to='/men'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-house-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>Men</span>
        </NavLink>
      </li>
      <li className='max-[420px]:ml-44'>
        <NavLink
          to='/women'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-house-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>Women</span>
        </NavLink>
      </li> */}
      <li className='max-[420px]:ml-44'>
        <NavLink
          to='/shop'
          className='text-md font-medium text-white hover:text-primary-500'
        >
          <i className='bi bi-bag-fill text-white hidden max-[420px]:inline-block' />
          <span className='ml-2'>Shop</span>
        </NavLink>
      </li>
      <li className='max-[420px]:ml-44'>
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
