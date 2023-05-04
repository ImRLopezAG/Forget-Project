import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  token: string | null
}
interface Action {
  setToken: (token: string) => void
}
export const useAuthStore = create(
  persist<State & Action>(
    (set, get) => ({
      token: null,
      setToken: (token: string) => {
        set({ token })
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
