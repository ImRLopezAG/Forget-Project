import Api from '@/api/service'
import { Base } from '@/utils/interface'
import { useQuery } from '@tanstack/react-query'

interface Props {
  id?: string
  entity: string
}
interface Return<TEntity extends Base> {
  data: TEntity | TEntity[] | undefined
  isLoading: boolean
  error: Error | null
  queryKey: [string, string]
}
export function useFetch<TEntity extends Base> (props: Props): Return<TEntity> {
  const { id, entity } = props
  const api = new Api<TEntity>(entity)
  const { data, isLoading, error } = useQuery<TEntity | TEntity[], Error>({
    queryKey: [entity, id ?? ''],
    queryFn: async () => (id ? await api.get(id) : await api.getList())
  })
  return { data, isLoading, error, queryKey: [entity, id ?? ''] }
}
