import { instance } from '@/api/service'
import { Base } from '@/utils'

interface Props {
  entity: string
  params: {
    id?: string
  }
}
export async function loader<TEntity extends Base> ({ entity, params }: Props): Promise<TEntity> {
  const { id } = params
  const { data } = await instance.get<TEntity>(`${entity}/get/?id=${id}`)
  return data
}
