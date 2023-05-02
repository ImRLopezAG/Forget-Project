import { useState } from 'react'

interface Return<TEntity> {
  form: TEntity
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  resetForm: () => void
}

export function useForm<TEntity> (initialState: TEntity): Return<TEntity> {
  const [form, setForm] = useState(initialState)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value
    })
  }
  const resetForm = (): void => setForm(initialState)
  return {
    form,
    handleChange,
    resetForm
  }
}
