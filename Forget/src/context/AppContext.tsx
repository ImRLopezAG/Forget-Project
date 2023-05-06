import { createContext } from 'react'
import { useAuthStore } from './authStore'
import { User } from '@/utils'

interface AppContextProps {
  user: User | null
}
const AppContext = createContext<AppContextProps>({
  user: null
})

interface AppProviderProps {
  children: React.ReactNode
}
export function AppProvider ({ children }: AppProviderProps): JSX.Element {
  const { user } = useAuthStore.getState()

  return (
    <AppContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
