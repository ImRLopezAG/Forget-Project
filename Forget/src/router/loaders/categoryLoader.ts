import { Base } from '@/utils'
import { LoaderFunction } from 'react-router-dom'
import { loader } from './loader'

export interface ICategory extends Base {
  name: string
}

export const categoryLoader: LoaderFunction = async ({ params }) => await loader<ICategory>({
  entity: 'category',
  params
})
