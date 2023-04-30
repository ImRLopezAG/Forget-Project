import { instance } from '@/api/service'
import { useLogin } from '@/hooks/useLogin'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface IForm {
  username: string
  password: string
}
interface IError {
  hasError: boolean
  errorMessage: string
}

export const Login: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    username: '',
    password: ''
  })
  const [error, setError] = useState<IError>({
    hasError: false,
    errorMessage: ''
  })

  const { username, password } = form
  const { hasError, errorMessage } = useLogin({ username })
  const { hasError: pss, errorMessage: pssMessage } = error

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value
    })
    if (error.hasError && target.name === 'password') {
      setError({
        hasError: false,
        errorMessage: ''
      })
    }
  }

  const handleLogin = async (): Promise<void> => {
    try {
      await Promise.resolve(
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
    } catch (error) {
      console.log(error)
      await Promise.reject(error)
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
    await toast.promise(handleLogin(), {
      loading: 'Loading',
      success: 'Login success',
      error: 'Login failed'
    })
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full max-w-sm'>
      <div className='md:flex md:items-baseline mb-6'>
        <div className='md:w-1/3'>
          <label
            className='block text-primary-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='username'
          >
            Username
          </label>
        </div>
        <div className='md:w-2/3'>
          <input
            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500 ${
              hasError ? 'border-red-500 focus:border-red-500' : ''
            }`}
            id='username'
            name='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleChange}
          />
          {hasError && (
            <p className='text-red-500 text-xs italic'>{errorMessage}</p>
          )}
        </div>
      </div>
      <div className='md:flex md:items-baseline mb-6'>
        <div className='md:w-1/3'>
          <label
            className='block text-primary-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='password'
          >
            Password
          </label>
        </div>
        <div className='md:w-2/3'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500'
            id='password'
            name='password'
            type='password'
            placeholder='*****'
            value={password}
            onChange={handleChange}
          />
          {pss && <p className='text-red-500 text-xs italic'>{pssMessage}</p>}
        </div>
      </div>
      <div className='md:flex md:items-center'>
        <div className='md:w-1/3' />
        <div className='md:w-2/3'>
          <input
            className='shadow bg-primary-500 hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
            type='submit'
            value='Sign In'
          />
        </div>
      </div>
    </form>
  )
}
