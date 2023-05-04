import { instance } from '@/api/service'
import { useAuthStore } from '@/context/authStore'
import { IError } from '@/utils/interface'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useValidate } from './useValidate'

interface Return {
  errorMessage: string
  hasError: boolean
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  error: IError
  resetError: () => void
  isLoading: boolean
}
interface Props {
  username: string
  password: string
}

export function useLogin ({ username, password }: Props): Return {
  const [error, setError] = useState<IError>({
    hasError: false,
    errorMessage: ''
  })
  const { userError } = useValidate({ username })

  const { hasError, errorMessage } = userError

  const setToken = useAuthStore((state) => state.setToken)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true)
      const login = await Promise.resolve(
        instance.post(
          '/auth/login',
          {
            username,
            password
          },
          {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
          }
        )
      )
      if (login.status === 200) {
        const { token } = login.data
        setToken(token)
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      await Promise.reject(error)
      setIsLoading(false)
    }
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    if (!password) {
      return setError({
        hasError: true,
        errorMessage: 'password is required'
      })
    }
    try {
      await instance.post(`user/username/${username}`, {})
    } catch (error) {
      return setError({
        hasError: true,
        errorMessage: 'username is not found'
      })
    }
    await toast.promise(handleLogin(), {
      loading: 'Loading',
      success: 'Login success',
      error: 'Login failed'
    })
  }

  const resetError = (): void => {
    setError({
      hasError: false,
      errorMessage: ''
    })
  }

  return { hasError, errorMessage, handleSubmit, error, resetError, isLoading }
}
