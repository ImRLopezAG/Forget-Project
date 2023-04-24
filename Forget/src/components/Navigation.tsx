import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/women'}>Women</Link>
        </li>
      </ul>
    </nav>
  )
}
