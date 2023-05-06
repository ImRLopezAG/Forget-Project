import { User } from '@/utils'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  token: string | null
  user: User | null
}
interface Action {
  setToken: (token: string) => void
  setUser: (user: User) => void
  deleteUser: () => void
  deleteToken: () => void
}
export const useAuthStore = create(
  persist<State & Action>(
    (set, get) => ({
      token: null,
      setToken: (token: string) => {
        set({ token })
      },
      user: null,
      setUser: (user: User) => {
        set({ user })
      },
      deleteUser: () => {
        set({ user: null })
      },
      deleteToken: () => {
        set({ token: null })
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
