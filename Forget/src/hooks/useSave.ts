import Api from '@/api/service'
import { Base } from '@/constant/interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface Props<TEntity extends Base> {
  id?: string
  entity: string
  data: TEntity
}

export function useSave<TEntity extends Base> (props: Props<TEntity>): { isLoading: boolean, error: Error | null } {
  const { id, entity, data } = props

  const api = new Api<TEntity>(entity)

  const queryClient = useQueryClient()

  const { isLoading, error } = useMutation<TEntity, Error>({
    mutationFn: async () => id ? await api.update(id, data) : await api.create(data),
    onSuccess: async () => await queryClient.invalidateQueries({ queryKey: [entity] })
  })

  return { isLoading, error }
}
