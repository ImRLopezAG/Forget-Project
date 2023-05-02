import { Submit } from '@/components/Submit'
import { useForm, useSave } from '@/hooks'
import { ICategory } from '@/router/loaders/categoryLoader'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useParams, useRouteLoaderData } from 'react-router-dom'

export const CategoryForm: React.FC = () => {
  const data = useRouteLoaderData('category') as ICategory
  const params = useParams()
  const { id } = params
  const queryClient = useQueryClient()

  const { form, handleChange, resetForm } = useForm<ICategory>({
    id: id ? data.id : '',
    name: id ? data.name : ''
  })
  const [submit, setSubmit] = useState<boolean>(false)

  const { name } = form

  const { mutate, isLoading, error, handleData } = useSave<ICategory>({
    id,
    entity: 'category',
    queryClient
  })
  useEffect(() => {
    if (submit) {
      mutate()
      setSubmit(false)
    }
  }, [submit])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    handleData(form)
    setSubmit(true)
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full max-w-sm'>
      {error && <div className='text-red-500'>{error.message}</div>}
      <div className='md:flex md:items-baseline mb-6'>
        <div className='md:w-1/3'>
          <label
            className='block text-primary-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='name'
          >
            Name
          </label>
        </div>
        <div className='md:w-2/3'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary-500'
            id='name'
            name='name'
            type='text'
            placeholder='name'
            value={name}
            onChange={handleChange}
          />
        </div>
      </div>
      <Submit isLoading={isLoading} text='Create' />
    </form>
  )
}
