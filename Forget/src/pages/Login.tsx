import { Submit } from '@/components'
import { useForm, useLogin } from '@/hooks'
import { useEffect } from 'react'

interface IForm {
  username: string
  password: string
}

export const Login: React.FC = () => {
  const { form, handleChange } = useForm<IForm>({
    username: '',
    password: ''
  })
  const { username, password } = form
  const { hasError, errorMessage, handleSubmit, error, resetError, isLoading } =
    useLogin(form)
  const { hasError: pss, errorMessage: pssMessage } = error

  useEffect(() => {
    if (hasError || pss) resetError()
  }, [username])

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
      <Submit text='Login' isLoading={isLoading} />
    </form>
  )
}
