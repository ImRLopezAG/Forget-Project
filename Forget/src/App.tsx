import { Outlet } from 'react-router-dom'
import { Navigation } from './components'

export const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div>App</div>
      <Outlet />
    </div>
  )
}
