/* eslint-disable @typescript-eslint/consistent-type-assertions */
import Api from '@/api/service'
import { Base } from '@/utils/interface'
import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

interface Props {
  id?: string
  entity: string
  queryClient: ReturnType<typeof useQueryClient>
}
interface Return<TEntity extends Base> {
  isLoading: boolean
  error: Error | null
  mutate: UseMutateFunction
  handleData: (entity: TEntity) => void
}

export function useSave<TEntity extends Base> (props: Props): Return<TEntity> {
  const { id, entity, queryClient } = props
  const [data, setData] = useState<TEntity>({} as TEntity)

  const api = new Api<TEntity>(entity)

  const handleData = (entity: TEntity): void => setData(entity)

  const save = useMutation<TEntity, Error>({
    mutationFn: async () =>
      id ? await api.update(id, data) : await api.create(data),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: [entity] })
  })

  const { isLoading, error, mutate } = save

  return { isLoading, error, mutate, handleData }
}
